import { Router } from "express";
import FeedbackController from "../controllers/feedback.controller.js";

const feedback_route = Router();

feedback_route.post("/:id", FeedbackController.create_feedback);

feedback_route.put("/:id", FeedbackController.update_feedback);
feedback_route.delete(
  "/:question_id/:feedback_id",
  FeedbackController.delete_feedback
);

export default feedback_route;
