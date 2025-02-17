const userModel = require("../models/user.models");

const createUser = async (req, res) => {
  const user = await userModel.find();
  res.render("showusers", { user, title: "users.page" });
};


module.exports = { createUser };
