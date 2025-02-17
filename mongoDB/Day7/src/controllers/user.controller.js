const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.registerUserController = async (req, res) => {
  const { username, email, password } = req.body;
  
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hashPassword
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email
    },
    "node-aut-secret-key"
  );

  res.status(201).json({
    user,
    token
  });
};

module.exports.loginUserController = async (req, res) => {
  const { email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (!isUserExists) {
    return res.status(400).json({
      message: "User not found"
    });
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExists.password
  );

  if (!isPasswordMatched) {
    return res.status(400).json({
      message: "Password is incorrect"
    });
  }

  const token = jwt.sign(
    {
      id: isUserExists._id,
      email: isUserExists.email
    },
    "node-aut-secret-key"
  );

  res.status(200).json({
    user: isUserExists,
    token
  });
};

module.exports.profileUserController = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    const decoded = jwt.verify(token, "node-aut-secret-key");

    res.send(decoded);
  } catch (err) {
    res.status(401).json({
      message: "Unauthorized"
    });
  }
};
