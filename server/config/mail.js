module.exports = {
  connection:{
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "chiemeke.ifeanyi@gmail.com",
      pass: "mychioma1234"
    }
  },
  message:{
    from:"chiemeke.ifeanyi@gmail.com"
  }
}