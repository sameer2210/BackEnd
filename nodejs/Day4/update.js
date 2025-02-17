const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`home page`);
});

app.post("/create", (req, res) => {
  console.log(`create file`);
  const { fileName, fileData } = req.body;
  const filePath = "./fileUpdate/" + fileName; //haat se folder banana padega

  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      res.send(`file not exist`);
    } else {
      res.send(`file create text`);
    }
  });
});

app.patch("/update/:fileName", (req, res) => {
  // const fileName = req.params.fileName;
  const { fileName } = req.params;
//   const filePath = './fileUpdate/' + fileName;
  const filePath = `./fileUpdate/${fileName}`;
  // const fileData = req.body;                           // if here not then in fs method
  fs.writeFile(filePath, req.body.fileData, (err) => {
    if (err) {
      res.send(`file not exist`);
    } else {
      res.send(`file create text`);
    }
  });
});

app.listen(3000, () => {
  console.log("server running");
});
