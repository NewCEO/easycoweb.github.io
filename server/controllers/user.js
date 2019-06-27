const db                          = require("../helpers/db");
const passwordHelper              = require('../helpers/passwordHelper');
const { check, validationResult } = require('express-validator');
const userValidator               = require('../validators/users');
const statuses                    = require('../config/status');

module.exports = class  user {

  static create(req,res) {

    //Validator
    userValidator(req,res).then(function () {

      passwordHelper.hash(req.query.password).then((hash) => {
        let query = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
        let values = [req.query.name, req.query.email, hash];

        return db.query(query, values)

      }).then((result) => {
        res.status(200).json({status: 200, message: 'success'});
      }).catch(() => {
        res.status(400).json({status: 400, message: "could not create user"});
      })
    }).catch(()=>{return false})

  }
  
  static login(req,res){

    let query   = "SELECT users.*,status.name as status_name,status.id as status_idco FROM users INNER JOIN status ON status.id = users.status WHERE users.email = ? AND users.status = ?";

      let values  = [req.query.email,statuses.active];
      let userDet;
      
      db.query(query, values).then((userResult)=>{
        if (Object.keys(userResult).length > 0){

          userDet = userResult[0];
          //Check if the passwords matches
          return passwordHelper.isSame(req.query.password,userResult[0].password)
        } 
      }).then(function (result) {
        //if they match

        if (result){

          delete userDet.password;
          delete userDet.reset_key;

            //set session cookie
          req.session.email = userDet.email;

          res.status(200).json({status: 200, message: "user exists",data:userDet});

        }else{
          res.status(400).json({status: 400, message: "could not find user"});

        }
      }).catch(function (error) {
        console.log(error);
      })
    
  }
  
}