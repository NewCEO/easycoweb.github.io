let farmRouter               = require('express').Router;
let farmCreationValidator    = require('../validators/farms');


module.exports.farmsApi =  function (router) {

  farmRouter.get('/create')
  router.use("/farm",farmRouter);

}


