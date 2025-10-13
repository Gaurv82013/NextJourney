const Listing=require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError=require("./utils/ExpressError.js");
const { listingSchema }=require("./schema.js");
const { reviewSchema }=require("./schema.js");


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash("error", "You must be logged in first!");
        return res.redirect("/login");
    }
    next();
};

module.exports.returnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
};

module.exports.is_owner = async (req, res, next) => {
    const {id}=req.params;
    let listing = await Listing.findById(id);
    if (!listing || !listing.owner.equals(res.locals.currentUser._id)) {
        req.flash("error","You do not have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing=(req,res,next)=>{
    // If image field is present as a simple string (because of multipart parsing before multer attaches file object), normalize it
    if (req.body.listing && typeof req.body.listing.image === 'string') {
        if (!req.body.listing.image) {
            // remove empty image so Joi optional passes
            delete req.body.listing.image;
        }
    }
    const {error}=listingSchema.validate(req.body);
    if(error){
        let message=error.details.map(el=>el.message).join(",");
        throw new ExpressError(400,message);
    }else{
        next();
    }
    
};

module.exports.validateReview=(req,res,next)=>{
    const {error}=reviewSchema.validate(req.body);
    if(error){
        let message=error.details.map(el=>el.message).join(",");
        throw new ExpressError(400,message);
    }else{
        next();
    }
};


module.exports.is_Author = async (req, res, next) => {
    const {id, reviewId}=req.params;
    let review = await Review.findById(reviewId);
    if (!review) {
        req.flash("error","Review not found!");
        return res.redirect(`/listings/${id}`);
    }
    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error","You do not have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

