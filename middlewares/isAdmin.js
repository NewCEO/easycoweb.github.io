import http from '../helpers/httpHelper'
import Router from "next/dist/client/router";
let isAdmin =  function(res){


    http.httpReq('http://localhost:3009/api/v1/user').then(function (data) {
      if (data.success.data.user_type === 2){

        return true
      }
       return   Router.push('/login')


    }).catch(function (reason) {
      return   Router.push('/login');

    })

}

export default isAdmin;
