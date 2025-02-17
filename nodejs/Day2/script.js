// package.json = show packages and its virsons
// package-lock = packages dependencies
// nodeModules = save packages code or data
// http = modulse / it create server 



// ----------------------------------------------------------------

// const catme = require('cat-me');
// console.log(catme());

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        res.end("About page");
    } else if (req.url === "/profile") {
        res.end("Profile page");
    } else if (req.url === "/") {
        res.end("Index page");
    } else {
        res.end("Hello world from http server");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});


// to show server output = http://localhost:3000/

