import { PrismaClient } from "@prisma/client";
import {
  paginationHelper,
  PaginationOptions,
} from "../../helpers/paginationHelper";
import { adminSearchableFields } from "./admin.constant";

const prisma = new PrismaClient();

const getAllAdmin = async (params: any, options: PaginationOptions) => {
  const conditions: any[] = [];
  const { searchTerm, ...filterData } = params;
  const { sortBy, sortOrder, take, skip, page, limit } =
    paginationHelper(options);

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

  // Get total count for pagination metadata
  const total = await prisma.admin.count({ where });

  const admins = await prisma.admin.findMany({
    where,
    take,
    skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });

  const totalPages = Math.ceil(total / limit);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  return {
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage,
      hasPrevPage,
    },
    data: admins,
  };
};

export const adminService = {
  getAllAdmin,
};
