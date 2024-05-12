import { startSession } from "mongoose";
import { Question, Review } from "../model/index.js";

class ReviewService {
  static async create_review(params) {
    const session = await startSession();
    session.startTransaction();
    const doc = await Question.insertMany(params.questions, {
      session,
    });
    const questions_ids = doc.map((item) => item._id);
    console.log({ questions_ids });
    const review = new Review({ ...params, questions: questions_ids });
    await review.save({ session });

    await session.commitTransaction();
    session.endSession();

    return review;
  }

  static async get_all_reviews({ page, count }) {
    const reviews = await Review.find({})
      .populate("assignee")
      .select("assignee")
      .skip(page * count)
      .limit(count)
      .exec();

    return reviews;
  }

  static async get_all_review_by_reviewer_id({ id, page, count }) {
    const reviews = await Review.find({ reviewers: id })
      .populate("assignee")
      .select("assignee")
      .skip(page * count)
      .limit(count)
      .exec();
    return reviews;
  }

  static async get_review_by_id(id) {
    const review = await Review.findById(id)
      .populate("assignee")
      .populate("reviewers")
      .populate({
        path: "questions",
        populate: {
          path: "feedbacks",
          populate: "reviewer",
        },
      })
      .exec();
    return review;
  }

  static async update_review(id, body) {
    const review = await Review.findOneAndUpdate({ _id: id }, body);
    return review;
  }

  static async delete_review(id) {
    const review = await Review.findOneAndDelete(id);
    return review;
  }
}

export default ReviewService;
