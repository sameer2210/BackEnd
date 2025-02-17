const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))      // rat lena

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create", (req,res)=>{
  const {fileName, fileData} = req.body;          // frontend se fetch kar rhe hai 

  // console.log(fileName, fileData)
  const filePath = "./uploads/" + fileName        // kaha upload ho 

  fs.writeFile(filePath, fileData, (err) => {             // filePath - path where file will be created
    if (err) {
      console.log(err);
      res.send("Error file not created");
      return;
    } else {
      res.send("File Created");
    }
  });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
