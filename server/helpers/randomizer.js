const crypto = require('crypto');

module.exports = function randomKey (length) {
  return new Promise(function (resolve,reject) {
    crypto.randomBytes(length, (err, buf) => {
      if (err){
        reject(error);
      }else {
        resolve(buf.toString('hex'));
      }
    });
  })
}