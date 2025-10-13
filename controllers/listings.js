const Listing = require('../models/listing');

// Index of all listings, with optional search by title and category filtering
module.exports.index = async (req, res) => {
    const { search, category } = req.query;
    let query = {};
    
    // Add search filter if provided
    if (search) {
        query.title = { $regex: search, $options: 'i' };
    }
    
    // Add category filter if provided
    if (category) {
        query.category = { $in: [category] };
    }
    
    const allListings = await Listing.find(query);
    res.render('listings/index.ejs', { allListings, search, category });
};

module.exports.renderNewForm = (_req, res) => res.render('listings/new.ejs');

module.exports.showListing = async (req, res) => {
    // Fetch the listing and populate owner + each review's author
    const showListing = await Listing.findById(req.params.id)
        .populate({
            path: 'reviews',
            populate: { path: 'author' }
        })
        .populate('owner');
    if (!showListing) {
        req.flash('error', 'Cannot find that listing!');
        return res.redirect('/listings');
    }
    res.render('listings/show.ejs', { showListing });
};

module.exports.renderEditForm = async (req, res) => {
    const editListing = await Listing.findById(req.params.id);
    if (!editListing) {
        req.flash('error', 'Cannot find that listing!');
        return res.redirect('/listings');
    }
    res.render('listings/edit.ejs', { editListing });
};

module.exports.createListing = async (req, res) => {
    const listing = new Listing(req.body.listing || {});
    listing.owner = req.user._id;
    if (req.file) listing.image = { url: req.file.path, filename: req.file.filename };

    await listing.save();
    req.flash('success', 'Successfully made a new listing!');
    res.redirect(`/listings/${listing._id}`);
};

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;

    // First update other fields; return the updated doc
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing, { runValidators: true, new: true });
    if (!listing) {
        req.flash('error', 'Cannot find that listing!');
        return res.redirect('/listings');
    }

    // If a new image was uploaded via multer/cloudinary, replace the stored image and persist the change
    if (req.file) {
        listing.image = { url: req.file.path, filename: req.file.filename };
        await listing.save(); // persist new image info (findByIdAndUpdate above won't auto-save this manual assignment)
    }

    req.flash('success', 'Successfully updated the listing!');
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash('success', 'Successfully deleted the listing!');
    res.redirect('/listings');
};