const express = require('express');
const userModel = require("./models/user.model")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/create', async (req, res) => {
    const { username, email, profileImage, password } = req.body;

    const user = await userModel.create({
        // username: username,
        // useremail: email,
        // password: password,
        // profileImage: profileImage

        username,
        email,
        profileImage,
        password
    })
    // console.log(req.body);
    // res.render('create');
    // res.send(" db mai create ho gya");
    // res.send(user);
    res.redirect('/feedUpdate')
});

app.get('/feed', (req,res) => {
    res.render('feed')
});

app.get('/feedUpdate', async(req,res) => {
    const users = await userModel.find()
    // console.log(users);
    res.render('feedUpdate',{users})
});


module.exports = app;