import { PrismaClient, User as PrismaUser } from "@prisma/client";

export interface AuthNewUserContext {
  user: PrismaUser | null;
  prisma: PrismaClient;
}
