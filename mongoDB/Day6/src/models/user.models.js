const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  rollNumber: { type: Number },
  clgName: { type: String }
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
