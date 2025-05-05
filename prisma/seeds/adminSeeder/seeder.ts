import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function seedAdminUser() {
  const adminEmail = 'backend@mailinator.com';

  const hashedPassword = await bcrypt.hash('Test@12345', 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: 'Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
    create: {
      name: 'Admin',
      email: adminEmail,
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
}
