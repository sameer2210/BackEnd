const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:Number},
});

const userModel = mongoose.model("userModel",userSchema);

module.exports = userModel;