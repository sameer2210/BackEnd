// GET /hello : Respond with a simple "Hello, world!" message.
// GET /greet/:name : Respond with "Hello, \[name]!" where from the URL parameter.
// POST name is taken /echo : Receive data in the request body JSON format) and respond with the same data as a JSON response


const express = require('express');
const app = express();
app.use(express.json());                                // read body 


    // app.get("/hello", (req,res) => {
    //     res.send("hello world");
    // });

    // app.get("/greet/:name" ,(req,res) => {
    //     console.log(req.params)
    //     res.send(`hello  ${req.params.name}`)
    // });

    // app.post("/echo", (req,res) => {
    //     const {username, password} = req.body
    //     res.send(`echo body of ${username} and password ${password} `)
    // });


// Task 2: API with Query Parameters and Wildcard Route - GET /products : Accept query parameters category and price---------------------------------------------     

    // app.get('/products', (req,res) => {
    //     const {catagory,price} = req.query;

    //     if(catagory && price){
    //         res.send(`product caragory is ${catagory} and price is ${price}`);
    //     }else if(catagory){
    //         res.send(`catagory is ${catagory}`);
    //     }else if(price){ 
    //         res.send(`product price is ${price}`);
    //     }else{
    //         res.send(`All Products`);
    //     } 
    //     app.use('*',(req,res)=>{
    //         res.send(`404 page not found`);
    //     })
    // });

//  Task 3: User Management API (POST and GET with req.body) - 

    app.get('/users',(req,res) => {
        console.log(req.query);
        res.send(`get /users `)
    });

    app.post('/users', (req,res) => {
        const {username,password} = req.body
        // console.log(req.body);
        res.send(` post data jason ${username} and ${password}`);
    });



app.listen(3000,() => {
    console.log('server is running on port 3000...');
});

