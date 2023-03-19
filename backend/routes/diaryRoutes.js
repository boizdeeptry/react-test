import express from "express";
import {
  createDiary,
  getDiariesByDate,
  getDiaryById,
} from "../controllers/diaryController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create", protect, createDiary);
router.get("/", protect, getDiariesByDate);
router.get("/:id", protect, getDiaryById);

export default router;
