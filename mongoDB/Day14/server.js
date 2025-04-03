const dotenv = require('dotenv');
dotenv.config();

const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT,(req,res) => {
    console.log(`server is connected on Port ${PORT}`);
});


