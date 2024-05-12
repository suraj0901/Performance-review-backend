import mongoose from "mongoose";

const QuestionModal = new mongoose.Schema({
  title: String,
  feedbacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feedback",
    },
  ],
});

export default QuestionModal;
