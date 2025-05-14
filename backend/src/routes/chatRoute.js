import express from "express";
import { protectRoute } from "../middleware/middleware.js";
import { getStreamToken } from "../controllers/chatController.js";

const router = express.Router();

router.get("/token", protectRoute, getStreamToken);

export default router;