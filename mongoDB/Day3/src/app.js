const express = require("express");
const userModel = require("./models/user.model");
const logger = require("morgan");

const app = express();
app.use(logger("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");


// app.post('/create', (req,res) => {
//     const {username, email, password } = req.body;
//     userModel.create({
//         username: username,
//         email: email,
//         password: password
//     })
// })

app.post("/create", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    const users = await userModel.create({
      username: username,
      email: email,
      password: password
    });
    // res.send(user);
    res.render("index", { users: users, title: "index page" });
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/register", (req, res) => {
  res.send("fghj");
});

app.get("/read", async (req, res) => {
  // const user = await userModel.find({
  const user = await userModel.findOne({
    username: "sam",
    email: "sam@gmail.com",
    password: "123"
  });
  res.send(user);
});

// --------------------------------------ejs--------------------------------------

app.get("/", async (req, res) => {
  const users = await userModel.find();
  res.render("index", { users: users });
});

module.exports = app;
