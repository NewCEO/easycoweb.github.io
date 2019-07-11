let user        = require('../controllers/user');
module.exports = function isLoggedIn(){
  return function (req,res,next){
     req.session?req.session.email?next():
       res.withClientError(403).reply():
       res.withClientError(403).reply();
  }
}