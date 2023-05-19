const express = require('express');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
const ColorsController = require("./Controllers/Colors.controller");




/**
 * Register all the controllers and the Middleware below
 */
app.use(bodyParser.urlencoded({extended: true}));  //configuring bodyParser
app.use(bodyParser.json());

app.use("/colors", ColorsController)


module.exports = app;