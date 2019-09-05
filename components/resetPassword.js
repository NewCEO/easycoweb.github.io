import React from 'react';
import HttpHelper from '../helpers/httpHelper';
import userTypes     from "../config/userTypes";
import HelpBlock  from '../components/HelpBlock';
import error from '../config/errorMessages';

import Router from 'next/router'
import {Link} from "react-router-dom";

class PasswordReset extends React.Component{
  constructor(props){
    super(props);
    this.handleChang = this.handleChang.bind(this);
    this.handleSubm = this.handleSubm.bind(this);
    this.key        =   this.props.resetKey;
    this.email      =   this.props.email;
    this.state = {
      resetEmail:'',
      password:'',
      redirect:false,
      HelpBlock:{
        state:false,
        error:false,
        text:''
      },
        passwordHelpBlock:{
            state:false,
            error:false,
            text:''
        },
        confHelpBlock:{
            state:false,
            error:false,
            text:''
        }
    }

  }

    validatePassword(password){
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password))){
            this.setState({passwordHelpBlock:{
                    state:true,
                    error:true,
                    text:'Password must be more than length of atleast 8  and contain a lower case , uppercase character and numerical character'
                }});
            return false
        }else{
            this.setState({
                passwordHelpBlock:{
                    state:true,
                    error:false,
                    text:'Password OK'
                }
            })
            return true;
        }
    }

    validateConfPassword(confPassword,password){
        if (password !== confPassword){
            this.setState({
                confHelpBlock:{
                    state:true,
                    error:true,
                    text:'Passwords do not match'
                }
            });
        }else{
            this.setState({
                confHelpBlock:{
                    state:true,
                    error:false,
                    text:'Passwords matches'
                }
            });
            return true;
        }
    }
  handleChang(e){

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

      switch (target.name) {

          case 'password' :
              this.validatePassword(target.value);
              this.validateConfPassword(target.value,this.state.confirmPassword);

              break;
          case 'confirmPassword':
              this.validateConfPassword(target.value,this.state.password);
              break;

      }

  }

  handleSubm(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("email",this.email);
    formData.append('reset_key',this.key);
    formData.append('password',this.state.password);
      HttpHelper.httpReq('password/reset/',formData,'POST').then((response)=>{
          if (response.success){
              this.setState({
                  HelpBlock:{
                      state:true,
                      error:false,
                      text:`Your password was reset successfully`
                  }
              })
          }else{
              this.setState({
                  HelpBlock:{
                      state:true,
                      error:true,
                      text:`An error occurred. Try again later`
                  }
              })
          }
      }).catch(()=>{
          this.setState({
              HelpBlock:{
                  state:true,
                  error:true,
                  text:`An error occurred. Try again later`
              }
          })
      })

  }




  render() {

    return (

        <form action="#"  onSubmit={this.handleSubm}  className="donate-form default-form me">
            <div className="form-bg">
                <div className="row clearfix">
                    { this.state.HelpBlock.state?<HelpBlock type={this.state.HelpBlock.error} text={this.state.HelpBlock.text} />:''}

                    <div className="col-lg-12 col-md-6 col-sm-12">
                        <div className="form-group">
                            { this.state.passwordHelpBlock.state?<HelpBlock type={this.state.passwordHelpBlock.error} text={this.state.passwordHelpBlock.text} />:''}


                            <p>Password*</p>
                            <input type="password" name="password" onChange={this.handleChang}
                                    size="30" value={this.state.password}  required
                                   aria-required="true"/>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12">
                        <div className="form-group">
                            { this.state.confHelpBlock.state?<HelpBlock type={this.state.confHelpBlock.error} text={this.state.confHelpBlock.text} />:''}


                            <p>Confirm Password*</p>
                            <input type="password" name="confirmPassword" onChange={this.handleChang}
                                   size="30" value={this.state.confirmPassword}  required
                                   aria-required="true" />
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <button className="theme-btn" type="submit">Reset</button>

        </form>

    );
  }
}
export  default PasswordReset;