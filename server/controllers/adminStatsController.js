import { query, getDatabaseStatus } from '../db/index.js';
import pg from 'pg';
const { Client } = pg;

/**
 * Admin: Aggregated Dashboard Statistics
 */
export async function getDashboardStats(req, res) {
  try {
    // 1. Enquiries Stats
    const totalEnquiriesRes = await query('SELECT COUNT(*) as count FROM enquiries');
    const newEnquiriesRes = await query("SELECT COUNT(*) as count FROM enquiries WHERE status = 'New'");

    // 2. Free Trials Stats
    const totalTrialsRes = await query('SELECT COUNT(*) as count FROM free_trial_requests');
    const newTrialsRes = await query("SELECT COUNT(*) as count FROM free_trial_requests WHERE status = 'New'");

    // 3. Demo Requests Stats
    const totalDemosRes = await query('SELECT COUNT(*) as count FROM demo_requests');
    const newDemosRes = await query("SELECT COUNT(*) as count FROM demo_requests WHERE status = 'New'");

    // 4. Specialist Requests Stats
    const totalSpecialistsRes = await query('SELECT COUNT(*) as count FROM specialist_requests');
    const newSpecialistsRes = await query("SELECT COUNT(*) as count FROM specialist_requests WHERE status = 'New'");

    // 5. Newsletter Subscribers Stats
    const totalSubscribersRes = await query("SELECT COUNT(*) as count FROM newsletter_subscribers WHERE status = 'active'");

    // Recent 5 Enquiries
    const recentEnquiries = await query(
      'SELECT id, name, email, company, subject, enquiry_type, status, created_at FROM enquiries ORDER BY created_at DESC LIMIT 5'
    );

    // Recent 5 Free Trials
    const recentTrials = await query(
      'SELECT id, name, email, company, requirements, status, created_at FROM free_trial_requests ORDER BY created_at DESC LIMIT 5'
    );

    // Recent 5 Demo Requests
    const recentDemos = await query(
      'SELECT id, name, email, company, preferred_contact_method, status, created_at FROM demo_requests ORDER BY created_at DESC LIMIT 5'
    );

    // Recent 5 Specialist Requests
    const recentSpecialists = await query(
      'SELECT id, name, email, company, message, status, created_at FROM specialist_requests ORDER BY created_at DESC LIMIT 5'
    );

    return res.status(200).json({
      success: true,
      stats: {
        totalEnquiries: parseInt(totalEnquiriesRes.rows[0]?.count || 0, 10),
        newEnquiries: parseInt(newEnquiriesRes.rows[0]?.count || 0, 10),
        totalTrials: parseInt(totalTrialsRes.rows[0]?.count || 0, 10),
        newTrials: parseInt(newTrialsRes.rows[0]?.count || 0, 10),
        totalDemos: parseInt(totalDemosRes.rows[0]?.count || 0, 10),
        newDemos: parseInt(newDemosRes.rows[0]?.count || 0, 10),
        totalSpecialists: parseInt(totalSpecialistsRes.rows[0]?.count || 0, 10),
        newSpecialists: parseInt(newSpecialistsRes.rows[0]?.count || 0, 10),
        totalSubscribers: parseInt(totalSubscribersRes.rows[0]?.count || 0, 10),
      },
      recent: {
        enquiries: recentEnquiries.rows,
        trials: recentTrials.rows,
        demos: recentDemos.rows,
        specialists: recentSpecialists.rows,
      },
    });
  } catch (err) {
    console.error('[Get Dashboard Stats Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate dashboard statistics.',
    });
  }
}

/**
 * Admin: System Settings & Health Info
 */
export async function getSystemSettings(req, res) {
  try {
    const dbStatus = getDatabaseStatus();
    const adminCountRes = await query('SELECT COUNT(*) as count FROM admins');

    return res.status(200).json({
      success: true,
      data: {
        app: 'Techtonika Autolink Operations Platform',
        version: '2.5.0-production',
        nodeVersion: process.version,
        uptime: Math.floor(process.uptime()),
        database: {
          provider: dbStatus.provider.toUpperCase(),
          status: dbStatus.connected ? 'Operational' : 'Degraded',
        },
        security: {
          tokenAuth: 'JWT HS256 active',
          rateLimiting: 'Active',
          passwordHashing: 'Bcrypt salt rounds: 10',
        },
        notifications: {
          adminEmail: process.env.ADMIN_NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || 'admin@techtonika.com.au',
          resendConfigured: Boolean(process.env.RESEND_API_KEY),
          sendgridConfigured: Boolean(process.env.SENDGRID_API_KEY),
        },
        adminsCount: parseInt(adminCountRes.rows[0]?.count || 0, 10),
      },
    });
  } catch (err) {
    console.error('[Get System Settings Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to load system settings.' });
  }
}

/**
 * Admin: Test a PostgreSQL Connection String before saving
 */
export async function testDatabaseConnection(req, res) {
  const { connectionUrl } = req.body || {};

  if (!connectionUrl || typeof connectionUrl !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Connection URL is required. Must start with postgresql:// or postgres://',
    });
  }

  const trimmedUrl = connectionUrl.trim();
  if (!trimmedUrl.startsWith('postgresql://') && !trimmedUrl.startsWith('postgres://')) {
    return res.status(400).json({
      success: false,
      message: 'Invalid protocol. PostgreSQL connection strings must begin with "postgresql://" or "postgres://"',
    });
  }

  let client;
  const startTime = Date.now();
  try {
    const isLocalhost = trimmedUrl.includes('localhost') || trimmedUrl.includes('127.0.0.1');
    client = new Client({
      connectionString: trimmedUrl,
      connectionTimeoutMillis: 6000,
      ssl: isLocalhost ? false : { rejectUnauthorized: false },
    });

    await client.connect();
    const latency = Date.now() - startTime;

    const versionRes = await client.query('SELECT version() AS version, current_database() AS db');
    const dbName = versionRes.rows[0]?.db || 'unknown';
    const versionString = versionRes.rows[0]?.version || '';

    // Check existing tables count
    const tableRes = await client.query(
      "SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = 'public'"
    );
    const tableCount = parseInt(tableRes.rows[0]?.count || 0, 10);

    await client.end();

    return res.status(200).json({
      success: true,
      message: `Successfully connected to PostgreSQL database "${dbName}" in ${latency}ms!`,
      details: {
        database: dbName,
        latencyMs: latency,
        version: versionString.split(' on ')[0] || versionString,
        tablesCount: tableCount,
        ready: true,
      },
    });
  } catch (err) {
    if (client) {
      try {
        await client.end();
      } catch {
        // ignore disconnect error
      }
    }

    let userFriendlyError = err.message || 'Connection failed';
    if (err.code === 'ECONNREFUSED') {
      userFriendlyError = 'Connection refused by server. Check the host, port, and firewall rules.';
    } else if (err.code === 'ENOTFOUND') {
      userFriendlyError = 'Database host address could not be resolved (DNS lookup failed). Verify hostname.';
    } else if (err.code === '28P01') {
      userFriendlyError = 'Authentication failed (incorrect username or password).';
    } else if (err.code === '3D000') {
      userFriendlyError = 'Database name does not exist on the target server.';
    }

    return res.status(400).json({
      success: false,
      message: `Connection test failed: ${userFriendlyError}`,
      code: err.code || 'CONNECTION_ERROR',
    });
  }
}

