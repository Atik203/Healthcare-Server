import cors from "cors";
import express, { Application } from "express";
import { userRoutes } from "./app/modules/User/user.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Include this line to parse URL-encoded bodies

app.use("/api/v1/user", userRoutes);

export default app;
