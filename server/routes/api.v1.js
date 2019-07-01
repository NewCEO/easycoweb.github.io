let express     = require('express');
let formData    = require("express-form-data");
let os          = require("os");
var cors        = require('cors');
let router      = express.Router();
let user        = require('../controllers/user');
let session     = require('../middlewares/session');
let acceptedHeader      = require('../middlewares/acceptedHeader');


module.exports.apiV1 =  function (app) {

  const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
  };
  let preFlight = {
    origin: "*",
    methods: ['POST'],
    credentials: true,
    maxAge: 3600

  }

  //middleWares

  // parse data with connect-multiparty.
   app.use(formData.parse(options));
   app.use(formData.format());
  // change file objects to stream.Readable
   app.use(formData.stream());
  // union body and files
   app.use(formData.union());
   app.use(express.urlencoded({extended:true}))
   session(router);

  router.options('/sign-up',cors(preFlight));
  router.options('/email/exists',cors());
  router.get('/email/exists', cors(), (req,res)=> {user.validateEmail(req,res)});
  router.post('/sign-up',cors(),  (req,res)=> {user.create(req,res)});
  router.post('/login', (req,res)=> {user.login(req,res)});



  app.use("/api/v1",router);

}


