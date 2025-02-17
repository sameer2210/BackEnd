const { log } = require('console');
const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/kanyasala");
        console.log(`db is connected`);        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;