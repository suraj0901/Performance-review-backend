import mongoose from "mongoose";

const FeedbackModal = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
});

export default FeedbackModal;
