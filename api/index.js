import express from 'express';
import apiRoutes from '../server/routes/api.js';
import { initializeDatabase } from '../server/db/index.js';

const app = express();

// Standard CORS headers without external dependency
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(express.json());

// Initialize DB promise singleton so serverless invocations reuse connection
let dbInitPromise = null;
app.use(async (req, res, next) => {
  try {
    if (!dbInitPromise) {
      dbInitPromise = initializeDatabase().catch((err) => {
        console.error('[Vercel API DB Init Error]:', err);
        dbInitPromise = null;
      });
    }
    await dbInitPromise;
  } catch (err) {
    console.error('[Middleware DB Wait Error]:', err);
  }
  next();
});

// Mount API routes
app.use('/api', apiRoutes);

// Root health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: 'vercel-serverless' });
});

export default app;
