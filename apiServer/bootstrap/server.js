const express      	= require('express');
const app           = express();
let {apiV1} 		    = require('../routes/api.v1');
var cors            = require('cors');



module.exports = class server{

  constructor(){
    this.port = process.env.__port  =   3009;
  }

  start(){
    //middlewares
    app.use(express.static('static'));


    //routes
    apiV1(app);

    app.listen(this.port,(err)=>{
      console.log('> server started on port '+this.port);
    });

    app.on('error',(err)=>{
      console.log(err);
      return;
    })



  }
}

