const mysql           = require('mysql');

module.exports = class Database{

  constructor(){

    this.settings =  {
      host: 'localhost',
      user: 'fxtoolzc_fx',
      password: 'myname1234',
      database: 'easy_cow'
    };

    let connection = mysql.createConnection(this.settings);
    connection.connect(function (err) {
      if (err) {
        console.log(err);
      }
    });
    return connection;
  }
}
