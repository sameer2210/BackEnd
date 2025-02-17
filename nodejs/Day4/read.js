
const { log } = require('console');
const express = require('express');
const fs = require('fs');
const app = express(); 
app.use(express.json());
app.use(express.urlencoded({extended: true}))

    app.get("/" , (req,res) =>{
        res.send(`Home page`);
    });

    app.post("/create" , (req,res) => {
        res.send(`create page`);
        const {fileName,fileData} = req.body;
        const filePath = "./uploads/" + fileName;

        fs.writeFile(filePath, fileData , (err) => {
            if(err){
                res.send(`file not created`);
                return;
            }else{
                res.send(`file created in uploads folder`);
            }
        });
    });

    app.get('/read/:fileName',(req,res) => {
        const fileName = req.params.fileName;
    
        const filePath = './uploads/' + fileName;

        fs.readFile(filePath,{encoding:"utf8"},(err, data) => {
            if(err){
                console.log(err);
                res.send(`fil not read`);
            }else {
                console.log(data);
                
                res.send({read: data, Hello:"asjdhasjdhjkasd"})    // ek he parameter    {data: askdjhakj}
            }
        });
    });

app.listen(3000,() => {
    console.log(`server is running on port 3000...`);
})