const db                          = require("../helpers/db");
const passwordHelper              = require('../helpers/passwordHelper');
const { check, validationResult } = require('express-validator');
let userType                      = require("../config/userTypes");
const {userValidator,checkUser}   = require('../validators/users');
const statuses                    = require('../config/status');
let mailer                        = require('../helpers/mailer');
const randomKey                   = require('../helpers/randomizer');
let update                        = require("../helpers/qUpdater")();
let slugger                       = require("../helpers/slugger");

module.exports = class  user {

  static create(req,res) {
    let validationKey;
    let hashedPassword;
    //Validator
    userValidator(req,res).then(()=>{
      return randomKey(15)

    }).then((key)=>{
      validationKey   = key;
      hashedPassword  = passwordHelper.hash(req.body.password);

      let query = "INSERT INTO users (name,email,password,reset_key) VALUES (?,?,?,?)";
      let values = [req.body.name, req.body.email, hashedPassword,validationKey];
      return db.query(query, values)
    }).then((result)=>{
      res.withSuccess(201,"creation").reply();
      // let mail = new mailer();
      //   //TODO change url from hardcoded to soft coded
      // return mail.recipient(req.body.email)
      //             .html(`<!DOCTYPE html>
      //                    <html>
      //                       <body>Registration Successful.
      //                           <a href="http://localhost:3000/account/activate?email=${req.body.email}&key=${validationKey}">click here to              verify
      //                           </a>
      //                       </body>
      //                     </html>`)
      //             .send(undefined,3)
    }).catch(function (data) {
      console.log(data);
      return res.withServerError(500).reply();
    })

  }
  
  static login(req,res){

    let query   = "SELECT users.*,users.id as userId,status.name as status_name,status.id as status_id FROM users INNER JOIN status ON status.id = users.status WHERE users.email = ? AND users.status = ?";
      let values  = [req.body.email,statuses.active];
      let userDet;
      
      db.query(query, values).then((userResult)=>{
        if (Object.keys(userResult).length > 0){

          userDet = userResult[0];
          //Check if the passwords matches
          return passwordHelper.isSame(req.body.password,userResult[0].password)
        } 
      }).then(function (result) {
        console.log(result,'login result');
        //if they match

        if (result){

          delete userDet.password;
          delete userDet.reset_key;

            //set session cookie
          req.session.email   = userDet.email;
          req.session.userId  = userDet.userId;

          res.withSuccess(200).withData({validation:true,userDet}).reply();

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

    let query   = "SELECT users.*,status.name as status_name,status.id as status_id,banks.name as bank FROM users INNER JOIN status ON status.id = users.status LEFT JOIN banks ON banks.id = users.bank WHERE users.email = ? AND users.status = ?";
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

  static investments(req,res){
    let query = `SELECT farms.*,
                 purchased_farms.date as invested_date,
                 status.name as investment_status,
                 (purchased_farms.quantity * farms.price_per_unit) AS invested_amount, 
                 purchased_farms.quantity AS invested_quantity 
                 FROM purchased_farms 
                 INNER JOIN farms ON farms.id = purchased_farms.farm_id
                 INNER JOIN status ON status.id = purchased_farms.status  
                 WHERE purchased_farms.user_id = ? 
                 AND ( purchased_farms.status = ? OR purchased_farms.status = ?)
                 `;
    let values  = [req.session.userId,statuses.invested,statuses.reimbursed];
    return db.query(query, values).then(function (data) {
      if (Object.keys(data).length > 0) {
        res.withSuccess(200).withData(data).reply();
      }else{
        res.withClientError(404).reply()
      }
    }).catch((err)=>{
      res.withServerError(500).reply();
    })
  }
  static update(req,res){

    let query = `${update("users").field("name",req.body.name).field("bank",req.body.bank).field("bank_acct_name",req.body.bank_acct_name).field("bank_acct_number",req.body.bank_acct_number).field("phone_number",req.body.phone_number).field("address",req.body.address).field("password",req.body.password?passwordHelper.hash(req.body.password):null).done()} WHERE id = ? AND status = ?`;
    let values  = [req.session.userId,statuses.active];

    return db.query(query, values).then(function (data) {
        res.withSuccess(200).reply();
    }).catch((err)=>{
      res.withServerError(500).reply();
    })
  }

  static createAdmin(req,res){
    checkUser(req.query.email).then((result)=>{
      if (Object.keys(result).length  === 0){
        let query   = "INSERT INTO users (name,email,password,user_type,status) VALUES (?,?,?,?,?)";
        let slug    = slugger(userType.admin);
        let password = passwordHelper.hash(slug);
        let mail = new mailer();
        mail.html(`<!DOCTYPE html><html><h4>Account Creation</h4><p>An admin account has been created with this details:</p><p><b>Email:</b>${req.body.email}</p><p><b>Password:</b>${slug}</p><a href="www-dev.easycow.com/login" >click here to login</a></html>`).subject("New Account Creation").recipient(req.body.email).send("",3);
        let values  = [req.body.name,req.body.email,password,req.body.user_type,statuses.active];
        return db.query(query,values);
      }
    }).then((result)=>{
      res.withSuccess(201).reply();
    }).catch(function (e) {
      console.log(e)
      res.withServerError(500).reply();
    })
  }

  static all(req,res){
    let values  = [];
    let query   = `SELECT users.*,status.name as user_status_name,user_types.name as user_type_name FROM users
                 INNER JOIN status ON status.id = users.status
                 INNER JOIN user_types ON user_types.id = users.user_type
                 `
    return db.query(query,values).then( (response)=> {
      let data = {};
      data.users = response
      res.withSuccess(200).withData(data).reply();

    }).catch( (err)=> {
      res.withServerError(500).reply();
    })
  }

  static  status(req,res){
    let status;
    switch (req.params.userStatus) {
      case 'activate':
        status = 1;
        break;
      case 'de-activate':
        status = 2;
        break;
    }
    if (status){

      let query = "UPDATE users SET status = ? WHERE id = ?";
      let values = [status,req.params.userId];
      return db.query(query,values).then((result)=>{
        res.withSuccess(200).withData(result).reply();
      }).catch(function (error) {
        res.withServerError(500).reply();
      })
    } else{

      res.withClientError(400).reply();
    }
  }

  static types(req,res){
    let query   = "SELECT * FROM user_types";
    let values  = [];
    return db.query(query, values).then( (result)=> {
      res.withSuccess(200).withData(result).reply();
    }).catch( ()=> {
      res.withServerError(500).reply();
    })
  }

  static logout(req,res){
    req.session.destroy(function (err) {
      if (err){
        res.withServerError(500).reply();
      }else{
        res.withSuccess(200).reply();
      }
    })
  }

  static summary(req,res){
    let farms,users,activeFarms,soldOutFarms;
    let values = [];
    let query = "SELECT id FROM farms";
    return db.query(query,values).then(function (data) {
      farms = data.length;
      let query = `SELECT id FROM farms WHERE status = ?`;
      let values = [statuses.active];
      return db.query(query,values)
    }).then((data)=>{
      activeFarms = data.length;
      let query = "SELECT id FROM users";
      let values = [];
      return db.query(query,values);
    }).then((data)=>{
      users = data.length;
      let query = "SELECT id FROM farms WHERE status = ?";
      let values = [statuses.soldout];
      return db.query(query,values);
    }).then((data)=>{
      soldOutFarms = data.length;
      let result = {
        active_farms:activeFarms,
        users: users,
        soldout_farms:soldOutFarms,
        farms:farms
      };
      res.withSuccess(200).withData(result).reply();
    }).catch(function (reason) {
      console.log(reason);
      res.withServerError(500).reply();
    })

  }

  static investorSummary(req,res){
    let summary = {}
    let query = `SELECT count(purchased_farms.id) as opened_investments 
                 FROM purchased_farms
                 INNER JOIN farms on farms.id = purchased_farms.farm_id
                 INNER JOIN status on status.id = purchased_farms.status
                 WHERE purchased_farms.user_id = ?    
                 AND purchased_farms.status = ?
                 `;

    let values = [req.session.userId,statuses.invested];

    db.query(query,values).then( (data)=> {

      Object.assign(summary,data[0])

      let query = `SELECT purchased_farms.date as next_due_date, SUM ((((farms.roi/100 )*farms.price_per_unit) + farms.price_per_unit) * purchased_farms.quantity) as next_due_payment
                   FROM purchased_farms
                   INNER JOIN farms on farms.id = purchased_farms.farm_id
                   INNER JOIN status on status.id = purchased_farms.status
                   WHERE purchased_farms.user_id = ? 
                   AND purchased_farms.date = (
                    SELECT MIN(purchased_farms.date) FROM purchased_farms
                    WHERE purchased_farms.status = ?
                   )
                   GROUP BY purchased_farms.date   
                  
                 `;

      let values = [req.session.userId,statuses.invested];

      return db.query(query,values)

    }).then((data)=>{

      Object.assign(summary,data[0]);

      let query = `SELECT count(farms.id) as followed_farms
                   FROM farms
                   INNER JOIN followed_farms on farms.id = followed_farms.farm_id
                   WHERE followed_farms.user_id = ?
                              
                 `;

      let values = [req.session.userId,];
      return db.query(query,values)
    }).then((data)=>{
      Object.assign(summary,data[0]);
      res.withSuccess(200).withData(summary).reply();
    }).catch((error)=>{
      console.log(error);
      res.withServerError(500).reply();
    })
  }

}