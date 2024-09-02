// routes/review.js
const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");

const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const { createReview, destroyReview } = require("../controllers/review.js");
/**
 * POST /listings/:id/reviews - Create a new review for a listing
 */
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));

/**
 * DELETE /listings/:id/reviews/:reviewId - Delete a review
 */
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(destroyReview)
);

module.exports = router;
