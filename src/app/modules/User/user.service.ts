import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const createAdmin = async (data: any) => {
  const userData = {
    email: data.admin.email,
    password: data.password,
    role: UserRole.ADMIN,
  };

  const adminData = {
    name: data.admin.name,
    email: data.admin.email,
    contactNumber: data.admin.contactNumber,
  };

  const result = await prisma.$transaction(async (tx: PrismaClient) => {
    const user = await tx.user.create({
      data: userData,
    });

    const admin = await tx.admin.create({
      data: adminData,
    });

    return { user, admin };
  });

  return result;
};

export const userService = {
  createAdmin,
  // Add other user-related methods here
};
