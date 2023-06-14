const express = require('express');
 const app = require('./app');
 const cors = require('cors');
 const dotenv = require('dotenv');



// Create a web server with express instance
const server = express();


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

const verifyJwt = jwt({
    secret:jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://yoursincerely.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://backend-cap.onrender.com/colors',
    issuer: 'https://yoursincerely.us.auth0.com/',
    algorithms: ['RS256']
}).unless({path: ['/']});
server.use(verifyJwt);
server.use("/", app);





// start the server and listen to port {4000}

server.listen(PORT, () =>{

    console.log(`server started ${PORT}`);
});
