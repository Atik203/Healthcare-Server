import { Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userService.createAdmin(req.body);

    return res.status(201).json({
      status: "success",
      message: "Admin created successfully",
      data: {
        user: result.user,
        admin: result.admin,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to create admin",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
};

export const userController = {
  createAdmin,
};
