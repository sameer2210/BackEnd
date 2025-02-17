// // npm i cors 
// const cors = require('cors');
// app.use(cors());

const { log } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send(`hello this is a home page`);
});

app.post('/create',(req,res) =>{
    const {fileName ,fileData} = req.body;
    const filePath = './folder/' + fileName;

    fs.writeFile(filePath,fileData, (err) => {
        if(err){
            console.log(err);
            res.send(`file unable to create`)
        }else{
            res.send(`file created in folder name =  ${fileName}`)
        }
    });  
});


app.get('/get-all', (req,res) => {
    fs.readdir('./folder', (err,files) =>{                      // default files likhna h
        if(err){
            console.log(err);
            res.send(`file unable to read`)
        }else{
            // res.send(`file read in folder ${files}`)
            res.send(files);
        }
    });
});



app.listen(3000 , (err) => {
    console.log(`server is runing on port 3000...`);
    
});