import { startSession } from "mongoose";
import { Question, Review } from "../model/index.js";

class QuestionService {
  static async create_questions(review_id, params) {
    const session = await startSession();
    session.startTransaction();

    const questions = await Question.insertMany(params.questions, {
      session,
    });
    const questions_ids = questions.map((item) => item._id);

    await Review.findOneAndUpdate(
      { _id: review_id },
      {
        $push: {
          questions: questions_ids,
        },
      },
      {
        session,
      }
    );

    await session.commitTransaction();
    session.endSession();

    return questions;
  }

  static async update_question(body) {
    const review = await Question.findOneAndUpdate({ _id: body._id }, body);
    return review;
  }

  static async delete_question(review_id, question_id) {
    console.log({ review_id, question_id });
    const session = await startSession();
    session.startTransaction();

    await Review.findOneAndUpdate(
      { _id: review_id },
      {
        $pull: {
          questions: question_id,
        },
      },
      {
        session,
      }
    );

    const question = await Question.findOneAndDelete(question_id, { session });
    if (!question) return false;

    await session.commitTransaction();
    session.endSession();
    return question;
  }
}

export default QuestionService;
