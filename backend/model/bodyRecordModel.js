import mongoose from "mongoose";

const bodyRecordSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: {
      type: Date,
      required: true,
    },
    bodyFat: {
      type: Number,
      required: true,
    },
    bodyWeight: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BodyRecord = mongoose.model("BodyRecord", bodyRecordSchema);

export default BodyRecord;
