import React from 'react';
import DashBoardLayOut from '../layouts/AdminDashboardLayOut';
import CreateFarmForm from '../components/createFarm';
import isAdmin from  '../middlewares/isAdmin';
import $ from 'jquery';
import httpHelper from "../helpers/httpHelper";
import HelpBlock from "../components/loginForm";
import FormHelpText from "../components/signupForm";

class createAdmin extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name:'',
      redirect:false,
      emailHelpText :{
        state:false,
        error:false,
        text:''
      },
      nameHelpText:{
        state:false,
        error:false,
        text:''
      },
      helpBlock:{
        state:false,
        error:false,
        text:''
      },
    }
  }

  componentDidMount() {
    isAdmin();
  }

  handleChange(e){

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    switch (target.name) {
      case 'name':
        this.validateName(target.value);
        break;

      case 'email':
        this.validateEmail(target.value);
        break;
    }

  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ loginHelpBlock:{
        state:false,
        error:false,
        text:''
      }});

    let formData = new FormData();
    formData.append('name',this.state.name);
    formData.append('email',this.state.email);
    formData.append('permission',this.state.permission);



    HttpHelper.httpReq('user/admin/create',formData,'POST')
      .then((response)=>{
        if (response.success){
          this.setState({ helpBlock:{
              state:true,
              error:false,
              text:'user created successfully'
            }});
        }else{
          this.setState({ helpBlock:{
              state:true,
              error:true,
              text:'error creating user'
            }});
        }
      }).catch((error)=>{
      this.setState({ helpBlock:{
          state:true,
          error:true,
          text:'error creating user'
        }});
    });

  }

  validateEmail(email){
    if (email !== 'undefined'){
      return new Promise( (resolve,reject)=> {
        HttpHelper.httpReq('email/exists?email='+email,'','GET')
          .then((result)=>{
            console.log(result,'result');
            // console.log(JSON.stringify(result),'does email exist');
            if (result.message === true){
              this.setState({
                emailHelpText:{
                  state:true,
                  error:true,
                  text:'Email already exist'
                }
              });
            }else{
              this.setState({
                emailHelpText:{
                  state:false,
                  error:false,
                  text:' '
                }
              });
            }
            resolve(this.state.emailHelpText.error);
          }).catch((error)=>{console.log(error)});
      })
    }else{
      this.setState({
        emailHelpText:{
          state:true,
          error:true,
          text:'Email already exist'
        }
      })
    }


  }

  validateName(input){
    if (input.trim() === ''){
      this.setState({nameHelpText:{
          state:true,
          error:true,
          text:'Name is required'
        }});
      return false;
    }else{
      this.setState({nameHelpText:{
          state:false,
          error:false,
          text:'Name is required'
        }});
      return true;
    }
  }

  getAdminTypes(){
    httpHelper.serverReq('farms/all').then( (response)=> {
      if (response.success){
        this.setState({userTypes:response.success.data});
      }
    })
  }


  render() {
    return(

        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary" data-collapsed="0" id="form">
              <div className="panel-body">
                <form id="member-registration" onSubmit={this.handleSubmit} className="form-horizontal">
                  {

                    this.state.helpBlock.state?<HelpBlock type={this.state.helpBlock.error} text={this.state.helpBlock.text} />:''
                  }
                  <fieldset>
                    <div className="control-group">
                      <div className="control-label">
                        <label id="jform_name-lbl" htmlFor="jform_name" className="hasPopover required"
                               title="Name" data-content="Enter your full name.">
                          Name<span className="star">&#160;*</span></label>
                      </div>
                      <div className="controls">
                        <input type="text"  name="name" id="jform_name"  className="required"
                               size="30" required aria-required="true" value={this.state.name} onChange={this.handleChange} />

                        {

                          this.state.nameHelpText.state?<FormHelpText type={this.state.nameHelpText.error} text={this.state.nameHelpText.text} />:''
                        }

                      </div>
                    </div>
                    <div className="control-group">
                      <div className="control-label">
                        <label id="jform_email1-lbl" htmlFor="jform_email1" className="hasPopover required"
                               title="Email Address" data-content="Enter your email address.">
                          Email Address<span className="star">&#160;*</span></label>
                      </div>
                      <div className="controls">
                        <input type="email" name="email" onChange={this.handleChange} className="validate-email required"
                               id="jform_email1"  size="30" value={this.state.email} autoComplete="email" required
                               aria-required="true"/></div>
                      {
                        this.state.emailHelpText.state?<FormHelpText type={this.state.emailHelpText.error} text={this.state.emailHelpText.text} />:''
                      }
                    </div>

                  </fieldset>
                  <div className="controls col-sm-12">
                    <button type="submit" className="btn btn-primary">create user</button>

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
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default createAdmin;
