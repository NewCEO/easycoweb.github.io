import serverFetch from 'node-fetch';

class HttpHelper {
  static httpReq(url = '', data,method) {

     let parameters = {
       credentials:'include',
       method: (method !== "undefined" ?method:'GET'), // *GET, POST, PUT, DELETE, etc.
       body: data, // body data type must match "Content-Type" header
     }

      if (data === ''){
        delete parameters.body;
      }

      console.log(parameters,'login data');


      // Default options are marked with *
      return fetch(url, parameters )
        .then( (response)=> {
          return response.json()
          // switch (response.status) {
          //   case "200":
          //     return response.json();
          //     break;
          //   default:
          //     return new Promise(function (resolve,reject) {
          //       reject({error:response.status,text:response.statusText});
          //     })
          // }
        }); // parses JSON response into native JavaScript objects
    }
  static serverReq(url = '', data,method){
    let parameters = {
      credentials:'include',
      method: (method !== "undefined" ?method:'GET'), // *GET, POST, PUT, DELETE, etc.
      body: data !== 'application/json'?data:JSON.stringify(data), // body data type must match "Content-Type" header
    }

    if (data === ''){
      delete parameters.body;
    }


    // Default options are marked with *
    return serverFetch(url, parameters )
      .then( (response)=> {
        return response.json()
        // switch (response.status) {
        //   case "200":
        //     return response.json();
        //     break;
        //   default:
        //     return new Promise(function (resolve,reject) {
        //       reject({error:response.status,text:response.statusText});
        //     })
        // }
      }); // parses JSON response into native JavaScript objects
  }
}
export default HttpHelper;