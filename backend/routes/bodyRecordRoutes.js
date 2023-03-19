import express from "express";
import {
  createBodyRecord,
  getBodyRecords,
} from "../controllers/bodyRecordController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create", protect, createBodyRecord);
router.get("/", protect, getBodyRecords);

export default router;
