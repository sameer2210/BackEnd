const mongoose = require('mongoose');

// function connectDB (){
//     // mongoose.connnect ("mongodb://localhost:27017/node")
//     mongoose.connect("mongodb://0.0.0.0/day2")
//     .then(() => {
//             console.log("db is connected");
//     }).catch(err => {
//         console.log("not connected to db...");
//     });
// }

const connectDB = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/node");
        console.log("mongoose is connected");
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = connectDB;