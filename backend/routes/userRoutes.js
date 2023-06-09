import express from "express";
import {
  getUserProfile,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

export default router;
