let express     = require('express');
let formData    = require("express-form-data");
let os          = require("os");
var cors        = require('cors');
let router      = express.Router();
let user        = require('../controllers/user');
let farm        = require('../controllers/farms');
let anonymous   = require('../controllers/anonymous');
let session     = require('../middlewares/session');
let admin       = require('../middlewares/admin');
let isLoggedIn                                     = require('../middlewares/isLoggedIn');
let acceptedHeader                                 = require('../middlewares/acceptedHeader');
let validationHandler                              = require('../middlewares/errorHandler');
let smooch                                         = require('../helpers/smooch');
let {farmCreationValidator,farmUpdateValidator,allFarmsValidator,farmActivityValidator,farmUpdateActivityValidator}    = require('../validators/farms');



module.exports.apiV1 =  function (app) {

  const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
  };
  let corsOptions = {
    origin: true,
    credentials: true,
  }



  // parse data with connect-multiparty.
   app.use(formData.parse(options));
   app.use(formData.format());
  // change file objects to stream.Readable
   app.use(formData.stream());
  // union body and files
   app.use(formData.union());
   app.use(express.urlencoded({extended:true}));
   //smooch middleware for helping in api response
   app.use(smooch());
   session(router);
  router.use(cors(options));
  //user api
  router.get('/email/exists', cors(corsOptions), (req,res)=> {user.validateEmail(req,res)});
  router.post('/sign-up',cors(corsOptions),  (req,res)=> {user.create(req,res)});
  router.post('/login', cors(corsOptions), (req,res)=> {user.login(req,res)});
  router.get('/user', cors(corsOptions), (req,res)=> {user.getUser(req,res)});
  //farm api
  router.post('/farms/create',[cors(corsOptions),isLoggedIn(),admin()].concat(farmCreationValidator()),(req,res)=>{farm.create(req,res)});
  router.put('/farms/update/:farmId',[isLoggedIn(),admin()].concat(farmUpdateValidator()),(req,res)=>{farm.update(req,res)});
  router.get('/farms/all', [].concat(allFarmsValidator()), (req,res)=> {farm.all(req,res)});
  router.post('/farms/activities/create/:farmId',[isLoggedIn(),admin()].concat(farmActivityValidator()),(req,res)=>{farm.activity(req,res)});
  router.put('/farms/activities/update/:updateId',[isLoggedIn(),admin()].concat(farmUpdateActivityValidator()),(req,res)=>{farm.updateActivity(req,res)});
  router.post('/farms/activities/all',[isLoggedIn(),admin()].concat(farmActivityValidator()),(req,res)=>{farm.allActivity(req,res)});
  router.post('/farms/activities/:activitiesId',[isLoggedIn(),admin()].concat(farmActivityValidator()),(req,res)=>{farm.allActivity(req,res)});
  router.get('/farms/categories',cors(corsOptions), (req,res)=> {farm.categories(req,res)});

  //Anonymous api Calls

  router.get('/locations',  cors(corsOptions),(req,res)=> {anonymous.locations(req,res)});





  app.use("/api/v1",router);

}


