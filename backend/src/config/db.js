import 'dotenv/config';
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../prisma/generated/client/client.ts';

// Setup connection pool using PG
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Setup Prisma 7 Driver Adapter
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

export default prisma;
