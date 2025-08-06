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
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to retrieve admins",
      error: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

const getAdminById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const admin = await adminService.getAdminById(id);

    if (!admin) {
      return res.status(404).json({
        status: "error",
        message: "Admin not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Admin retrieved successfully",
      data: admin,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to retrieve admin",
      error: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};


const updateAdminById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedAdmin = await adminService.updateAdminById(id, data);
    if (!updatedAdmin) {
      return res.status(404).json({
        status: "error",
        message: "Admin not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Admin updated successfully",
      data: updatedAdmin,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to update admin",
      error: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

export const adminController = {
  getAllAdmin,
  getAdminById,
  updateAdminById,

  // Add other admin-related methods here
};
