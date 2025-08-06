import { Request, Response } from "express";
import { adminService } from "./admin.service";

const pick = (obj: any, keys: string[]) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key))
  );
};

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const filteredQuery = pick(req.query, [
      "searchTerm",
      "email",
      "contactNumber",
      "name",
    ]);

    const result = await adminService.getAllAdmin(filteredQuery);
    return res.status(200).json({
      status: "success",
      message: "Admins retrieved successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to retrieve admins",
      error: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

export const adminController = {
  getAllAdmin,
  // Add other admin-related methods here
};
