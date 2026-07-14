import express from "express";
import { googleAuth, refreshToken, logout, getUser } from "../controllers/AuthControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", googleAuth);
router.post("/refresh", refreshToken);
router.post("/logout", logout);
router.get("/me", protect, getUser);


export default router;