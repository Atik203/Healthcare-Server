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

export const adminService = {
  getAllAdmin,
};
