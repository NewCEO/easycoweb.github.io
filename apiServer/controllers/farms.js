const db                          = require("../helpers/db");
let {operate}                     = require('../helpers/qSorta')();
module.exports = class farms {
  static create(req,res){
    let query = "INSERT INTO farms (title,category,total_units,price_per_unit,funding_starts,funding_ends,farm_starts,farm_ends,roi,location,description,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    let values = [
                  req.body.title,
                  req.body.category,
                  req.body.total_units,
                  req.body.price_per_units,
                  req.body.funding_starts,
                  req.body.funding_ends,
                  req.body.farm_starts,
                  req.body.farm_ends,
                  req.body.roi,
                  req.body.location,
                  req.body.description,
                  req.body.status
                  ];
    return db.query(query, values).then((result)=>{
       res.withSuccess(201,"creation").reply();
    }).catch(function (error) {
       res.withServerError(500).reply();
    })
  }
  static update(req,res){

    let body = req.body;

    let values = [];

    body.title? values.push(body.title):'';
    body.category? values.push(body.category):'';
    body.total_units? values.push(body.total_units):'';
    body.price_per_units? values.push(body.price_per_units):'';
    body.funding_starts? values.push(body.funding_starts):'';
    body.funding_ends? values.push(body.funding_ends):'';
    body.farm_starts? values.push(body.farm_starts):'';
    body.farm_ends? values.push(body.farm_ends):'';
    body.roi? values.push(body.roi):'';
    body.location? values.push(body.location):'';
    body.description? values.push(body.description):'';
    body.status? values.push(body.status):'';
    values.push(req.params.farmId);


    let query = `UPDATE farms SET ${body.title?"title = ?":""},${body.category?"category=?":""} ,${body.total_units?"total_units=?":""} ,${body.price_per_units?"price_per_unit=?":""},${body.funding_starts?"funding_starts=?":""},${body.funding_ends?"funding_ends=?":""},${body.farm_starts?"farm_starts=?":""},${body.farm_ends?"farm_ends=?":""},${body.roi?"roi=?":""},${body.location?"location=?":""},${body.description?"description=?":""},${body.status?"status=?":""} WHERE farms.id = ?`;

    return db.query(query, values).then((result)=>{
      res.withSuccess(201,"update").reply();
    }).catch(function (error) {
      res.withServerError(500).reply();
    })
  }
  static exists(req){
    let query = "SELECT id FROM farms WHERE id = ?";
    let values = [req.query.farmId];
    return db.query(query,values);
  }

  static all(req,res){

    let values  = [];
    let body = req.query;

    let query   = `SELECT farms.*,status.name as status_name,states.name as location_name FROM farms INNER JOIN status ON status.id = farms.status INNER JOIN states on states.id = farms.location ${operate(req).on('title').on('category').on('total_units').on('price_per_units').on('funding_starts').on('funding_ends').on('farm_starts').on('farm_ends').on('roi').on('location').on('status').done()} ${req.paginate(20)}`;

    return db.query(query,values,true,req).then(function (result) {
      res.withSuccess(200).withData(result).reply();
    }).catch(function () {
      res.withServerError(500).reply();
    })

  }

  static activity(req,res){
    let query = "INSERT INTO farm_updates (information,summary,activity,stage,weeks,image_updates,date,farm_id) VALUES (?,?,?,?,?,?,?,?)";
    let values = [
      req.body.information,
      req.body.summary,
      req.body.activity,
      req.body.stage,
      req.body.weeks,
      req.body.image_updates,
      req.body.date,
      req.params.farmId
    ];

    return db.query(query, values).then((result)=>{
      res.withSuccess(201,"creation").reply();
    }).catch(function (error) {
      res.withServerError(500).reply();
    })
  }

  static updateActivity(req,res){

    let body = req.body;

    let values = [];

    body.information? values.push(body.information):'';
    body.summary? values.push(body.summary):'';
    body.activity? values.push(body.activity):'';
    body.stage? values.push(body.stage):'';
    body.weeks? values.push(body.weeks):'';
    body.image_updates? values.push(body.image_updates):'';
    body.date? values.push(body.date):'';
    values.push(req.params.activityId);


    let query = `UPDATE farm_updates SET ${body.information?"information = ?":""},${body.summary?"summary=?":""} ,${body.stage?"stage=?":""} ,${body.weeks?"weeks=?":""},${body.image_updates?"image_updates=?":""},${body.date?"date=?":""} WHERE farm_updates.id = ?`;

    return db.query(query, values).then((result)=>{
      res.withSuccess(201,"update").reply();
    }).catch(function (error) {
      res.withServerError(500).reply();
    })
  }

  static allActivity(req,res){

    let values  = [];
    let body = req;

    let query   = `SELECT farm_activities.*,farm_status.name as farm_status_name,states.name as farm_location_name,farms.* FROM farms INNER JOIN farms on farms.id = farm_activities.farm_id INNER JOIN status AS farm_status ON status.id = farms.status ${operate(req).on('weeks').on('date').on('farm_status','farms.status').on('farm_location','farms.location').on('farm_status','farms.status').onParam('farmId','farms.id').done()} ${req.paginate(20)}`;

    return db.query(query,values,true,req).then(function (result) {
      res.withSuccess(200).withData(result).reply();
    }).catch(function () {
      res.withServerError(500).reply();
    })

  }

}