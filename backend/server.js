import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import diaryRoutes from "./routes/diaryRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js";
import bodyRecordRoutes from "./routes/bodyRecordRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const port = process.env.PORT || 4000;

app.use("/api/user", userRoutes);
app.use("/api/diary", diaryRoutes);
app.use("/api/exercise", exerciseRoutes);
app.use("/api/bodyrecord", bodyRecordRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
