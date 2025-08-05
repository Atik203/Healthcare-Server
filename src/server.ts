import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Healthcare Server is running!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
