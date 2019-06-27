import React from 'react';
import HttpHelper from '../helpers/httpHelper';

 class  SignUpFormComp extends React.Component{
   constructor(props){
     super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        name:'',
        
      }
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
     HttpHelper.HttpReq('',this.state,'POST')
       .then()
   }


   render() {
    return (

      <form id="member-registration" onSubmit={this.handleSubmit} className="form-horizontal">
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
              <input type="password" name="password" id="jform_password1"
                     autoComplete="off" className="validate-password required" size="30"
                     maxLength="10" value={this.state.password} required aria-required="true"/></div>
          </div>
          <div className="control-group">
            <div className="control-label">
              <label id="jform_password2-lbl" htmlFor="jform_password2"
                     className="hasPopover required" title="Confirm Password"
                     data-content="Confirm your password.">
                Confirm Password<span className="star">&#160;*</span></label>
            </div>
            <div className="controls">
              <input type="password" name="password2" id="jform_password2"
                     autoComplete="off" className="validate-password required" size="30"
                     maxLength="10" value={this.state.password2} required aria-required="true"/></div>
          </div>
          <div className="control-group">
            <div className="control-label">
              <label id="jform_email1-lbl" htmlFor="jform_email1" className="hasPopover required"
                     title="Email Address" data-content="Enter your email address.">
                Email Address<span className="star">&#160;*</span></label>
            </div>
            <div className="controls">
              <input type="email" name="email" className="validate-email required"
                     id="jform_email1"  size="30" value={this.state.email} autoComplete="email" required
                     aria-required="true"/></div>
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