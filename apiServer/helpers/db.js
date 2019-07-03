let db					    =  require('../config/database.js');
let connection      =  new db();

module.exports = class dbHelper {

  static query(query,values){

    return new Promise((resolve,reject)=>{
      connection.query(query,values,function (error,results,field) {

        if (error){
          reject(error);
          console.log(error);
        }
        resolve(results);

      })
    })

  }


}