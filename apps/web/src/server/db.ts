import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

import prisma from "@tasktrace/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? prisma;

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
