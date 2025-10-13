const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review.js');

const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true   
    },
    image:{
        filename:String,
        url:String

        
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    
    country:{
        type:String,
        required:true
    },
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    category:{
        type:[String],
        enum:["Mountain","Amazing Pools","Rooms","Farms","Iconic City","Castles","Amazing Views","Cabins","Beach","Desert","Island","Treehouses"],
        default:["Rooms"]
    },
   
});

//middleware to delete all reviews associated with a listing when the listing is deleted
listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing){
        await Review.deleteMany({
            _id:{
                $in:listing.reviews,
            },
        });
    }
});


module.exports=mongoose.model('Listing',listingSchema);