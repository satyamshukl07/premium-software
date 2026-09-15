import fs from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import pg from 'pg';
import bcrypt from 'bcryptjs';

const require = createRequire(import.meta.url);
const { Pool } = pg;

// Detect database provider from environment
const databaseUrl = process.env.DATABASE_URL || '';
const isPostgres = databaseUrl.startsWith('postgres://') || databaseUrl.startsWith('postgresql://');

let pgPool = null;
let sqliteDb = null;
let dbType = 'sqlite';

if (isPostgres) {
  try {
    dbType = 'postgres';
    pgPool = new Pool({
      connectionString: databaseUrl,
      ssl: process.env.NODE_ENV === 'production' && !databaseUrl.includes('localhost')
        ? { rejectUnauthorized: false }
        : false,
      max: 10,
      idleTimeoutMillis: 30000,
    });
    console.log('[Database] Initialized PostgreSQL connection pool');
  } catch (err) {
    console.error('[Database] Failed to initialize PostgreSQL pool:', err);
  }
} else {
  // Use Node.js 22 built-in SQLite engine
  try {
    const { DatabaseSync } = require('node:sqlite');
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const dbPath = path.join(dataDir, 'mex_database.sqlite');
    sqliteDb = new DatabaseSync(dbPath);
    sqliteDb.exec('PRAGMA foreign_keys = ON; PRAGMA journal_mode = WAL;');
    dbType = 'sqlite';
    console.log(`[Database] Initialized SQLite database at ${dbPath}`);
  } catch (err) {
    console.error('[Database] Failed to initialize SQLite database:', err);
  }
}

/**
 * Universal SQL Query Runner
 * Accepts $1, $2 style parameterized SQL.
 * Returns { rows: Array, rowCount: number, insertId?: number }
 */
export async function query(sql, params = []) {
  if (dbType === 'postgres' && pgPool) {
    const res = await pgPool.query(sql, params);
    return {
      rows: res.rows,
      rowCount: res.rowCount,
      insertId: res.rows?.[0]?.id,
    };
  } else if (sqliteDb) {
    // Translate $1, $2, $3 to ? for SQLite
    const sqliteSql = sql.replace(/\$(\d+)/g, '?');
    const trimmed = sqliteSql.trim().toUpperCase();

    if (trimmed.startsWith('SELECT') || trimmed.includes('RETURNING')) {
      const stmt = sqliteDb.prepare(sqliteSql);
      const rows = stmt.all(...params);
      return {
        rows: rows || [],
        rowCount: rows ? rows.length : 0,
        insertId: rows?.[0]?.id,
      };
    } else {
      const stmt = sqliteDb.prepare(sqliteSql);
      const result = stmt.run(...params);
      return {
        rows: [],
        rowCount: Number(result.changes || 0),
        insertId: Number(result.lastInsertRowid || 0),
      };
    }
  } else {
    throw new Error('No database connection available');
  }
}

/**
 * Database Migration & Schema Bootstrap
 */
export async function initializeDatabase() {
  console.log(`[Database] Running schema migrations for [${dbType}]...`);

  if (dbType === 'postgres' && pgPool) {
    const postgresSchema = `
      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS enquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        company VARCHAR(255),
        subject VARCHAR(255),
        message TEXT,
        enquiry_type VARCHAR(100) DEFAULT 'General',
        source VARCHAR(100) DEFAULT 'Contact Form',
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS free_trial_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        company VARCHAR(255),
        requirements TEXT,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS demo_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        company VARCHAR(255),
        preferred_contact_method VARCHAR(50) DEFAULT 'Email',
        message TEXT,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS specialist_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        company VARCHAR(255),
        message TEXT,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        status VARCHAR(50) DEFAULT 'active',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
      CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at);
      CREATE INDEX IF NOT EXISTS idx_free_trials_status ON free_trial_requests(status);
      CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);
      CREATE INDEX IF NOT EXISTS idx_specialist_requests_status ON specialist_requests(status);
    `;
    await pgPool.query(postgresSchema);
  } else if (sqliteDb) {
    const sqliteSchema = `
      CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS enquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        company VARCHAR(255),
        subject VARCHAR(255),
        message TEXT,
        enquiry_type VARCHAR(100) DEFAULT 'General',
        source VARCHAR(100) DEFAULT 'Contact Form',
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS free_trial_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        company VARCHAR(255),
        requirements TEXT,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS demo_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        company VARCHAR(255),
        preferred_contact_method VARCHAR(50) DEFAULT 'Email',
        message TEXT,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS specialist_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        company VARCHAR(255),
        message TEXT,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email VARCHAR(255) NOT NULL UNIQUE,
        status VARCHAR(50) DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
      CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at);
      CREATE INDEX IF NOT EXISTS idx_free_trials_status ON free_trial_requests(status);
      CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);
      CREATE INDEX IF NOT EXISTS idx_specialist_requests_status ON specialist_requests(status);
    `;
    sqliteDb.exec(sqliteSchema);
  }

  // Seed default admin if none exists
  await seedInitialAdmin();
  console.log('[Database] Migrations and seeding check completed.');
}

/**
 * Seed Initial Admin Account
 */
async function seedInitialAdmin() {
  try {
    const adminEmail = (process.env.ADMIN_EMAIL || 'admin@mex.com.au').toLowerCase().trim();
    const adminPassword = process.env.ADMIN_PASSWORD || 'AdminPass123!';
    const adminName = process.env.ADMIN_NAME || 'MEX System Administrator';

    const check = await query('SELECT id, email FROM admins WHERE email = $1', [adminEmail]);

    if (check.rows.length === 0) {
      console.log(`[Database] No admin found. Seeding initial admin: ${adminEmail}`);
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(adminPassword, salt);

      await query(
        `INSERT INTO admins (name, email, password_hash, role)
         VALUES ($1, $2, $3, $4)`,
        [adminName, adminEmail, hash, 'superadmin']
      );
      console.log('[Database] Initial admin seeded successfully.');
    } else {
      console.log(`[Database] Admin account exists: ${adminEmail}`);
    }
  } catch (err) {
    console.error('[Database] Failed to seed initial admin:', err);
  }
}

export function getDatabaseStatus() {
  return {
    provider: dbType,
    connected: Boolean((dbType === 'postgres' && pgPool) || (dbType === 'sqlite' && sqliteDb)),
  };
}

export default {
  query,
  initializeDatabase,
  getDatabaseStatus,
};
