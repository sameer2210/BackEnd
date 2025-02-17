const mongoose = require('mongoose');

function connect(){
    // mongoose.connect("mongodb://localhost:27017/node")
    mongoose.connect("mongodb://0.0.0.0/Day1")
    .then(() => {
        console.log("connect to db");
    })
    .catch(err =>{
        console.log(err);
        console.log("nhai chal raha hai");
    })
}
module.exports = connect;