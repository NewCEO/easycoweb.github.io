let user            = require('../controllers/user');
let userType        = require('../config/userTypes');

module.exports = function admin(){
  return function (req,res,next) {
    user.userDet(req,res).then( (result)=> {
      if (Object.keys(result).length > 0 && result[0].user_type === userType.admin){
        next();
      }else{
        res.end(200).json({status:200,message:'Permission Denied'});
      }
    })
  }
}