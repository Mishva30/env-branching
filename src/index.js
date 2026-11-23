import config from './config/index.js';
import { connectDB } from './db.js';
import app from './app.js';

try {
  await connectDB();
  app.listen(config.port, () => {
    console.log(`[${config.env}] Server running on port ${config.port}`);
  });
} catch (err) {
  console.error('Failed to start:', err.message);
  process.exit(1);
}
