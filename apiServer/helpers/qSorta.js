let mysql   = require('mysql');
let sortOn  = require('./sortOn');

module.exports = function(){
  //?age[gte] = 4&age[lte] = 5

 let objects =  {
    queryFilter:  function(acceptedOperators,query){
      return (req,res,next)=>{

        let constructedString = '';

        //the query object we are checking E.g ?farmId[eql] = 4
        let queryObj = req.query[query];

        //{gte:4,lte:5}
        //confirm it exist
        if (queryObj){

          //confirm its an object that can be operated on
          if (typeof queryObj  !== 'object'){
            //
            queryObj = req.query[query];

          }
          //run through all elements in the array
          for (var element in queryObj){
            if (acceptedOperators.indexOf(element) > -1){
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
         return ` = ${ this.build(mysql.escape(query[queryOperator]))}`;
         break;
       case 'gte':
         return ` >  ${this.build( mysql.escape(query[queryOperator]))}`;
        break;

       case 'lte':
         return ` < ${this.build(mysql.escape(query[queryOperator]))} `;
         break;

       case 'gteOReqlTo':
         return `>= ${this.build(mysql.escape(query[queryOperator]))}`;
        break;

       case 'lteOReqlTo':
         return `<= ${this.build(mysql.escape(query[queryOperator]))}`;
          break;

       case 'like':
         return `LIKE ${this.build(mysql.escape(query[queryOperator]))}`;
         break;

       case  'btw':
         let string = query[queryOperator].split("|",2);
         if(string.length === 2){
           return `Between ${mysql.escape(string[0])} AND ${mysql.escape(string[1])}`;
         }
         return '';
         break;

       case 'notEqlTo':
         return `!= ${this.build(mysql.escape(query[queryOperator]))}`;
         break;
     }

   },
    operate:      function (req) {
      return new sortOn(req);
    },
    build:        function (string) {
      let arrayedString = string.replace(',','OR');
      return arrayedString;
    }
  }

  objects.queryFilter = objects.queryFilter.bind(objects);
  objects.translate   = objects.translate.bind(objects);

  return objects;
}
