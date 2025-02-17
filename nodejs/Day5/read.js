const { log } = require("console");
const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home page ");
});

app.post("/create", (req, res) => {
  const { fileName, fileData } = req.body;
  const filePath = "./" + fileName;

  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.log(err);
      res.send("err file not create");
      return;
    } else {
      res.send("file created");
    }

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.send("err file not read");
        return;
      } else {
        res.send("file read");
        console.log(data);
      }
    });
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000...");
});
