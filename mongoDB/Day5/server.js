const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.listen(3000,() =>{
    console.log(`server is connected on port 3000...`); 
});