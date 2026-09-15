import { query } from '../db/index.js';
import { sendAdminNotification } from '../services/emailService.js';

/**
 * Public: Create new enquiry
 */
export async function createEnquiry(req, res) {
  try {
    const data = req.sanitizedData;

    const insertSql = `
      INSERT INTO enquiries (name, email, phone, company, subject, message, enquiry_type, source, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'New')
      RETURNING *
    `;

    const result = await query(insertSql, [
      data.name,
      data.email,
      data.phone,
      data.company,
      data.subject,
      data.message,
      data.enquiry_type,
      data.source,
    ]);

    const created = result.rows[0];

    // Asynchronously dispatch notification without blocking response
    sendAdminNotification({ type: 'Enquiry', data: created }).catch(() => {});

    return res.status(201).json({
      success: true,
      message: 'Your enquiry has been received. Our team will contact you promptly.',
      data: {
        id: created.id,
        name: created.name,
        email: created.email,
        subject: created.subject,
        status: created.status,
        created_at: created.created_at,
      },
    });
  } catch (err) {
    console.error('[Create Enquiry Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Unable to submit enquiry at this moment. Please try again or call our office directly.',
    });
  }
}

/**
 * Admin: Get enquiries with search, filter, pagination, sorting
 */
export async function getEnquiries(req, res) {
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
      conditions.push(`(name LIKE $${paramIndex} OR email LIKE $${paramIndex} OR company LIKE $${paramIndex} OR subject LIKE $${paramIndex} OR message LIKE $${paramIndex})`);
      params.push(`%${search}%`);
      paramIndex++;
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    // Count query
    const countSql = `SELECT COUNT(*) as total FROM enquiries ${whereClause}`;
    const countResult = await query(countSql, params);
    const total = parseInt(countResult.rows[0]?.total || 0, 10);

    // Data query
    const dataSql = `
      SELECT * FROM enquiries
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
    console.error('[Get Enquiries Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve enquiries.',
    });
  }
}

/**
 * Admin: Get enquiry by ID
 */
export async function getEnquiryById(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await query('SELECT * FROM enquiries WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    }

    const enquiry = result.rows[0];

    // If it's New, mark as Read automatically
    if (enquiry.status === 'New') {
      await query('UPDATE enquiries SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2', ['Read', id]);
      enquiry.status = 'Read';
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (err) {
    console.error('[Get Enquiry By ID Error]:', err);
    return res.status(500).json({ success: false, message: 'Error retrieving enquiry.' });
  }
}

/**
 * Admin: Update enquiry status / notes
 */
export async function updateEnquiry(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const { status, subject, message } = req.body || {};

    const validStatuses = ['New', 'Read', 'In Progress', 'Replied', 'Closed'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const check = await query('SELECT id FROM enquiries WHERE id = $1', [id]);
    if (check.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    }

    const updateSql = `
      UPDATE enquiries
      SET status = COALESCE($1, status),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING *
    `;

    const result = await query(updateSql, [status || null, id]);

    return res.status(200).json({
      success: true,
      message: 'Enquiry updated successfully.',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('[Update Enquiry Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update enquiry.' });
  }
}

/**
 * Admin: Delete enquiry
 */
export async function deleteEnquiry(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const check = await query('SELECT id FROM enquiries WHERE id = $1', [id]);

    if (check.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    }

    await query('DELETE FROM enquiries WHERE id = $1', [id]);

    return res.status(200).json({
      success: true,
      message: 'Enquiry deleted successfully.',
    });
  } catch (err) {
    console.error('[Delete Enquiry Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete enquiry.' });
  }
}
