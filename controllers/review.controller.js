import ReviewService from "../services/review.service.js";

class ReviewController {
  /**
   * @type {import("express").RequestHandler}
   */
  static async create_review(request, response) {
    try {
      const review = await ReviewService.create_review(request.body);
      response.statusMessage = "Performance review added successfully";
      response.send(review);
    } catch (error) {
      console.error(error);
      response.status(500).send(error.message);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async get_all_reviews(request, response) {
    try {
      const page = +request.query?.page ?? 1;
      const count = +request.query?.count ?? 10;
      const reviewer_id = request.query?.reviewer_id;
      if (reviewer_id) {
        const reviews = await ReviewService.get_all_review_by_reviewer_id({
          id: reviewer_id,
          count,
          page,
        });
        response.send(reviews);
        return;
      }
      const reviews = await ReviewService.get_all_reviews({
        count,
        page,
      });
      response.send(reviews);
    } catch (error) {
      console.error(error);
      response.status(500).json(error);
    }
  }
  // /**
  //  * @type {import("express").RequestHandler}
  //  */
  // static async get_all_review_by_reviewer_id(request, response) {
  //   try {
  //     const id = request.params.id;
  //     const page = +request.query?.page ?? 1;
  //     const count = +request.query?.count ?? 10;
  //     const reviews = await ReviewService.get_all_review_by_reviewer_id({
  //       id,
  //       count,
  //       page,
  //     });
  //     response.send(reviews);
  //   } catch (error) {
  //     response.status(500).send(error);
  //   }
  // }

  /**
   * @type {import("express").RequestHandler}
   */
  static async get_review_by_id(request, response) {
    try {
      const id = request.params.id;
      const review = await ReviewService.get_review_by_id(id);
      response.send(review);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async update_review(request, response) {
    try {
      const id = request.params.id;
      const review = await ReviewService.update_review(id, request.body);
      response.send(review);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @type {import("express").RequestHandler}
   */
  static async delete_review(request, response) {
    try {
      const id = request.params.id;
      const review = await ReviewService.delete_review(id);
      if (!review) response.status(404).send("No item found");
      response.statusMessage = "Review deleted successfully";
      response.status(200).send(review);
    } catch (error) {
      response.status(500).send(error);
    }
  }
}

export default ReviewController;
