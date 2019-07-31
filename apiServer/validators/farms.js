const { check, validationResult } = require('express-validator');
let validationHandler             = require('../middlewares/errorHandler');
let farmController                = require('../controllers/farms');
let {queryFilter}                 = require('../helpers/qSorta')();

module.exports = {
  farmCreationValidator: function() {


    let validators = [];

    let title = check('title').exists().isString();
    let category = check('category').exists().isString();
    let totalUnits = check('total_units').exists().isNumeric();
    let pricePerUnits = check('price_per_unit').exists().isNumeric();
    let fundingStarts = check('funding_starts').exists().isISO8601();
    let fundingEnds = check('funding_ends').exists().isISO8601();
    let farmStarts = check('farm_starts').exists().isISO8601();
    let farmEnds = check('farm_ends').exists().isISO8601();
    let roi = check('roi').exists().isNumeric();
    let location = check('location').exists().isString();
    let description = check('description').exists().isString();

    validators.push(title, category, totalUnits, pricePerUnits, roi, location, description, validationHandler());

    return validators;
  },
  farmActivityValidator: function() {


    let validators = [];

    let information   = check('information').exists().isString();
    let summary       = check('summary').exists().isString();
    let activity      = check('activity').exists().isString();
    let stage         = check('stage').exists().isNumeric();
    let weeks         = check('weeks').exists().isNumeric();
    let farmId        = check('farmId').exists().isString();

    validators.push(information, summary, activity, stage, weeks, farmId,validationHandler());

    return validators;
  },
  farmUpdateActivityValidator: function() {


    let validators = [];

    let information   = check('information').isString();
    let summary       = check('summary').isString();
    let activity      = check('activity').isString();
    let stage         = check('stage').isNumeric();
    let weeks         = check('weeks').isNumeric();
    let date          = check('date').isISO8601();
    let farmId        = check('activityId').exists().isNumeric();

    validators.push(information, summary, activity, stage, weeks, date, farmId,validationHandler());

    return validators;
  },
  farmUpdateValidator: function () {
    let validators = [];
    
    let title = check('title').isString();
    let category = check('category').isString();
    let totalUnits = check('total_units').isNumeric();
    let pricePerUnits = check('price_per_unit').isNumeric();
    let fundingStarts = check('funding_starts').isISO8601();
    let fundingEnds = check('funding_ends').isISO8601();
    let farmStarts = check('farm_starts').isISO8601();
    let farmEnds = check('farm_ends').isISO8601();
    let roi = check('roi').exists();
    let location = check('location').isString();
    let description = check('description').isString();
    let status = check('status').isNumeric();
    let farmId = check('farmId').isNumeric().custom(function (value,{req}) {
        return new Promise((resolve,reject)=>{
          farmController.exists(req.query.farmId).then(function (farms) {
            if (Object.keys(farms[0]).length > 0){
              resolve(true);
            }else{
              reject(false);
            }
          })
        })
    })
    
    validators.push(title, category, totalUnits, pricePerUnits, roi, location, description, status, validationHandler());

    return validators;
  },

  allFarmsValidator:function () {

    let validators  = [];

    let title                 = queryFilter(['like','eql'],'title');
    let category              = queryFilter(['eql'],'category');
    let totalUnits            = queryFilter(['eql','gte','lte','gteOReqlTo','lteOReqlTo','notEqlTo'],'total_units');
    let pricePerUnits         = queryFilter(['eql','gte','lte','gteOReqlTo','lteOReqlTo','notEqlTo'],'price_per_units');
    let fundingStarts         = queryFilter(['gte','lte','eql','notEqlTo'],'funding_starts');
    let fundingEnds           = queryFilter(['gte','lte','eql','notEqlTo'],'funding_ends');
    let farmStarts            = queryFilter(['gte','lte','eql','notEqlTo'],'farm_starts');
    let farmEnds              = queryFilter(['gte','lte','eql','notEqlTo'],'farm_ends');
    let roi                   = queryFilter(['eql','gte','lte','gteOReqlTo','lteOReqlTo','notEqlTo'],'roi');
    let location              = queryFilter(['eql','notEqlTo'],'location');
    let status                = queryFilter(['eql','notEqlTo'],'status');

    validators.push(title, category, totalUnits, pricePerUnits,fundingStarts,fundingEnds,farmStarts,farmEnds, roi, location, status);
    return validators;
  },

  allFarmActivityValidator:function () {

    let validators  = [];

    let stage                 = queryFilter(['eql','gte','lte','gteOReqlTo','lteOReqlTo','notEqlTo'],'stage');
    let weeks                 = queryFilter(['eql','gte','lte','gteOReqlTo','lteOReqlTo','notEqlTo'],'weeks');
    let date                  = queryFilter(['eql','gte','lte','gteOReqlTo','lteOReqlTo','notEqlTo'],'date');
    let farmStatus            = queryFilter(['eql'],'farm_status');
    let farmLocation          = queryFilter(['eql'],'farm_location');
    let farmId                = queryFilter(['eql'],'farm_id');

    validators.push(stage, weeks,date, farmStatus,farmLocation,farmId);
    return validators;
  },
  deleteFarmActivityValidator:function () {
    let validators = [];

    let activityId   = check('activity').exists().isNumeric();
    validators.push(activityId);
    return validators;
  }
}