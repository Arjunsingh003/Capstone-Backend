const express = require('express');
 const app = require('./app');
 const cors = require('cors');
 const jwt = require('express-jwt');
 const jwks = require('jwks-rsa');
 const axios = require('axios');

//  const dotenv = require('dotenv');



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

app.get('/colors', async (req, res) => {
    try {
      const accessToken = req.headers.authorization.split(' ')[1];
      const response = await axios.get('https://yoursincerely.us.auth0.com/userinfo', {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      });
      const userInfo = response.data;
      console.log(userInfo);
      res.send(userInfo);
    } catch (error) {
      res.send(error.message);
    }
  });
  


server.use((req,res, next )=>{
    const error =  new Error('Notfound');
    error.status = 404;
    next(error);
    });

server.use((error, req, res, next) =>{
    const status = error.status || 500
    const message =  error.message || 'Internal Server Error'
    res.status(status).send(message);
}
);

const PORT = process.env.PORT || 8000




// start the server and listen to port {4000}

server.listen(PORT, () =>{

    console.log(`server started ${PORT}`);
});