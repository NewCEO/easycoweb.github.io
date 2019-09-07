import React from 'react';
import HttpHelper from '../helpers/httpHelper';
import userTypes     from "../config/userTypes";
import HelpBlock  from '../components/HelpBlock';
import error from '../config/errorMessages';

import Router from 'next/router'
import {Link} from "react-router-dom";

class LogInFormComp extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReVerification = this.handleReVerification.bind(this);
    this.state = {
      email:'',
      password:'',
      redirect:false,
      loginHelpBlock:{
        state:false,
        error:false,
        text:''
      },
    }

  }

  helpFormText(){

  }

  handleReVerification(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append('email',this.unverifiedMail);
    this.setState({ loginHelpBlock:{
        state:true,
        error:false,
        text:`Verifying...`
      }});
    HttpHelper.httpReq('user/re-verify',formData,"POST").then((response)=>{
      if (response.success){
        this.setState({ loginHelpBlock:{
            state:true,
            error:false,
            text:` ${ this.unverifiedMail} has just been sent a verification link.`
          }});
        this.setState({
          email:"",
          password:""
        })
      }else{
        this.setState({ loginHelpBlock:{
            state:true,
            error:true,
            text:<div> {this.unverifiedMail} re-verification failed. Please try again <a href='#' onClick={this.handleReVerification}>Re-verify</a></div>
          }});
      }
    })
  }

  handleChange(e){

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ loginHelpBlock:{
        state:false,
        error:false,
        text:''
      }});

    let formData = new FormData();
    formData.append('password',this.state.password);
    formData.append('email',this.state.email);
    let text = '';


    HttpHelper.httpReq('login',formData,'POST')
      .then((result)=>{

        if(result.success){

          this.setState({ loginHelpBlock:{
              state:true,
              error:false,
              text:'Login Successful'
            }});
          if (result.success.data.userDet.user_type === userTypes.admin || result.success.data.userDet.user_type === userTypes.superAdmin) {
            Router.push('/admin/dashboard')
          }else if(result.success.data.userDet.user_type === userTypes.regular){
            Router.push('/user/dashboard')
          }

        }else{
          if (result.error.data && (result.error.data.errId === error.blocked.errId)){

            text = "Your account has been blocked";
          }else if(result.error.data && (result.error.data.errId === error.unverified.errId)) {
            this.unverifiedMail = this.state.email;
            text = <div>Your account has not been verified click <a  onClick={this.handleReVerification} href="#" >here</a> to verify your account now</div>
          }else {
            text = "The Email  or Password is Incorrect";
          }

          this.setState({ loginHelpBlock:{
              state:true,
              error:true,
              text:text
            }});
        }


      }).catch((error)=>{console.log(error)});

  }


  render() {

    return (

      <form action="#"  onSubmit={this.handleSubmit}  className="donate-form default-form me">
        {

          this.state.loginHelpBlock.state?<HelpBlock type={this.state.loginHelpBlock.error} text={this.state.loginHelpBlock.text} />:''
        }
        <div className="form-bg">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-6 col-sm-12">
              <div className="form-group">
                <p>Email*</p>
                <input type="email" name="email" onChange={this.handleChange} className="validate-email required"
                       id="jform_email1"  size="30" value={this.state.email} autoComplete="email" required
                       aria-required="true"/>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 col-sm-12">
              <div className="form-group">
                <p>Password*</p>
                <input type="password" name="password" id="jform_password1" onChange={this.handleChange}
                       autoComplete="off" className="validate-password required" size="30"
                       value={this.state.password} required aria-required="true"/></div>
              </div>

            </div>
          </div>
          <a href="/password/reset">Forgot Password ? Click Here</a>

        <div className="center text-center me">
          <button className="theme-btn" type="submit">Login</button>

          <a ></a>

        </div>
      </form>

    );
  }
}
export  default LogInFormComp;