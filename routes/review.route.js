import { Router } from "express";
import ReviewController from "../controllers/review.controller.js";

const reviewRoute = Router();

reviewRoute
  .route("/")
  .get(ReviewController.get_all_reviews)
  .post(ReviewController.create_review);

reviewRoute
  .route("/:id")
  .get(ReviewController.get_review_by_id)
  .put(ReviewController.update_review)
  .delete(ReviewController.delete_review);

export default reviewRoute;
