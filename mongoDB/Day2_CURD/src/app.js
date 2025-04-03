const express = require('express');     //es5
const app = express();
const userModel = require('./models/userModel');

// create fine / findOne
// findOneAndUpdate
// findOneAndDelete
// findByIdAndUpdate
// findByIdAndDelete

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send("it is a home page");
});

app.post('/create', async (req,res) => {
    const {userName,Email,password} = req.body;

    const user = await userModel.create({
        userName,
        Email,
        password,
    });
    res.json(user);    
});

app.post('/read', async (req,res) =>{
    const user = await User.findOne({userName: req.body.userName});
    res.send(user);
})

app.post('/update', async (req,res) => {
    const user = await User.findOneAndUpdate(
        {userName: req.body.userName},{password: req.body.password}
    );
    res.send(user);
});

app.delete('/delete',async (req,res) => {
    await User.findOneAndDelete({userName: req.body.userName});
    res.send("deleted");
})

module.exports = app;
