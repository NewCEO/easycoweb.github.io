const db                          = require("../helpers/db");

let userValidator = function  (req,res) {
  let errors = [];

  return new Promise((resolve,reject)=>{

    checkUser(req.body.email).then( (result)=> {

      if (Object.keys(result).length  > 0){
        errors.push(
          {
            param:'email',
            message:"email exists"
          }
        );
      }

      if (!req.body.name.trim()  ){
        errors.push(
          {
            param:'name',
            message:"name field is required"
          }
        );
      }



      if (!req.body.email ){
        errors.push(
          {
            param:'email',
            message:"email field is required"
          }
        );
      }

      if (!req.body.password){
        errors.push(
          {
            param:'password',
            message:"password field is required"
          }
        );
      }

      if (req.body.password != req.body.confirmPassword){
        console.log(req.body.password,req.body.confirmPassword)
        errors.push(
          {
            param:'confirmPassword',
            message:"passwords do not match"
          }
        );
      }

      if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/.test(req.body.password))){
        errors.push(
          {
            param:'password',
            message:"make sure the password matches standard i.e (1) must be more than length of atleast 5  (2) contain a lower case character (3) contain a uppercase character (4)contain a numeric character (5)contain a non word character"
          }
        );
      }


      if (errors.length > 0){

        res.json({status:400,message:errors});
        reject(false);
      }
      resolve(true)
    }).catch(function (e) {
      res.status(500).send('internal server error')

    })


  })


};



let checkUser = function (email) {
  let query = "SELECT email FROM users WHERE email = ?";
  let values = [email];
  return db.query(query, values);
}

module.exports = {checkUser,userValidator};