const mongoose = require('mongoose');

function connect() {
    mongoose.connect("mongodb://localhost:27017/userData")
        .then(() => {
            console.log("connect to db");
        })
        .catch(err => {
            console.log(err);
            console.log(" mangooos nahi chal raha hai");
        })
}
module.exports = connect;