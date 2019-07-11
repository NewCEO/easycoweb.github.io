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
        res.withSuccess(201).reply();

      }).catch((error) => {
       res.withServerError(500).reply();
      })
    }).catch(()=>{
      res.withServerError(500).reply();
    })

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

          res.withSuccess(200).withData({validation:true}).reply();

        }else{
          res.withClientError(404).reply();

        }
      }).catch(function (error) {
        console.log(error);
        res.withServerError(500).reply();
      })
    
  }

  static validateEmail(req,res){
    checkUser(req.query.email).then((result)=>{
      if (Object.keys(result).length  > 0){
        res.withSuccess(200).withData('true').reply();
      }else{
        res.withSuccess(200).withData('false').reply();
      }
    }).catch(function (e) {
      res.withServerError(500).reply();
    })
  }

  static getUser(req,res){

    let query   = "SELECT users.*,status.name as status_name,status.id as status_id FROM users INNER JOIN status ON status.id = users.status WHERE users.email = ? AND users.status = ?";
    let values  = [req.session.email,statuses.active];
    db.query(query, values).then((userResult)=>{
      if (Object.keys(userResult).length > 0){

        let userDet = userResult[0];

        delete userDet.password;
        delete userDet.reset_key;

        res.withSuccess(200).withData(userDet).reply();

      }else{
       res.withClientError(404).reply()

      }
    }).catch(()=>{
      res.withServerError(500).reply();
    })

  }

  static  userDet(req,res){
    let query   = "SELECT users.*,status.name as status_name,status.id as status_id FROM users INNER JOIN status ON status.id = users.status WHERE users.email = ? AND users.status = ?";
    let values  = [req.session.email,statuses.active];
    return db.query(query, values)
  }

}