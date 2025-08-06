import { Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  const result = await userService.createAdmin(req.body);

  return res.status(201).json({
    status: "success",
    message: "Admin created successfully",
    data: {
      user: result.user,
      admin: result.admin,
    },
  });
};

export const userController = {
  createAdmin,
};
