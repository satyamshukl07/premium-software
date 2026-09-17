import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import apiRoutes from './server/routes/api.js';
import { initializeDatabase } from './server/db/index.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Initialize SQL database schema & initial seed if needed
  try {
    await initializeDatabase();
  } catch (err) {
    console.error('[Server] Database initialization failed:', err);
  }

  app.use(express.json());

  // API routes
  app.use('/api', apiRoutes);

  // Vite middleware for dev
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
