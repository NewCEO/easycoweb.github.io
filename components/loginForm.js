import React from 'react';
import HttpHelper from '../helpers/httpHelper';
import userTypes     from "../config/userTypes";
import HelpBlock  from '../components/HelpBlock';

import Router from 'next/router'

class LogInFormComp extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email:'',
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
          this.setState({ loginHelpBlock:{
              state:true,
              error:true,
              text:'The Email  or Password is Incorrect'
            }});
        }
      }).catch((error)=>{console.log(error)});

  }


  render() {

    return (

      <form action="#"  onSubmit={this.handleSubmit} className="donate-form default-form me">
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
          <div className="center text-center me">
          <button className="theme-btn" type="submit">Login</button>
        </div>
      </form>

    );
  }
}
export  default LogInFormComp;