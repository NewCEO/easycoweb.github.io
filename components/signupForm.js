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
        email:'',
        password:'',
         confirmPassword:'',
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
             if (result.success.data === 'true'){
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
                 //Reset Help Texts
                 this.setState({

                     passwordHelpText:{
                         state:false,
                         error:false,
                         text:''
                     }
                 })
                 this.setState({
                     confirmPasswordHelpText:{
                         state:false,
                         error:false,
                         text:''
                     }
                 })
              this.setState({signUpHelpBlock:{
                  state:true,
                  error:false,
                  text:'Registration Successful. You would receive a link in your email to activate your Account'
                },
                  name:"",
                  email:"",
                  password:"",
                  confirmPassword:""
              });
               this.form.current.reset();
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

      <form action="#" className="donate-form default-form me" onSubmit={this.handleSubmit} ref={this.form} >
        {

          this.state.signUpHelpBlock.state?<HelpBlock type={this.state.signUpHelpBlock.error} text={this.state.signUpHelpBlock.text} />:''
        }
        <div className="form-bg">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-group">
                <p>Your Name*</p>
                <input type="text"  name="name" id="jform_name"  className="required"
                       size="30" required aria-required="true" value={this.state.name} onChange={this.handleChange} autoComplete="off" />

                {

                  this.state.nameHelpText.state?<FormHelpText type={this.state.nameHelpText.error} text={this.state.nameHelpText.text} />:''
                }
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-group">
                <p>Email*</p>
                <input type="email" name="email" onChange={this.handleChange} className="validate-email required"
                       id="jform_email1"  size="30" value={this.state.email}  required
                       aria-required="true" autoComplete="off"/></div>
              {
                this.state.emailHelpText.state?<FormHelpText type={this.state.emailHelpText.error} text={this.state.emailHelpText.text} />:''
              }
              </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-group">
                <p>Password*</p>
                <input type="password" name="password" id="jform_password1" onChange={this.handleChange}
                       autoComplete="off" className="validate-password required" size="30"
                       value={this.state.password} required aria-required="true"/></div>
              {

                this.state.passwordHelpText.state?<FormHelpText type={this.state.passwordHelpText.error} text={this.state.passwordHelpText.text} />:''
              }
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-group">
                <p>Confirm Password*</p>
                <input type="password" name="confirmPassword" onChange={this.handleChange} id="jform_password2"
                       autoComplete="off" className="validate-password required" size="30"
                       value={this.state.confirmPassword} required aria-required="true"/></div>
              {

                this.state.confirmPasswordHelpText.state?<FormHelpText type={this.state.confirmPasswordHelpText.error} text={this.state.confirmPasswordHelpText.text} />:''
              }
            </div>
            </div>
          </div>

        <div className="center text-center me">
          <button className="theme-btn" type="submit">Register</button>
        </div>
      </form>


    );
   }
 }
 export  default SignUpFormComp;