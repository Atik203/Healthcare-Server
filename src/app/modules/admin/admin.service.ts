import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllAdmin = async (params: any) => {
  const searchFields = ["name", "email"];
  const conditions: any[] = [];
  const { searchTerm, ...filterData } = params;
  if (params.searchTerm) {
    conditions.push({
      OR: searchFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    conditions.push({
      AND: Object.entries(filterData).map(([key, value]) => ({
        [key]: {
          equals: value,
        },
      })),
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
