const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = class passwordHelper {

  static hash(password){
    return bcrypt.hash(password, 10)
  }

  static isSame(plainPassword,hashedPassword){
    return bcrypt.compare(plainPassword, hashedPassword);
  }

};