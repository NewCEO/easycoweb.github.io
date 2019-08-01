const mysql           = require('mysql');

module.exports = class Database{

  constructor(){

    this.settings =  {
      host: 'localhost',
      user: 'root',
      password: '',
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
