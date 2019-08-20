import http from '../helpers/httpHelper'
import  userType from '../config/userTypes'
import Router from "next/dist/client/router";
let isAdmin =  function(res){


    http.httpReq('user').then(function (data) {
      if (data.success.data.user_type === userType.admin || data.success.data.user_type === userType.superAdmin ){

        return true
      }
       return   Router.push('/')


    }).catch(function (reason) {
      return   Router.push('/');

    })

}

export default isAdmin;
