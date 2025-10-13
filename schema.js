const joi=require("joi");
const review = require("./models/review");
const listing = require("./models/listing");

module.exports.listingSchema = joi.object({
    listing: joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        location:joi.string().required(),
        country:joi.string().required(),
        price:joi.number().required().min(0),
        category: joi.array()
            .items(joi.string().valid("Mountain","Amazing Pools","Rooms","Farms","Iconic City","Castles","Amazing Views","Cabins","Beach","Desert","Island","Treehouses"))
            .min(1)
            .required(),
        image:joi.object({
            url: joi.string().uri(),
            filename: joi.string()
        }).optional()
    }).required()
});

module.exports.reviewSchema=joi.object({
    review:joi.object({
        rating:joi.number().required().min(1).max(5),
        comment:joi.string().required()
    }).required()
});