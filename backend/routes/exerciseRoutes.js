import express from "express";
import {
  createExercise,
  getExerciseByDate,
  getExerciseById,
} from "../controllers/exerciseController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create", protect, createExercise);
router.get("/", protect, getExerciseByDate);
router.get("/:id", protect, getExerciseById);

export default router;
