import asyncHandler from "express-async-handler";
import Exercise from "../model/exerciseModel.js";

const createExercise = asyncHandler(async (req, res) => {
  const { date, description, energy, totalTime } = req.body;

  const exercise = await Exercise.create({
    user: req.user._id,
    description,
    date,
    energy,
    totalTime,
  });

  if (exercise) {
    res.status(201).json({
      _id: exercise._id,
      description: exercise.description,
      date: exercise.date,
      energy: exercise.energy,
      totalTime: exercise.totalTime,
    });
  } else {
    res.status(400);
    throw new Error("Invalid exercise data");
  }
});

const getExerciseByDate = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;

  const options = {
    page: parseInt(page, 10) || 1,
    limit: parseInt(limit, 10) || 10,
  };
  Exercise.paginate({ user: req.user._id, date: req.query.date }, options).then(
    function (result) {
      res.json(result);
    }
  );
});

const getExerciseById = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params.id);

  if (exercise) {
    res.json(exercise);
  } else {
    res.status(404);
    throw new Error("Exercise not found");
  }
});

export { createExercise, getExerciseByDate, getExerciseById };
