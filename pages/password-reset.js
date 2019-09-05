import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
import ResetForm 	from '../components/resetForm';

import HttpHelper from "../helpers/httpHelper";

import HelpBlock from "../components/HelpBlock";
class Index extends React.Component{

  static async getInitialProps({ req }) {
    return { };
  }




	render() {

    	return(
    		<StaticLayout>
				<section className="page-title centred"
						 style={{"background-image": "url(/images/main-slider/slider-Image-1.jpg)"}}>
					<div className="container">
						<div className="content-box">
							<div className="title">Password Reset</div>
							<ul className="bread-crumb">
								<li><a href="/index">Home</a></li>
								<li>password reset</li>
							</ul>
						</div>
					</div>
				</section>
				<div className="form-bg">
					<div className="row clearfix" style={{justifyContent:"center"}}>
						<div className="col-md-6 col-lg-offset-2 col-md-offset-2">
							<div className="donate-form-area">
					<h2>Password Reset</h2>
					<h6 className="text-center">Enter your email to reset your password </h6>



					<ResetForm/>
				</div>
						</div>
					</div>
				</div>

      		</StaticLayout>

    	)
  }
}

export default Index;
