// === External Imports ===
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";

// === Internal Imports ===
import router from "./routes/api.js";
import {
  DATABASE_URI,
  PORT,
  REQUEST_LIMIT,
  REQUEST_TIME,
} from "./src/config/config.js";

// ===  Express app initialization ===
const app = express();

// === Request Limiter initialization ===
const limiter = rateLimit({ windowMs: REQUEST_TIME, limit: REQUEST_LIMIT });

// === Default Middleware ===
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(limiter);
app.use("/api", router);

app.use(express.static("../client/dist"));

// Add React Front End Routing
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../client", "dist", "index.html"));
});

// === Database Connection ===
mongoose
  .connect(DATABASE_URI, { autoIndex: true })
  .then(() => console.log("Database Connection Successful"))
  .catch(() => console.log("Database Connection Failed"));

// === Server Listen ===
app.listen(PORT, () => {
  console.log(`Server in Running on ${PORT} Port!!`);
});
