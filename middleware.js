// middleware.js

const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const Listing = require("./models/listing");
const Review = require("./models/reviews.js")

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to create a new listing");
    return res.redirect("/login");
  }
  next();
};

const saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

const isOwner = async (req, res, next) => {
  let listing = await Listing.findById(req.params.id);
  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "Your not the owner of this listing");
    return res.redirect(`/listings/${req.params.id}`);
  }
  next();
};

const isReviewAuthor = async (req, res, next) => {
  // Find the review by its ID
  let review = await Review.findById(req.params.reviewId);

  if (!review) {
    req.flash("error", "Review not found");
    return res.redirect(`/listings/${req.params.id}`);
  }

  // Check if the logged-in user is the author of the review
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You're not the author of this review");
    return res.redirect(`/listings/${req.params.id}`);
  }

  next();
};

module.exports = {
  validateListing,
  validateReview,
  isLoggedIn,
  saveRedirectUrl,
  isOwner,
  isReviewAuthor,
};
