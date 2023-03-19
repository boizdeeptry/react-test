import asyncHandler from "express-async-handler";
import moment from "moment";
import BodyRecord from "../model/bodyRecordModel.js";

const createBodyRecord = asyncHandler(async (req, res) => {
  const { date, bodyFat, bodyWeight } = req.body;

  const bodyRecord = await BodyRecord.create({
    user: req.user._id,
    date,
    bodyFat,
    bodyWeight,
  });

  if (bodyRecord) {
    res.status(201).json({
      _id: bodyRecord._id,
      date: bodyRecord.date,
      bodyFat: bodyRecord.bodyFat,
      bodyWeight: bodyRecord.bodyWeight,
    });
  } else {
    res.status(400);
    throw new Error("Invalid body record data");
  }
});

const getBodyRecords = asyncHandler(async (req, res) => {
  // filter by date
  const filter = {};
  if (req.query.date) {
    filter.date = req.query.date;

    const data = await BodyRecord.find({
      user: req.user._id,
      date: req.query.date,
    });

    res.json(data);
  }

  if (req.query.month) {
    filter.month = req.query.month;

    const date = new Date(filter.month);

    const month = date.toLocaleDateString("en-US", { month: "numeric" });

    const year = date.toLocaleDateString("en-US", { year: "numeric" });

    const data = await BodyRecord.find({
      user: req.user._id,
      $expr: {
        $and: [
          { $eq: [{ $month: "$date" }, month] },
          { $eq: [{ $year: "$date" }, year] },
        ],
      },
    }).sort({ date: 1 });

    res.json(data);
  }

  if (req.query.startDate && req.query.endDate) {
    filter.startDate = req.query.startDate;
    filter.endDate = req.query.endDate;

    const start = new Date(filter.startDate);
    const end = new Date(filter.endDate);

    if (start < end) {
      const data = await BodyRecord.find({
        user: req.user._id,
        $and: [{ date: { $gte: start } }, { date: { $lte: end } }],
      }).sort({ date: 1 });

      res.json(data);
    } else if (start.getTime() === end.getTime()) {
      const data = await BodyRecord.find({
        user: req.user._id,
        date: start,
      }).sort({ date: 1 });

      res.json(data);
    }
  }

  if (req.query.startMonth && req.query.endMonth) {
    filter.startMonth = req.query.startMonth;
    filter.endMonth = req.query.endMonth;

    const start = new Date(filter.startMonth);

    const end = new Date(filter.endMonth);

    if (start < end) {
      const data = await BodyRecord.find({
        user: req.user._id,
        $and: [{ date: { $gte: start } }, { date: { $lt: end } }],
      }).sort({ date: 1 });

      res.json(data);
    } else if (start.getTime() === end.getTime()) {
      const data = await BodyRecord.find({
        user: req.user._id,
        date: start,
      }).sort({ date: 1 });

      res.json(data);
    }
  }

  if (req.query.year) {
    filter.year = req.query.year;
    const year = moment(filter.year).isoWeekYear();

    const data = await BodyRecord.find({
      user: req.user._id,
      $expr: {
        $eq: [{ $year: "$date" }, year],
      },
    }).sort({ date: 1 });

    res.json(data);
  }

  if (req.query.week) {
    filter.week = req.query.week;
    const week = moment(filter.week).isoWeeks();

    const year = moment(filter.week).isoWeekYear();

    const data = await BodyRecord.find({
      user: req.user._id,
      $expr: {
        $and: [
          { $eq: [{ $week: "$date" }, week] },
          { $eq: [{ $year: "$date" }, year] },
        ],
      },
    }).sort({ date: 1 });

    res.json(data);
  }

  if (req.query.startWeek && req.query.endWeek) {
    filter.startWeek = req.query.startWeek;
    filter.endWeek = req.query.endWeek;

    const start = moment(filter.startWeek).isoWeeks();
    const end = moment(filter.endWeek).isoWeeks();

    if (start < end) {
      const data = await BodyRecord.find({
        user: req.user._id,
        $expr: {
          $and: [
            { $gte: [{ $week: "$date" }, start] },
            { $lte: [{ $week: "$date" }, end] },
          ],
        },
      }).sort({ date: 1 });

      res.json(data);
    } else if (start === end) {
      const data = await BodyRecord.find({
        user: req.user._id,
        $expr: {
          $eq: [{ $week: "$date" }, start],
        },
      }).sort({ date: 1 });

      res.json(data);
    }
  }
});

export { createBodyRecord, getBodyRecords };
