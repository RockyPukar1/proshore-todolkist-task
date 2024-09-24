import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Todo", TodoSchema);
