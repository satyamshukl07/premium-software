import { query } from '../db/index.js';
import { sendAdminNotification } from '../services/emailService.js';

/**
 * Public: Create free trial request
 */
export async function createFreeTrial(req, res) {
  try {
    const data = req.sanitizedData;

    const insertSql = `
      INSERT INTO free_trial_requests (name, email, phone, company, requirements, status)
      VALUES ($1, $2, $3, $4, $5, 'New')
      RETURNING *
    `;

    const result = await query(insertSql, [
      data.name,
      data.email,
      data.phone,
      data.company,
      data.requirements,
    ]);

    const created = result.rows[0];

    sendAdminNotification({ type: 'Free Trial Request', data: created }).catch(() => {});

    return res.status(201).json({
      success: true,
      message: 'Your free trial request has been submitted. A technician will configure your sandbox account shortly.',
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
    console.error('[Create Trial Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit free trial request. Please contact support.',
    });
  }
}

/**
 * Admin: Get all free trial requests
 */
export async function getFreeTrials(req, res) {
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
      conditions.push(`(name LIKE $${paramIndex} OR email LIKE $${paramIndex} OR company LIKE $${paramIndex} OR requirements LIKE $${paramIndex})`);
      params.push(`%${search}%`);
      paramIndex++;
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const countSql = `SELECT COUNT(*) as total FROM free_trial_requests ${whereClause}`;
    const countResult = await query(countSql, params);
    const total = parseInt(countResult.rows[0]?.total || 0, 10);

    const dataSql = `
      SELECT * FROM free_trial_requests
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
    console.error('[Get Free Trials Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve free trial requests.',
    });
  }
}

/**
 * Admin: Update trial status
 * Statuses: New, Contacted, Trial Started, Converted, Closed
 */
export async function updateFreeTrial(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const { status } = req.body || {};

    const validStatuses = ['New', 'Contacted', 'Trial Started', 'Converted', 'Closed'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const check = await query('SELECT id FROM free_trial_requests WHERE id = $1', [id]);
    if (check.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Trial request not found.' });
    }

    const updateSql = `
      UPDATE free_trial_requests
      SET status = COALESCE($1, status),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING *
    `;

    const result = await query(updateSql, [status || null, id]);

    return res.status(200).json({
      success: true,
      message: 'Trial status updated.',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('[Update Trial Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update trial request.' });
  }
}

/**
 * Admin: Delete trial request
 */
export async function deleteFreeTrial(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const check = await query('SELECT id FROM free_trial_requests WHERE id = $1', [id]);
    if (check.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Trial request not found.' });
    }

    await query('DELETE FROM free_trial_requests WHERE id = $1', [id]);

    return res.status(200).json({
      success: true,
      message: 'Trial request deleted successfully.',
    });
  } catch (err) {
    console.error('[Delete Trial Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete trial request.' });
  }
}
