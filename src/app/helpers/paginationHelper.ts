export interface PaginationOptions {
  page?: string | number;
  limit?: string | number;
  sortBy?: string;
  sortOrder?: string;
}

export interface PaginationResult {
  skip: number;
  take: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
  page: number;
  limit: number;
}

export const paginationHelper = (
  options: PaginationOptions
): PaginationResult => {
  const page: number = options.page ? Number(options.page) : 1;
  const limit: number = options.limit ? Number(options.limit) : 10;
  const skip = (page - 1) * limit;
  const sortBy = options.sortBy || "createdAt";
  const sortOrder =
    options.sortOrder === "asc" || options.sortOrder === "desc"
      ? options.sortOrder
      : "desc";

  return { skip, take: limit, sortBy, sortOrder, page, limit };
};
