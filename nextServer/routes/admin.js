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
   router.get('/farms/:farmId/activity/create',(req,res)=> {
     nextApp.render(req, res, '/admin/create-activity', {host:req.headers.host});
   });
   router.get('/farms/:farmId/investments',(req,res)=> {
     nextApp.render(req, res, '/admin/all-investments', {host:req.headers.host});
   });
   router.get('/farms/:farmId/activities',(req,res)=> {
     nextApp.render(req, res, '/admin/all-activities', {host:req.headers.host});
   });
   router.get('/create',(req,res)=> {
     nextApp.render(req, res, '/admin/create-user', {host:req.headers.host});
   });
   router.get('/farm/payment/offline',(req,res)=> {
         nextApp.render(req, res, '/admin/offline-payment', {host:req.headers.host});
   });
   router.get('/users/manage',(req,res)=> {
     nextApp.render(req, res, '/admin/all-users', {host:req.headers.host,farmId:req.params.farmId});
   });

  app.use("/admin",router);

};


