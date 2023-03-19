import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const diarySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

diarySchema.plugin(mongoosePaginate);

const Diary = mongoose.model("Diary", diarySchema);

export default Diary;
