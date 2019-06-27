let express     = require('express');
let router      = express.Router();
let user        = require('../controllers/user');
let session     = require('../middlewares/session');


module.exports.apiV1 =  function (app) {

  //middleWares
   session(router);

// define the home page route
  router.post('/sign-up', (req,res)=> {user.create(req,res)});
  router.post('/login', (req,res)=> {user.login(req,res)});
  


  app.use("/api/v1",router);
}


