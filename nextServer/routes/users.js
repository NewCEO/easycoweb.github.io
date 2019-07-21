let express     = require('express');
let router      = express.Router();




module.exports.users =  function (app,nextApp) {

  router.get('/dashboard',(req,res)=> {
    nextApp.render(req, res, '/user/dashboard', {host:req.headers.host});
  });
  router.get('/farms',(req,res)=> {
    nextApp.render(req, res, '/user/allFarms', {host:req.headers.host});
  });
  router.get('/farm/:farmId',(req,res)=> {
    nextApp.render(req, res, '/user/farmDetails', {host:req.headers.host,farmId:req.params.farmId});
  });

  app.use("/user",router);

};


