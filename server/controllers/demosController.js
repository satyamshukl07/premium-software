import { query } from '../db/index.js';
import { sendAdminNotification } from '../services/emailService.js';

/**
 * Public: Create demo request
 */
export async function createDemoRequest(req, res) {
  try {
    const data = req.sanitizedData;

    const insertSql = `
      INSERT INTO demo_requests (name, email, phone, company, preferred_contact_method, message, status)
      VALUES ($1, $2, $3, $4, $5, $6, 'New')
      RETURNING *
    `;

    const result = await query(insertSql, [
      data.name,
      data.email,
      data.phone,
      data.company,
      data.preferred_contact_method,
      data.message,
    ]);

    const created = result.rows[0];

    sendAdminNotification({ type: 'Demo Request', data: created }).catch(() => {});

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your product demonstration request has been scheduled with our solutions engineers.',
      data: {
        id: created.id,
        name: created.name,
        email: created.email,
        company: created.company,
        status: created.status,
        created_at: created.created_at,
      },
    });
  } catch (err) {
    console.error('[Create Demo Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to record demo request. Please try again or call our office.',
    });
  }
}

/**
 * Admin: Get all demo requests
 */
export async function getDemoRequests(req, res) {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 10));
    const offset = (page - 1) * limit;

    const status = req.query.status?.trim();
    const search = req.query.search?.trim();
    const sortBy = ['created_at', 'name', 'company', 'status'].includes(req.query.sortBy) ? req.query.sortBy : 'created_at';
    const sortOrder = req.query.sortOrder?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';

    const conditions = [];
    const params = [];
    let paramIndex = 1;

    if (status && status !== 'All') {
      conditions.push(`status = $${paramIndex}`);
      params.push(status);
      paramIndex++;
    }

    if (search) {
      conditions.push(`(name LIKE $${paramIndex} OR email LIKE $${paramIndex} OR company LIKE $${paramIndex} OR message LIKE $${paramIndex})`);
      params.push(`%${search}%`);
      paramIndex++;
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const countSql = `SELECT COUNT(*) as total FROM demo_requests ${whereClause}`;
    const countResult = await query(countSql, params);
    const total = parseInt(countResult.rows[0]?.total || 0, 10);

    const dataSql = `
      SELECT * FROM demo_requests
      ${whereClause}
      ORDER BY ${sortBy} ${sortOrder}
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
    console.error('[Get Demo Requests Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve demo requests.',
    });
  }
}

/**
 * Admin: Update demo status
 * Statuses: New, Contacted, Scheduled, Completed, Closed
 */
export async function updateDemoRequest(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const { status } = req.body || {};

    const validStatuses = ['New', 'Contacted', 'Scheduled', 'Completed', 'Closed'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const check = await query('SELECT id FROM demo_requests WHERE id = $1', [id]);
    if (check.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Demo request not found.' });
    }

    const updateSql = `
      UPDATE demo_requests
      SET status = COALESCE($1, status),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING *
    `;

    const result = await query(updateSql, [status || null, id]);

    return res.status(200).json({
      success: true,
      message: 'Demo request status updated.',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('[Update Demo Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update demo request.' });
  }
}

/**
 * Admin: Delete demo request
 */
export async function deleteDemoRequest(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const check = await query('SELECT id FROM demo_requests WHERE id = $1', [id]);
    if (check.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Demo request not found.' });
    }

    await query('DELETE FROM demo_requests WHERE id = $1', [id]);

    return res.status(200).json({
      success: true,
      message: 'Demo request deleted successfully.',
    });
  } catch (err) {
    console.error('[Delete Demo Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete demo request.' });
  }
}
