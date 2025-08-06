import cors from "cors";
import express, { Application } from "express";
import router from "./app/modules/routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Include this line to parse URL-encoded bodies

app.use("/api/v1", router);

export default app;
