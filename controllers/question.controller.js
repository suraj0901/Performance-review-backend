import QuestionService from "../services/question.service.js";

class QuestionController {
  /**
   * @type {import("express").RequestHandler}
   */
  static async create_questions(request, response) {
    try {
      const id = request.params.id;
      const questions = await QuestionService.create_questions(
        id,
        request.body
      );
      response.send(questions);
    } catch (error) {
      console.error(error);
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async update_question(request, response) {
    try {
      const id = request.params.id;
      const review = await QuestionService.update_question(id, request.body);
      response.send(review);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async delete_question(request, response) {
    try {
      const question_id = request.params.question_id;
      const reviewe_id = request.params.reviewe_id;

      const question = await QuestionService.delete_question(
        reviewe_id,
        question_id
      );
      if (!question) response.status(404).send("No item found");
      response.status(200).send(question);
    } catch (error) {
      console.error(error);
      response.status(500).send(error);
    }
  }
}

export default QuestionController;
