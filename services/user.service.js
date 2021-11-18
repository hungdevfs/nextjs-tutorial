import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export const get = async () => {
  await prisma.$connect();
  const users = await prisma.user.findMany();
  return users;
};

export const create = async (data) => {
  await prisma.$connect();
  await prisma.user.create({
    data
  })
}
