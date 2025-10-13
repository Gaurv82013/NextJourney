const express=require("express");
const router=express.Router();
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const { listingSchema }=require("../schema.js");
const { isLoggedIn,is_owner } = require("../middleware.js");
const { validateListing } = require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage: storage });

// index and create route
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));

//new route
router.get("/new",isLoggedIn,listingController.renderNewForm);

// show, update, delete
router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .patch(isLoggedIn,is_owner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn,is_owner, wrapAsync(listingController.deleteListing));

// edit route
router.get("/:id/edit",isLoggedIn,is_owner,wrapAsync(listingController.renderEditForm));

module.exports = router;