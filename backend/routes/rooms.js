import express from "express";
const router = express.Router();

import {
  createRoom,
  getUserRooms,
  getMessages,
} from "../controllers/roomController.js";

router.get("/", getUserRooms);
router.post("/", createRoom);
router.get("/:roomId", getMessages);

export default router;
