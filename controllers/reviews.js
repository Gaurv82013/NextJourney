const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview =async(req,res)=>{
    
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    await newReview.save();
    listing.reviews.push(newReview._id);
    await listing.save();
    req.flash("success","Successfully added a new review!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview =async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Successfully deleted the review!");
    res.redirect(`/listings/${id}`);
};