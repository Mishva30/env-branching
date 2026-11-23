import mongoose from 'mongoose';
import config from './config/index.js';

export async function connectDB() {
  await mongoose.connect(config.mongoUri);
  console.log(`[${config.env}] Connected to MongoDB`);
}
