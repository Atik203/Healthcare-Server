import express from "express";
import { userRoutes } from "../User/user.routes";

const router = express.Router();

const routes = [
  {
    path: "/user",
    route: userRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

import { adminRoutes } from "../admin/admin.routes";

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
