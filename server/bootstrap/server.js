const app      	= require('express')();
let {apiV1} 		= require('../routes/api.v1');


module.exports = class server{

  constructor(){
    this.port   =   3008;
  }

  start(){
    //routes
    apiV1(app);

    app.listen(this.port,(err)=>{
      console.log('server started on port '+this.port);
    });

    app.on('error',(err)=>{
      console.log(err);
      return;
    })



  }
}

