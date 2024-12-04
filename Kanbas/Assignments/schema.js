import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    date: String,
    due: String,
    points: Number,
    description: String,
    availableUntil: String,
  },
  { collection: "assignments" }
);

export default assignmentSchema;
