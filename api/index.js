import express from 'express';
import cors from 'cors';
import apiRoutes from './server/routes/api.js';
import { initializeDatabase } from './server/db/index.js';

const app = express();

// Enable CORS for Vercel / external frontend calls
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

// Initialize DB promise singleton so serverless invocations reuse connection
let dbInitPromise = null;
app.use(async (req, res, next) => {
  if (!dbInitPromise) {
    dbInitPromise = initializeDatabase().catch((err) => {
      console.error('[Vercel API DB Init Error]:', err);
      dbInitPromise = null;
    });
  }
  await dbInitPromise;
  next();
});

// Mount API routes
app.use('/api', apiRoutes);

// Root health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: 'vercel-serverless' });
});

export default app;
