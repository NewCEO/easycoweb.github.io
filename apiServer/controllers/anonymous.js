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

}