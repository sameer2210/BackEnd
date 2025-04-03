const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost:27017/node-auth')
        .then(() => {
            console.log("Database connected")
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = connect