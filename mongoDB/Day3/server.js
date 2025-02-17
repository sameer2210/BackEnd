// npm init -y
// npm i express 

// server.js     (server start krana hai // DB connect krna hai )
// .src/app.js   (server config krna hai)
// .src/db/db.js (db se kese connect kroge)


const app = require("./src/app");
const connect = require("./src/db/db");

connect();


app.listen(3000, () => {
    console.log("server is running on port 3000");
});