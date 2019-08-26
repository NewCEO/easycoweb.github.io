const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  connection:{
    pool: true,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE, // use TLS
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  },
  message:{
    from:process.env.MAIL_USERNAME
  }
}