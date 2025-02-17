// npm init -y
// npm i express

const express = require("express");

const app = express();

app.use(express.json()); // if not use then output = undefined

// app.get("/",(req, res) =>{
//     res.send("hello world sameer");
// })

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/", (req, res) => {
  // after postman set key and value (recived small data form frontend )
  console.log(req.query);
  res.send("hello postman query");
});

// app.post("/",(req, res) =>{                      // recived big data form frontend (password problem solv)
//     console.log(req.body);
//     res.send("hello body");
// })

app.get("*", (req, res) => {                                            //wild card for anything rout
  res.send("Error : 420 this page is not present");
});

app.listen(3000, () => {
  console.log("server is running on port 3000 ");
});
