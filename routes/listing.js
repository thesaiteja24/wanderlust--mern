const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../middleware.js");
const {
  index,
  renderNewForm,
  showListing,
  createListing,
  renderEditForm,
  updateListing,
  destroyListing,
} = require("../controllers/listing.js");

const multer = require("multer");
const { storage } = require("../cloudConfing.js");

const upload = multer({ storage });

// GET /listings - Show all listings
router
  .route("/")
  .get(wrapAsync(index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(createListing)
  );

// GET /listings/new - Show form to create new listing
router.get("/new", isLoggedIn, renderNewForm);

// Routes for specific listings
router
  .route("/:id")
  .get(wrapAsync(showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(updateListing)
  )
  .delete(isOwner, isLoggedIn, wrapAsync(destroyListing));

// GET /listings/:id/edit - Show form to edit an existing listing
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(renderEditForm));

module.exports = router;
