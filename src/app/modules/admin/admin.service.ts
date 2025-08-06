import { PrismaClient } from "@prisma/client";
import { adminSearchableFields } from "./admin.constant";

const prisma = new PrismaClient();

const getAllAdmin = async (params: any, options: any) => {
  const conditions: any[] = [];
  const { searchTerm, ...filterData } = params;
  const { sortBy, sortOrder, limit, page } = options;

  if (searchTerm) {
    conditions.push({
      OR: adminSearchableFields.map((field) => ({
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
    take: Number(limit),
    skip: (Number(page) - 1) * Number(limit),
  });

  return admins;
};

export const adminService = {
  getAllAdmin,
};
