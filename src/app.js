import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://adpm-tasks.netlify.app",
      "https://main--adpm-tasks.netlify.app",
      "https://651548357809a40008935662--adpm-tasks.netlify.app",
    ],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(__dirname + "../client/dist"));
app.use(
  "/assets",
  express.static(path.resolve(__dirname, "../client/dist/assets"))
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});
app.use("/api", tasksRoutes);
app.use("/api", authRoutes);

export default app;
