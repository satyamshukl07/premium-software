import jwt from 'jsonwebtoken';
import { query } from '../db/index.js';

const JWT_SECRET = process.env.JWT_SECRET || 'mex-super-secure-jwt-secret-key-2026-production';

/**
 * Authentication Middleware for Admin routes
 * Extracts Bearer token from Authorization header or cookie
 */
export async function authenticateAdmin(req, res, next) {
  try {
    let token = null;
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    } else if (req.cookies && req.cookies.admin_token) {
      token = req.cookies.admin_token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required. No token provided.',
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
          success: false,
          message: 'Session expired. Please log in again.',
          expired: true,
        });
      }
      return res.status(401).json({
        success: false,
        message: 'Invalid authorization token.',
      });
    }

    // Verify admin still exists in database
    const adminCheck = await query('SELECT id, name, email, role FROM admins WHERE id = $1', [decoded.id]);

    if (adminCheck.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Admin account not found or revoked.',
      });
    }

    req.admin = adminCheck.rows[0];
    next();
  } catch (error) {
    console.error('[Auth Middleware Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal authentication error.',
    });
  }
}

/**
 * Generate JWT Token for Admin
 */
export function generateAdminToken(admin) {
  return jwt.sign(
    {
      id: admin.id,
      email: admin.email,
      role: admin.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}
