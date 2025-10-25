import express from "express";
const router = express.Router();

import { createRoom, getUserRooms } from "../controllers/roomController.js";

router.get("/", getUserRooms);
router.post("/", createRoom);

export default router;
