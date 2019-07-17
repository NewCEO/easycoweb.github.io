let express     = require('express');
let router      = express.Router();




 module.exports.admin =  function (app,nextApp) {

  router.get('/dashboard',(req,res)=> {
    nextApp.render(req, res, '/admin/dashboard', {host:req.headers.host});

  });
  router.get('/farm/create',(req,res)=> {
    nextApp.render(req, res, '/admin/create-farm', {host:req.headers.host});

  });
   router.get('/farms',(req,res)=> {
     nextApp.render(req, res, '/admin/all-farms', {host:req.headers.host});

   });
   router.get('/farms/edit/:farmId',(req,res)=> {
     nextApp.render(req, res, '/admin/create-farm', {host:req.headers.host});

   });

  app.use("/admin",router);

};


