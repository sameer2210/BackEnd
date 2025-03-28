const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`mongoDB is connected to database`);
    })
    .catch((error) => {
        console.log(err);
        console.log(err.message);
    });
};

module.exports = connectDB;