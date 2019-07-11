module.exports = class sortOn {
  constructor(string,req){
    this.string = string;
    this.query   = req.query;
    this.params  = req.params;
    return this;
  }

  on(query,alias){
   this.string +=  this.query[query]? " AND "+ alias?alias:this.query[query] :"";
   return this;
  }
  onParam(query,alias){
    this.string +=  this.params[query]? " AND "+ alias?alias:this.params[query] :"";
    return this;
  }
  done(){
    return this.string;
  }
}