import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import "dotenv/config";

import "./config/database.js";

import { login, register } from "./controllers/authController.js";

const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 5000;

console.log(process.env.CLIENT_URL);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// ROUTES
// AUTH ROUTES

app.post("/api/auth/register", register);
console.log("BACKEND REACHED");
app.post("/api/auth/login", login);

server.listen(PORT, () => {
  console.log(`IDLE Server running on port ${PORT}`);
});

// Handle shutdown
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("HTTP Server closed");
  });
});
