import { Router } from "express";
import QuestionController from "../controllers/question.controller.js";

const question_route = Router();

question_route.post("/:id", QuestionController.create_questions);

question_route.put("/", QuestionController.update_question);
question_route.delete(
  "/:question_id/:reviewe_id",
  QuestionController.delete_question
);

export default question_route;
