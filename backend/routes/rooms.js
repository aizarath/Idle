import express from "express";
const router = express.Router();

import {
  createRoom,
  getUserRooms,
  getMessages,
  getPublicRooms,
} from "../controllers/roomController.js";

router.get("/", getUserRooms);
router.post("/", createRoom);
router.get("/:roomId/chat", getMessages);
router.get("/public", getPublicRooms);

export default router;
