const express = require("express");
const userModel = require("./models/user.models");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const userRoutes = require("./routes/user.routes");
const { createUser } = require("./controller/user.controller");
app.use("/users", userRoutes);

// --------------------------------------------------------------------------
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/index", async (req, res) => {

  res.render("index", { title: "index.page" });
});
app.get("/show", createUser);

// ----------------------------------------------------------------------------

app.post("/create", async (req, res) => {
  const { username, rollNumber, clgName } = req.body;
  console.log(username, rollNumber, clgName)
  const user = await userModel.create({
    username,
    rollNumber,
    clgName
  });

  res.json(user);
});

module.exports = app;
