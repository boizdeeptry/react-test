import asyncHandler from "express-async-handler";
import Diary from "../model/diaryModel.js";

const createDiary = asyncHandler(async (req, res) => {
  const { description, date } = req.body;

  const diary = await Diary.create({
    user: req.user._id,
    description,
    date,
  });

  if (diary) {
    res.status(201).json({
      _id: diary._id,
      description: diary.description,
      date: diary.date,
    });
  } else {
    res.status(400);
    throw new Error("Invalid diary data");
  }
});

const getDiariesByDate = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;

  const options = {
    page: parseInt(page, 10) || 1,
    limit: parseInt(limit, 10) || 10,
  };
  Diary.paginate({ user: req.user._id, date: req.query.date }, options).then(
    function (result) {
      res.json(result);
    }
  );
});

const getDiaryById = asyncHandler(async (req, res) => {
  const diary = await Diary.findById(req.params.id);

  if (diary) {
    res.json(diary);
  } else {
    res.status(404);
    throw new Error("Diary not found");
  }
});

export { createDiary, getDiariesByDate, getDiaryById };
