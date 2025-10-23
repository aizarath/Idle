import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

import "./config/database.js";

import { login, register } from "./controllers/authController.js";

dotenv.config();

const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.VITE_URL,
    credentials: true,
  })
);

app.use(express.json());

// ROUTES
// AUTH ROUTES
app.post("/auth/register", register);
app.post("/auth/login", login);

server.listen(PORT, () => {
  console.log(`IDLE Server running on port ${PORT}`);
});

// Handle shutdown
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("HTTP Server closed");
  });
});
