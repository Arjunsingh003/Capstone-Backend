const express = require('express');
 const app = require('./app');
 const cors = require('cors');
 const dotenv = require('dotenv');



// Create a web server with express instance
const server = express();
const PORT = process.env.PORT || 4000

/**
 * Configuration of ENV Variables
 */
// dotenv.config();
require('dotenv').config();
/**
 * Inject the database Code
 * 
 */

const db = require("./dbconfig");
/** 
 * Import and register the Express application controller
*/
server.use(cors());
server.use("/", app);





// start the server and listen to port {4000}

server.listen(PORT, () =>{

    console.log(`server started ${PORT}`);
});