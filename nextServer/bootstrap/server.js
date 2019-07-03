const express      	= require('express');
const app           = express();
let {users} 		    = require('../routes/users');




module.exports = class server{

  constructor(){
    this.port   =   3000;
  }

  start(nextApp){
    const handle = nextApp.getRequestHandler()
    //middlewares
    app.use(express.static('static'));


    //routes
    users(app,nextApp);
    app.get('/login', (req,res)=> {
     nextApp.render(req,res,'/login',req.query);
   })

    app.listen(this.port,(err)=>{
      console.log('> server started on port '+this.port);
    });

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    app.on('error',(err)=>{
      console.log(err);
      return;
    })
  }

}

