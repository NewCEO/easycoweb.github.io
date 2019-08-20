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
      <form id="member-registration" onSubmit={this.handleSubmit} className="form-horizontal">
        {

          this.state.loginHelpBlock.state?<HelpBlock type={this.state.loginHelpBlock.error} text={this.state.loginHelpBlock.text} />:''
        }
        <fieldset>
          <div className="control-group">
            <div className="control-label">
              <label id="jform_email1-lbl" htmlFor="jform_email1" className="hasPopover required"
                     title="Email Address" data-content="Enter your email address.">
                Email Address<span className="star">&#160;*</span></label>
            </div>
            <div className="controls">
              <input type="email" name="email" onChange={this.handleChange} className="validate-email required"
                     id="jform_email1"  size="30" value={this.state.email} autoComplete="email" required
                     aria-required="true"/>
            </div>

          </div>
          <div className="control-group">
            <div className="control-label">
              <label id="jform_password1-lbl" htmlFor="jform_password1"
                     className="hasPopover required" title="Password"
                     data-content="Enter your desired password.">
                Password<span className="star">&#160;*</span></label>
            </div>
            <div className="controls">
              <input type="password" name="password" id="jform_password1" onChange={this.handleChange}
                     autoComplete="off" className="validate-password required" size="30"
                     value={this.state.password} required aria-required="true"/></div>

          </div>
        </fieldset>
        <div className="controls col-sm-12">
          <button type="submit" className="btn btn-primary">Login</button>

          <p>Don't have an account?<br /></p>
          <div className="mod-menu mod-menu__social">
            <ul className="nav menu social">
              <li className="item-148"><a className="" href="#" title="Facebook"><img
                src="../images/fb-button.png" alt="fb-button" height="500" width="200" /></a>
              </li>
              <li className="item-149"><a className="" href="#" title="Google"><img
                src="../images/google_signin_buttons/web/2x/btn_google_signin_light_focus_web@2x.png"
                alt="g-button" height="200" width="200" /></a>
              </li>

            </ul>
          </div>
        </div>
      </form>

    );
  }
}
export  default LogInFormComp;