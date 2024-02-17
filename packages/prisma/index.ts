import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
});
// use `prisma` in your application to read and write data in your DB

export default prisma;
