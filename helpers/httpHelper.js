class HttpHelper {
  static HttpReq(url = '', data = {},method) {
      // Default options are marked with *
      return fetch(url, {
        method: (method !== "undefined" ?method:'GET'), // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
        .then( (response)=> {
          switch (response.status) {
            case "200":
              return response.json();
              break;
            default:
              return new Promise(function (resolve,reject) {
                reject({error:response.status,text:response.statusText});
              })
          }
        }); // parses JSON response into native JavaScript objects
    }
}
export default HttpHelper;