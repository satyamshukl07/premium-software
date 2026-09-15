import { query } from '../db/index.js';
import { sendAdminNotification } from '../services/emailService.js';

/**
 * Public: Create specialist consultation request
 */
export async function createSpecialistRequest(req, res) {
  try {
    const data = req.sanitizedData;

    const insertSql = `
      INSERT INTO specialist_requests (name, email, phone, company, message, status)
      VALUES ($1, $2, $3, $4, $5, 'New')
      RETURNING *
    `;

    const result = await query(insertSql, [
      data.name,
      data.email,
      data.phone,
      data.company,
      data.message,
    ]);

    const created = result.rows[0];

    sendAdminNotification({ type: 'Specialist Consultation Request', data: created }).catch(() => {});

    return res.status(201).json({
      success: true,
      message: 'Your specialist consultation request has been received. A dedicated consultant will contact you within 1 business hour.',
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
    console.error('[Create Specialist Request Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit consultation request. Please try again.',
    });
  }
}

/**
 * Admin: Get all specialist requests
 */
export async function getSpecialistRequests(req, res) {
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

    const countSql = `SELECT COUNT(*) as total FROM specialist_requests ${whereClause}`;
    const countResult = await query(countSql, params);
    const total = parseInt(countResult.rows[0]?.total || 0, 10);

    const dataSql = `
      SELECT * FROM specialist_requests
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
    console.error('[Get Specialist Requests Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve specialist requests.',
    });
  }
}

/**
 * Admin: Update specialist request status
 * Statuses: New, Contacted, In Consultation, Closed
 */
export async function updateSpecialistRequest(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const { status } = req.body || {};

    const validStatuses = ['New', 'Contacted', 'In Consultation', 'Closed'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const check = await query('SELECT id FROM specialist_requests WHERE id = $1', [id]);
    if (check.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Specialist request not found.' });
    }

    const updateSql = `
      UPDATE specialist_requests
      SET status = COALESCE($1, status),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING *
    `;

    const result = await query(updateSql, [status || null, id]);

    return res.status(200).json({
      success: true,
      message: 'Specialist request updated.',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('[Update Specialist Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update specialist request.' });
  }
}

/**
 * Admin: Delete specialist request
 */
export async function deleteSpecialistRequest(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const check = await query('SELECT id FROM specialist_requests WHERE id = $1', [id]);
    if (check.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Specialist request not found.' });
    }

    await query('DELETE FROM specialist_requests WHERE id = $1', [id]);

    return res.status(200).json({
      success: true,
      message: 'Specialist request deleted successfully.',
    });
  } catch (err) {
    console.error('[Delete Specialist Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete specialist request.' });
  }
}
