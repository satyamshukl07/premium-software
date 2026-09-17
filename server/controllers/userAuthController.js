import bcrypt from 'bcryptjs';
import { query } from '../db/index.js';
import { generateUserToken } from '../middleware/auth.js';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
  * Customer / User Sign Up (Registration)
  */
export async function signup(req, res) {
  try {
    const { name, email, password, company, phone } = req.body || {};

    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').toLowerCase().trim();
    const cleanPassword = (password || '').trim();
    const cleanCompany = (company || '').trim();
    const cleanPhone = (phone || '').trim();

    if (!cleanName || cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your full name (at least 2 characters).',
      });
    }

    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid work email address.',
      });
    }

    if (!cleanPassword || cleanPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long.',
      });
    }

    // Check if account already exists
    const existing = await query('SELECT id FROM users WHERE email = $1', [cleanEmail]);
    if (existing.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'An account with this email address already exists. Please sign in instead.',
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(cleanPassword, salt);

    // Insert new user
    const insertSql = `
      INSERT INTO users (name, email, password_hash, company, phone, role)
      VALUES ($1, $2, $3, $4, $5, 'customer')
      RETURNING id, name, email, company, phone, role, created_at
    `;
    const insertRes = await query(insertSql, [
      cleanName,
      cleanEmail,
      passwordHash,
      cleanCompany || null,
      cleanPhone || null,
    ]);

    let newUser = insertRes.rows?.[0];
    if (!newUser && insertRes.insertId) {
      const fetchRes = await query(
        'SELECT id, name, email, company, phone, role, created_at FROM users WHERE id = $1',
        [insertRes.insertId]
      );
      newUser = fetchRes.rows[0];
    }

    // Generate JWT auth token for instant login
    const token = generateUserToken(newUser);

    return res.status(201).json({
      success: true,
      message: 'Your account has been created successfully!',
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        company: newUser.company || '',
        phone: newUser.phone || '',
        role: newUser.role || 'customer',
        createdAt: newUser.created_at,
      },
    });
  } catch (err) {
    console.error('[User Sign Up Error]:', err);
    return res.status(500).json({
      success: false,
      message: err?.message ? `Sign up failed: ${err.message}` : 'Server error creating account.',
    });
  }
}

/**
  * Customer / User Login
  */
export async function login(req, res) {
  try {
    const { email, password } = req.body || {};

    const cleanEmail = (email || '').toLowerCase().trim();
    const cleanPassword = (password || '').trim();

    if (!cleanEmail || !cleanPassword) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email address and password.',
      });
    }

    const result = await query(
      'SELECT id, name, email, password_hash, company, phone, role, created_at FROM users WHERE email = $1',
      [cleanEmail]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password. If you do not have an account, please sign up first.',
      });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(cleanPassword, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password. Please verify your credentials.',
      });
    }

    // Generate JWT auth token
    const token = generateUserToken(user);

    return res.status(200).json({
      success: true,
      message: 'Login successful! Welcome back.',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        company: user.company || '',
        phone: user.phone || '',
        role: user.role || 'customer',
        createdAt: user.created_at,
      },
    });
  } catch (err) {
    console.error('[User Login Error]:', err);
    return res.status(500).json({
      success: false,
      message: err?.message ? `Login failed: ${err.message}` : 'Server error during login.',
    });
  }
}

/**
  * Retrieve authenticated user profile
  */
export async function getMe(req, res) {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve profile.',
    });
  }
}

/**
 * Admin: Get all registered customers / users
 */
export async function getAllUsers(req, res) {
  try {
    const result = await query(
      `SELECT id, name, email, company, phone, role, created_at, updated_at
       FROM users
       ORDER BY created_at DESC`
    );

    return res.status(200).json({
      success: true,
      count: result.rows.length,
      users: result.rows,
    });
  } catch (err) {
    console.error('[Admin Get All Users Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch registered users.',
    });
  }
}

/**
 * Admin: Delete a user
 */
export async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const result = await query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);

    if (result.rows.length === 0 && (!result.rowCount || result.rowCount === 0)) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User removed successfully.',
    });
  } catch (err) {
    console.error('[Admin Delete User Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete user.',
    });
  }
}

