import { Request, Response } from "express";
import { pick } from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import { adminService } from "./admin.service";

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const filteredQuery = pick(req.query, adminFilterableFields);
    const options = pick(req.query, ["sortBy", "sortOrder", "limit", "page"]);

    const result = await adminService.getAllAdmin(filteredQuery, options);
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
