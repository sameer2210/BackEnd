const express = require('express');
const app = express();
const morgan = require('morgan')

const productRouter = require('./routers/product.routes')

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(morgan("tiny"))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', productRouter);

module.exports = app;

