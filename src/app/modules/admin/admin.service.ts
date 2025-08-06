import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllAdmin = async (params: any) => {
  const searchFields = ["name", "email"];
  const conditions: any[] = [];

  if (params.searchTerm) {
    conditions.push({
      OR: searchFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

export const adminService = {
  getAllAdmin,
};
