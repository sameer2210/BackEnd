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

    app.delete('/delete/:fileName', (req,res) => {
        // const {fileName} = req.params;
        const fileName = req.params.fileName;
        const filePath = './fileUpdate/' + fileName;

        fs.unlink(filePath, (err) => {
            if (err) {
                console.log(err);
                res.send(`file not deleted`);
            } else {
            res.send(`file deleted`);
            }
        });
    });



app.listen(3000, () => {
  console.log("server running");
});
