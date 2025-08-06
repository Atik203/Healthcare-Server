import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllAdmin = async (params: any) => {
  const searchFields = ["name", "email"];
  const conditions: any[] = [];
  const { searchTerm, ...filterData } = params;
  if (searchTerm) {
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
  const where = conditions.length > 0 ? { AND: conditions } : {};
  const admins = await prisma.admin.findMany({
    where,
  });

  return admins;
};

export const adminService = {
  getAllAdmin,
};
