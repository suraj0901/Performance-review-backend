import { startSession } from "mongoose";
import { Feedback, Question } from "../model/index.js";

class FeedbackService {
  static async create_feedback(question_id, body) {
    const session = await startSession();
    session.startTransaction();
    console.log({ body });
    const feedback = new Feedback(body);
    await feedback.save({ session });

    await Question.findOneAndUpdate(
      { _id: question_id },
      {
        $push: {
          feedbacks: feedback._id,
        },
      },
      {
        session,
      }
    );

    await session.commitTransaction();
    session.endSession();

    return feedback;
  }

  static async update_feedback(id, body) {
    const feedback = await Feedback.findOneAndUpdate({ _id: id }, body);
    return feedback;
  }

  static async delete_feedback(question_id, feedback_id) {
    const session = await startSession();
    session.startTransaction();

    await Question.findOneAndUpdate(
      { _id: question_id },
      {
        $pull: {
          feedbacks: feedback_id,
        },
      },
      {
        session,
      }
    );

    const feedback = await Feedback.findOneAndDelete(feedback_id, { session });

    if (!feedback) return false;

    await session.commitTransaction();
    session.endSession();

    return feedback;
  }
}

export default FeedbackService;
