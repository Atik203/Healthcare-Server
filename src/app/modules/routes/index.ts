import express from "express";
import { adminRoutes } from "../admin/admin.routes";
import { userRoutes } from "../user/user.routes";

const router = express.Router();

const routes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
