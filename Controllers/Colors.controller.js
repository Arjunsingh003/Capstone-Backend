// Create a color suggestion, Delete a color suggestio, Update and read a suggestion:
// BASE URL: 'https://www.domain.com/${controllerPath}/${subRouterPath}'

const ColorModel = require("../Model/Color.model");
// trying to create a sub router from express which registers all the functionality(GET, POST, PUT, DELETE);
const router = require("express").Router();

/**
 * Method:GET
 * Input:Request
 * Output:Response
 * Path: '/test
 */

router.get('/test', (req, res, next) => {
  return res.status(200).json({
    message:"Test request successful"
  });
})


/**
 * Method:GET
 * Input:Request
 * Output:Response
 * Path: '/'
 */

router.get("/", (req, res, next) => {
    ColorModel.find()
      .then((response) => {
        if (response.length > 0) {
          return res.status(200).json({
            message: "Data fetched successfully!!",
            response,
          });
        } else {
          return res.status(200).json({
            message: "Alas!! No Data found",
            response,
          });
        }
      })
      .catch((error) => {
        return res.status(400).json({
          error: error,
        });
      });
  });



  /**
 * METHOD - GET
 * INPUT - REQUEST PARAMS{id}
 * OUTPUT - RESPONSE
 * PATH = '/'
 */
router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    ColorModel.findById(id)
      .then((response) => {
        console.log(response);
        if (response) {
          return res.status(200).json({
            message: "data fetched successfully!!",
            response,
          });
        } else {
          return res.status(200).json({
            message: "Alas!! No data found",
            response: {},
          });
        }
      })
      .catch((error) => {
        return res.status(400).json({
          error: error,
        });
      });
  });
  


/**
 * Method:POST
 * Input:Request
 * Output:Response
 * Path: '/createColor
 */

router.post('/createColor', (req, res, next) => {
    const { Name = '', Age = '0', Mood = '', Occasion = '', Season = ''}= req.body;
     const Color = new ColorModel({
        Name,
        Age,
        Mood,
        Occasion,
        Season

     });
     console.log(Color);
     Color.save()
     .then((response) =>{
        if(response._id){
            return res.status(200).json({
                message:"Color Suggestion created successfully",
                data:response,
            });
        }
     })
     .catch((error) => {
        return res.status(400).json({
          error: error,
        });
      });
  });            
//     // console.log(req.body);
//     return res.status(200).json({
//       message:"created Colors successful"
//     });
//   })


/**
 * UPDATE (PUT)THE Color TEAM
 * INPUT - Color DATA TO UPDATE
 * OUTPUT - UPDATED Color DATA
 * PATH - '/:id'
 */
router.put("/:id", (req, res, next) => {
    const { id } = req.params;
    ColorModel.findByIdAndUpdate(id, req.body, { new: true })
      .then((response) => {
        if (response) {
          return res.status(200).json({
            message: "Data updated successfully",
            data: response,
          });
        }
      })
      .catch((error) => {
        if (error.message) {
          return res.status(400).json({
            error: error.message,
          });
        }
      });
  });
module.exports = router;


// db password: YAaJ89JzffaKgsMa  username: get2arjunsingh


