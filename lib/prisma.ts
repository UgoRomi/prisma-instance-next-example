import { getPrisma, PrismaClient } from '@ugoromi/prisma-instance/dist';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || getPrisma();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
