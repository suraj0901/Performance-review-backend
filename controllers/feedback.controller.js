import FeedbackService from "../services/feedback.service.js";

class FeedbackController {
  /**
   * @type {import("express").RequestHandler}
   */
  static async create_feedback(request, response) {
    try {
      const question_id = request.params.id;
      const feedback = await FeedbackService.create_feedback(
        question_id,
        request.body
      );
      response.send(feedback);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async update_feedback(request, response) {
    try {
      const id = request.params.id;
      const review = await FeedbackService.update_feedback(id, request.body);
      response.send(review);
    } catch (error) {
      console.error(error);
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async delete_feedback(request, response) {
    try {
      const question_id = request.params.id;
      const feedback_id = request.params.id;
      const feedback = await FeedbackService.delete_feedback(
        question_id,
        feedback_id
      );
      if (!feedback) response.status(404).send("No item found");
      response.status(200).send(feedback);
    } catch (error) {
      console.error(error);
      response.status(500).send(error);
    }
  }
}

export default FeedbackController;
