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
    this.state = {
      resetEmail:'',
      password:'',
      redirect:false,
      HelpBlock:{
        state:false,
        error:false,
        text:''
      },
    }

  }



  handleChang(e){

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

  }

  handleSubm(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("email",this.state.resetEmail);
      HttpHelper.httpReq('password/reset/init',formData,'POST').then((response)=>{
          if (response.success){
              this.setState({
                  HelpBlock:{
                      state:true,
                      error:false,
                      text:`A reset key has been sent to your email. click on it to reset your password`
                  }
              })
          }else{
              this.setState({
                  HelpBlock:{
                      state:true,
                      error:true,
                      text:response.error.errMessage?response.error.errMessage:"An error occurred please retry again later"
                  }
              })
          }
      }).catch(()=>{
          this.setState({
              HelpBlock:{
                  state:true,
                  error:true,
                  text:"An error occurred please retry again later"
              }
          })
      })

  }




  render() {

    return (

        <form action="#"  onSubmit={this.handleSubm}  className="donate-form default-form me">
            <div className="form-bg">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-6 col-sm-12">
                        <div className="form-group">
                            { this.state.HelpBlock.state?<HelpBlock type={this.state.HelpBlock.error} text={this.state.HelpBlock.text} />:''}


                            <p>Email*</p>
                            <input type="email" name="resetEmail" onChange={this.handleChang}
                                    size="30" value={this.state.resetEmail}  required
                                   aria-required="true"/>
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