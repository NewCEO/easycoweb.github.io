let mysql   = require('mysql');
let sortOn  = require('./sortOn');

module.exports = function(){
  //?age[gte] = 4&age[lte] = 5

 let objects =  {
    queryFilter:  function(acceptedOperators,query){
      return (req,res,next)=>{

        let constructedString = '';

        let queryObj = req.query[query];

        //{gte:4,lte:5}
        if (queryObj){

          if (typeof queryObj  !== 'object'){
            req.query[query] = {eql:queryObj};
            queryObj = req.query[query];
          }
          for (var element in queryObj){
            if (acceptedOperators.indexOf(element)){
              constructedString += (constructedString !== ''?"OR ":'') +  `${query} ${this.translate(queryObj,element)}`;
            }
          }



          //reconstructed Query
          req.query[query] =  constructedString !== ''?`(${constructedString})`:undefined ;
        }
        next();
      }

    },
    translate:    function (query,queryOperator) {
     switch (queryOperator) {
       case 'eql':
         return ` =  ${mysql.escape(query[queryOperator])}`;
         break;
       case 'gte':
         return ` > ${ mysql.escape(query[queryOperator])}`;
        break;

       case 'lte':
         return ` < ${mysql.escape(query[queryOperator])}`;
         break;

       case 'gteOReqlTo':
         return `>= ${mysql.escape(query[queryOperator])}`;
        break;

       case 'lteOReqlTo':
         return `<= ${mysql.escape(query[queryOperator])}`;
          break;

       case 'like':
         return `LIKE ${mysql.escape(query[queryOperator])}`;
         break;

       case  'btw':
         let string = query[queryOperator].split("|",2);
         if(string.length === 2){
           return `Between ${mysql.escape(string[0])} AND ${mysql.escape(string[1])}`;
         }
         return '';
         break;

       case 'notEqlTo':
         return `!= ${mysql.escape(query[queryOperator])}`;
         break;
     }

   },
    operate:      function (req) {
      return new sortOn("WHERE 1=1 ",req.query);
    }
  }
  objects.queryFilter = objects.queryFilter.bind(objects);
  return objects;
}
