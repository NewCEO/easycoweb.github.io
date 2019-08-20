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
  router.get('/farm/:farmId/fund',(req,res)=> {
    nextApp.render(req, res, '/user/fundFarm', {host:req.headers.host,farmId:req.params.farmId});
  });
  router.get('/farm/:farmId/fund',(req,res)=> {
    nextApp.render(req, res, '/user/fundFarm', {host:req.headers.host,farmId:req.params.farmId});
  });
  router.get('/farm/invoice/pay',(req,res)=> {
    nextApp.render(req, res, '/user/verifyInvoice', {host:req.headers.host,farmId:req.params.farmId});
  });
  router.get('/investments',(req,res)=> {
    nextApp.render(req, res, '/user/investments', {host:req.headers.host,farmId:req.params.farmId});
  });
  router.get('/profile',(req,res)=> {
    nextApp.render(req, res, '/user/profile', {host:req.headers.host,farmId:req.params.farmId});
  });

  router.get('/farm/:farmId/activities',(req,res)=> {
    nextApp.render(req, res, '/user/all-activities', {host:req.headers.host,farmId:req.params.farmId});
  });


  app.use("/user",router);

};


