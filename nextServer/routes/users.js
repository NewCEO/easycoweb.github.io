let express     = require('express');
let router      = express.Router();




module.exports.users =  function (app,nextApp) {

  router.get('/dashboard',(req,res)=> {
    console.log(req.headers.host,'host headers')
    nextApp.render(req, res, '/user/dashboard', {host:req.headers.host});
  });

  app.use("/user",router);

};


