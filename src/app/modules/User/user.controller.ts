import { Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  const result = await userService.createAdmin();

  res.json("Admin user created successfully");
};

export const userController = {
  createAdmin,
};
