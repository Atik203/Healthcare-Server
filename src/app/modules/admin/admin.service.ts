import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllAdmin = async (params: any) => {
  const conditions: any[] = [];

  if (params.searchTerm) {
    conditions.push({
      OR: [
        {
          name: {
            contains: params.searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: params.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  const result = await prisma.admin.findMany({
    where: {
      OR: conditions,
    },
  });
  return result;
};

export const adminService = {
  getAllAdmin,
};
