import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const exerciseSchema = mongoose.Schema(
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
    description: {
      type: String,
      required: true,
    },
    energy: {
      type: Number,
      required: true,
    },
    totalTime: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

exerciseSchema.plugin(mongoosePaginate);

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
