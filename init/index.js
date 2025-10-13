const mongoose=require('mongoose');
const Listing=require('../models/listing.js');
const initData=require('./data.js');
const listing = require('../models/listing.js');

main().then(()=>{ 
    console.log('Connected to MongoDB');
}).catch(err=>{
    console.error('Error connecting to MongoDB:', err);
});

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL, {
    serverSelectionTimeoutMS: 30000,
  });
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map(listing=>{
        listing.owner=('68e458c8df37cd50b0b430df');
        return listing;
    });
    const inserted = await Listing.insertMany(initData.data);
};

initDB();

