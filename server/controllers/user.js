const db                          = require("../helpers/db");
const passwordHelper              = require('../helpers/passwordHelper');
const { check, validationResult } = require('express-validator');
const {userValidator,checkUser}   = require('../validators/users');
const statuses                    = require('../config/status');
let mailer                        = require('../helpers/mailer');
const randomKey                   = require('../helpers/randomizer');

module.exports = class  user {

  static create(req,res) {
    let validationKey;
    let hashedPassword;
    //Validator
    userValidator(req,res).then(function () {

      passwordHelper.hash(req.body.password).then((hash) => {
        hashedPassword = hash;
        //generate random string for email verification
        return randomKey(15)

      }).then(function (result) {
        validationKey = result;
        let query = "INSERT INTO users (name,email,password,reset_key) VALUES (?,?,?,?)";
        let values = [req.body.name, req.body.email, hashedPassword,validationKey];
        return db.query(query, values)
      })
      //   .then((result) => {
      //   console.log(validationKey,'validation key');
      //   //send mail to user to confirm email address
      //   let mail = new mailer();
      //   //TODO change url from hardcoded to soft coded
      //   return mail.recipient(req.body.email).connect().html(`<html>Registration Successful.  <a href="localhost:3000/account/activate?email=${req.body.email}&key=${validationKey}">click here to verify</a></html>`)
      //                                 .send(undefined,3)
      //
      // })
        .then( (result)=> {
        res.status(200).json({status: 200, message: 'success'});

      }).catch((error) => {
        console.log(error);
        res.status(400).json({status: 400, message: "could not create user"});
      })
    }).catch(()=>{return false})

  }
  
  static login(req,res){

    let query   = "SELECT users.*,status.name as status_name,status.id as status_id FROM users INNER JOIN status ON status.id = users.status WHERE users.email = ? AND users.status = ?";
      let values  = [req.body.email,statuses.active];
      let userDet;
      
      db.query(query, values).then((userResult)=>{
        if (Object.keys(userResult).length > 0){

          userDet = userResult[0];
          //Check if the passwords matches
          return passwordHelper.isSame(req.body.password,userResult[0].password)
        } 
      }).then(function (result) {
        //if they match

        if (result){

          delete userDet.password;
          delete userDet.reset_key;

            //set session cookie
          req.session.email = userDet.email;

          res.status(200).json({status: 200, message: "success", data:userDet});

        }else{
          res.status(200).json({status: 200, message: "failed"});

        }
      }).catch(function (error) {
        console.log(error);
      })
    
  }

  static validateEmail(req,res){
    checkUser(req.query.email).then((result)=>{
      if (Object.keys(result).length  > 0){
        res.status(200).send(
          {
            status: 200,
            statusText:'ok',
            message: true
          });
      }else{
        res.status(200).send(
          { status: 200,
            statusText:'ok',
            message: false
          });
      }
    }).catch(function (e) {
      res.status(500).json('Internal Server Error');
    })
  }
  
}