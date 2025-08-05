import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 3000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

main().catch((error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});
