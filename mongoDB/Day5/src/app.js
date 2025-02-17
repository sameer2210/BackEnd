const express = require('express');
const userModel = require('./models/user.model')
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);                                          //sare routes chal jaynge 

const productRoutes = require("./routes/products.routes");
app.use("/products",productRoutes);





// app.get('/',(req,res) => {                       //create routes in (index.routes.js) file
//     app.res(`home page`)
// });

// --------------------------------------------------------------------------------
app.set("view engine","ejs");
app.set("views","src/views");

app.get('/index',async (req,res) =>{
    const user = await userModel.find();
    res.render("index", {user, title: "index.page"});
});

// -------------------------------------------------------------------------------------
app.post('/create', async (req,res) => {
    const {Name,Email,Password} = req.body;
    const user = await userModel.create({
        Name,
        Email,
        Password,
    });
    res.json(user)
});


module.exports = app;