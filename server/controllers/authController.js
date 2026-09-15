import bcrypt from 'bcryptjs';
import { query } from '../db/index.js';
import { generateAdminToken } from '../middleware/auth.js';

export async function login(req, res) {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.',
      });
    }

    const cleanEmail = email.toLowerCase().trim();
    const result = await query('SELECT * FROM admins WHERE email = $1', [cleanEmail]);

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials.',
      });
    }

    const admin = result.rows[0];
    const isMatch = await bcrypt.compare(password, admin.password_hash);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials.',
      });
    }

    const token = generateAdminToken(admin);

    return res.status(200).json({
      success: true,
      message: 'Authentication successful.',
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    console.error('[Admin Login Error]:', err);
    return res.status(500).json({
      success: false,
      message: err?.message ? `Login error: ${err.message}` : 'Internal server error during login.',
    });
  }
}

export async function getMe(req, res) {
  try {
    return res.status(200).json({
      success: true,
      admin: req.admin,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve profile.',
    });
  }
}

export async function changePassword(req, res) {
  try {
    const { currentPassword, newPassword } = req.body || {};
    const adminId = req.admin.id;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current password and new password are required.',
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 8 characters long.',
      });
    }

    const adminResult = await query('SELECT password_hash FROM admins WHERE id = $1', [adminId]);
    if (adminResult.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Admin not found.' });
    }

    const isMatch = await bcrypt.compare(currentPassword, adminResult.rows[0].password_hash);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Current password does not match.' });
    }

    const salt = await bcrypt.genSalt(10);
    const newHash = await bcrypt.hash(newPassword, salt);

    await query(
      'UPDATE admins SET password_hash = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2',
      [newHash, adminId]
    );

    return res.status(200).json({
      success: true,
      message: 'Password successfully updated.',
    });
  } catch (err) {
    console.error('[Change Password Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to update password.',
    });
  }
}
