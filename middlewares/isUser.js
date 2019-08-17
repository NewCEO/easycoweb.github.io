import http from '../helpers/httpHelper'
import  userType from '../config/userTypes'
import Router from "next/dist/client/router";

let isUser =  function(res){


    http.serverReq('http://localhost:3009/api/v1/user').then(function (data) {
      if (data.success.data.user_type === userType.regular){

        return true
      }
       return   Router.push('/')


    }).catch(function (reason) {
      return   Router.push('/');

    })

}

export default isUser;
