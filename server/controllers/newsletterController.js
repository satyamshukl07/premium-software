import { query } from '../db/index.js';

/**
 * Public: Subscribe to newsletter
 */
export async function subscribe(req, res) {
  try {
    const { email } = req.sanitizedData;

    // Check if already subscribed
    const existing = await query('SELECT * FROM newsletter_subscribers WHERE email = $1', [email]);

    if (existing.rows.length > 0) {
      const sub = existing.rows[0];
      if (sub.status === 'unsubscribed') {
        await query("UPDATE newsletter_subscribers SET status = 'active' WHERE email = $1", [email]);
        return res.status(200).json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.',
        });
      }
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to our newsletter.',
      });
    }

    const insertSql = `
      INSERT INTO newsletter_subscribers (email, status)
      VALUES ($1, 'active')
      RETURNING *
    `;

    const result = await query(insertSql, [email]);

    return res.status(201).json({
      success: true,
      message: 'Thank you for subscribing to our industry newsletter.',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('[Newsletter Subscribe Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Unable to register subscription at this time.',
    });
  }
}

/**
 * Admin: Get all subscribers
 */
export async function getSubscribers(req, res) {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
    const offset = (page - 1) * limit;
    const search = req.query.search?.trim();

    const conditions = [];
    const params = [];
    let paramIndex = 1;

    if (search) {
      conditions.push(`email LIKE $${paramIndex}`);
      params.push(`%${search}%`);
      paramIndex++;
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const countSql = `SELECT COUNT(*) as total FROM newsletter_subscribers ${whereClause}`;
    const countResult = await query(countSql, params);
    const total = parseInt(countResult.rows[0]?.total || 0, 10);

    const dataSql = `
      SELECT * FROM newsletter_subscribers
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;
    params.push(limit, offset);

    const dataResult = await query(dataSql, params);

    return res.status(200).json({
      success: true,
      data: dataResult.rows,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      },
    });
  } catch (err) {
    console.error('[Get Subscribers Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve newsletter subscribers.',
    });
  }
}

/**
 * Admin: Delete subscriber
 */
export async function deleteSubscriber(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const check = await query('SELECT id FROM newsletter_subscribers WHERE id = $1', [id]);
    if (check.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Subscriber not found.' });
    }

    await query('DELETE FROM newsletter_subscribers WHERE id = $1', [id]);

    return res.status(200).json({
      success: true,
      message: 'Subscriber removed successfully.',
    });
  } catch (err) {
    console.error('[Delete Subscriber Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete subscriber.' });
  }
}
