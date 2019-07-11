module.exports = class sortOn {
  constructor(string,body){
    this.string = string;
    this.query   = body;
    return this;
  }

  on(query){
   this.string +=  this.query[query]? " AND "+ this.query[query] :"";
   return this;
  }
  done(){
    return this.string;
  }
}