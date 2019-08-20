import React from 'react';
import HttpHelper from '../helpers/httpHelper';
import FormHelpText from '../components/FormHelpText';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from "react-router-dom";
import Router from 'next/router'
import HelpBlock from "../components/HelpBlock";

 class  SignUpFormComp extends React.Component{
   constructor(props){
     super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.form      = React.createRef();


     this.state = {
        name:'',
        redirect:false,
        emailHelpText :{
          state:false,
          error:false,
          text:''
        },
        passwordHelpText:{
          state:false,
          error:false,
          text:''
        },
        confirmPasswordHelpText:{
          state:false,
          error:false,
          text:''
        },
        nameHelpText:{
          state:false,
          error:false,
          text:''
        },
        TOSHelpText:{
          state:false,
          error:false,
          text:''
        },
        signUpHelpBlock:{
          state:false,
          error:false,
          text:''
        }
      }
   }

   helpFormText(){

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

   validatePassword(password){
     if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password))){
       this.setState({passwordHelpText:{
           state:true,
           error:true,
           text:'Password must be more than length of atleast 8  and contain a lower case , uppercase character and numerical character'
         }});
       return false
     }else{
       this.setState({
         passwordHelpText:{
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
         confirmPasswordHelpText:{
           state:true,
           error:true,
           text:'Passwords do not match'
         }
       })
       return false;
     }else{
       this.setState({
         confirmPasswordHelpText:{
           state:true,
           error:false,
           text:'Passwords matches'
         }
       });
       return true;
     }
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
       case 'password' :
         this.validatePassword(target.value);
         this.validateConfPassword(target.value,this.state.confirmPassword);

         break;
       case 'confirmPassword':
          this.validateConfPassword(target.value,this.state.password);
         break;
       case 'email':
         this.validateEmail(target.value);
         break;
     }

   }

   handleSubmit(e){
     e.preventDefault();

     this.validateEmail(this.state.email).then( (emailExists)=> {

       if (this.validateName(this.state.name) && this.validatePassword(this.state.password) && this.validateConfPassword(this.state.password,this.state.confirmPassword) && (emailExists  === false) ){

         let formData = new FormData();
         formData.append('name',this.state.name);
         formData.append('password',this.state.password);
         formData.append('confirmPassword',this.state.confirmPassword);
         formData.append('email',this.state.email);


         HttpHelper.httpReq('sign-up',formData,'POST')
           .then((result)=>{
             if(result.success){

              this.setState({signUpHelpBlock:{
                  state:true,
                  error:false,
                  text:'Registration Successful. You would receive a link in your email to activate your Account'
                }});
               this.form.current.reset(); ;
               return   true
             }
             this.setState({signUpHelpBlock:{
                 state:true,
                 error:true,
                 text:'An error occcured while creating your account'
               }});
             console.log(result)
           }).catch((error)=>{
           this.setState({signUpHelpBlock:{
               state:true,
               error:true,
               text:'An error occured while creating your account'
             }});
         });
       }
     })

   }


   render() {
    return (
      <form id="member-registration" onSubmit={this.handleSubmit} ref={this.form} className="form-horizontal">
        {

          this.state.signUpHelpBlock.state?<HelpBlock type={this.state.signUpHelpBlock.error} text={this.state.signUpHelpBlock.text} />:''
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
              <label id="jform_password1-lbl" htmlFor="jform_password1"
                     className="hasPopover required" title="Password"
                     data-content="Enter your desired password.">
                Password<span className="star">&#160;*</span></label>
            </div>
            <div className="controls">
              <input type="password" name="password" id="jform_password1" onChange={this.handleChange}
                     autoComplete="off" className="validate-password required" size="30"
                     value={this.state.password} required aria-required="true"/></div>
            {

              this.state.passwordHelpText.state?<FormHelpText type={this.state.passwordHelpText.error} text={this.state.passwordHelpText.text} />:''
            }
          </div>
          <div className="control-group">
            <div className="control-label">
              <label id="jform_password2-lbl" htmlFor="jform_password2"
                     className="hasPopover required" title="Confirm Password"
                     data-content="Confirm your password.">
                Confirm Password<span className="star">&#160;*</span></label>
            </div>
            <div className="controls">
              <input type="password" name="confirmPassword" onChange={this.handleChange} id="jform_password2"
                     autoComplete="off" className="validate-password required" size="30"
                     value={this.state.password2} required aria-required="true"/></div>
            {

              this.state.confirmPasswordHelpText.state?<FormHelpText type={this.state.confirmPasswordHelpText.error} text={this.state.confirmPasswordHelpText.text} />:''
            }
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
        <fieldset>
          <div className="control-group">
            <div className="control-label">
              <label id="jform_profile_tos-lbl" htmlFor="jform_profile_tos"
                     className="hasPopover required" title="Terms of Service"
                     data-content="Please read the Terms of Service. You will not be able to register if you do not agree with them.">Terms
                of Service<span className="star">&#160;*</span></label></div>
            <div className="controls">
              <fieldset id="jform_profile_tos" className="radio" required aria-required="true">
                <input type="radio" id="jform_profile_tos0" name="jform[profile][tos]" value="1"
                       required aria-required="true"/> <label htmlFor="jform_profile_tos0">
                Agree </label>

              </fieldset>
            </div>
          </div>
        </fieldset>
        <div className="controls col-sm-12">
          <button type="submit" className="btn btn-primary">Register</button>
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
 export  default SignUpFormComp;