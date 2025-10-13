const express=require("express");
const Review = require("../models/review.js");
const router=express.Router({mergeParams:true});
const { reviewSchema }=require("../schema.js");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const { listingSchema }=require("../schema.js");
const Listing=require("../models/listing.js");
const { validateReview, is_Author}=require("../middleware.js");
const { isLoggedIn } = require("../middleware.js");
const reviewController=require("../controllers/reviews.js");


//post route for reviews

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//delete route for reviews

router.delete("/:reviewId",isLoggedIn,is_Author, wrapAsync(reviewController.deleteReview));


module.exports=router;