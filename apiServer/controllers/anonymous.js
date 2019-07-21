const db                          = require("../helpers/db");

module.exports = class anonymous{

  static  locations(req,res){
    let query = "SELECT * FROM states ";
    let values = [];
    return db.query(query,values).then((result)=>{
      res.withSuccess(200).withData(result).reply();
    }).catch(function (error) {
      res.withServerError(500).reply();
    })
  }

  static  isUnique(table,column,value){
    let query = `SELECT * FROM ${table} WHERE ${column} = ? `;
    let values = [value];
    return new Promise((resolve,reject)=>{
      db.query(query,values).then(function (data) {
        if (Object.keys(data).length > 0){
          //reject if the slug exists
          reject(true)
        }else{
          //resolve if the slug doesn't exist
          resolve(false);
        }
      })
    })
  }

  static slugOn (table,column){
      var result           = '';
      var characters       = 'ABCDEFGHabcdefghijIJKLMNOPQRSTUVWXYZklmnopqrstuvwxyz';
      var charactersLength = 10;
      for ( var i = 0; i < charactersLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

    return new Promise((resolve,reject)=>{
      this.isUnique(table,column,result).then((data)=>{
        resolve(result)
      }).catch(()=>{
        this.slugOn(table,column);
      })
    })


  }

}