import dotenv from 'dotenv';
import path from 'node:path';

const ENVIRONMENTS = ['staging', 'preprod', 'prod'];
const env = process.env.NODE_ENV || 'staging';

if (!ENVIRONMENTS.includes(env)) {
  throw new Error(`Unknown NODE_ENV "${env}". Use one of: ${ENVIRONMENTS.join(', ')}`);
}

dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });

const config = {
  env,
  port: Number(process.env.PORT) || 3000,
  mongoUri: process.env.MONGO_URI,
};

if (!config.mongoUri) {
  throw new Error(`MONGO_URI is missing in .env.${env}`);
}

export default config;
