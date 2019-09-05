import Head from 'next/head';
import React from 'react';
import LogInFormComp from "../components/loginForm";
import SignUpFormComp from "../components/signupForm";
import  httpHelper from "../helpers/httpHelper";
import userTypes from '../config/userTypes';
import $ from 'jquery';

class StaticLayout extends React.Component {
  constructor(prop){
    super(prop);

    this.state = {

		userType:false
	};

	this.state = {
		userIn:false,
	};

	  this.prop = prop;
	  this.handleLoadedDom = this.handleLoadedDom.bind(this);

  }

   getLoggedInUserDetails(){
  	httpHelper.httpReq('user','',"GET").then((response)=>{
		if (response.success){
			this.setState({userType:response.success.data.user_type,userIn:true})
		}else{
			this.setState({userIn:false})

		}
	});
   }

	handleLoadedDom(){
		this.initPopUp();
		this.getLoggedInUserDetails();
	}

	componentDidMount() {

		window.addEventListener('load', this.handleLoadedDom);

	}



	initPopUp(){

      //Show Popup
      $(document).on('click','.donate-box-btn', function() {
        $('#donate-popup').addClass('popup-visible');
      });

      //Hide Popup
      $('.close-donate').on('click', function() {
        $('#donate-popup').removeClass('popup-visible');
      });

  }


	
  render() {
    return(

       <div>

      		<Head>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

	<title>CowFunding By Selema Farms</title>
  <script src="/js/jquery.js"></script>
	<script src="/js/bootstrap.js"></script>
	<script src="/js/owl.carousel.min.js"></script>
	<script src="/js/wow.js"></script>
	<script src="/js/validation.js"></script>
	<script src="/js/jquery.fancybox.pack.js"></script>
	<script type="text/javascript" src="/js/SmoothScroll.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZQiiFTOGpm2qHVZmZY1s-aEnmHDhqKgk"></script>
	<script src="/js/html5lightbox/html5lightbox.js"></script>
	<script src="/js/gmaps.js"></script>
	<script src="/js/map-helper.js"></script>
	<script src="/js/isotope.js"></script>
	<script src="/js/jquery-ui.js"></script>
	<script src="/js/jquery.appear.js">
</script>
	<script src="/js/jquery.countTo.js"></script>
	<script src="/js/script.js"></script>
		  <script src="/assets/js/countme.js"></script>

		  <link href="/css/style.css" rel="stylesheet"/>
	<link href="/css/custom.css" rel="stylesheet"/>
	<link href="/css/responsive.css" rel="stylesheet"/>
	<link rel="icon" href="images/logo-big.png" type="image/x-icon"/>
	<link href="/css/font-awesome.css" rel="stylesheet"/>

</Head>

			<div class="boxed_wrapper">
	<div class="preloader"></div>
	<header class="main-header header-style-three header-style-four">
		<div class="header-upper">
			<div class="container clearfix">
				<figure class="logo-box"><a href="index.html"><img className="logo-top" src="images/logo.png" alt=""/></a></figure>
				<div class="upper-right clearfix">
					<div class="upper-column info-box">
						<div class="icon-box"><i class="flaticon-phone-call"></i></div>
						<ul>
							<li>
								<strong>0815 030 5555</strong>hello@cowfunding.com.ng
							</li>
						</ul>
					</div>
					<div class="upper-column info-box">
						<div class="icon-box"><i class="flaticon-placeholder"></i></div>
						<ul>
							<li>
							<strong>Iwo,</strong>Osun State.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="header-bottom">
			<div class="menu-box">
				<div class="container">
					<div class="nav-outer clearfix">
						<div class="menu-area pull-left">
							<nav class="main-menu navbar-expand-lg">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    </button>
								</div>
								<div class="navbar-collapse collapse clearfix">
									<ul class="navigation clearfix">
										<li><a href="/index">Home</a>
										</li>
										<li><a href="http://selemafarms.com.ng/about.html">About Us</a></li>
										<li><a href="/shop">Our Ranch</a>
										</li>
										<li><a href="/gallery">Our Gallery</a>
										</li>
										<li><a href="/contact">Contact Us</a></li>
									</ul>
							</div>
							</nav>
						</div>

						<ul class="nav-right pull-right">
							<div class="upper-column info-box donate-box pull-right">
								{
									this.state.userIn?<a className="theme-btn" href={this.state.userType == userTypes.regular?"/user/dashboard":"/admin/dashboard"}>Dashboard</a>:
									<button className="donate-box-btn theme-btn">Login</button>
								}
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>


		<div class="sticky-header">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-12 col-sm-12 column">
						<figure class="logo-box"><a href="/index"><img src="" alt=""/>CowFunding</a></figure>
					</div>
					<div class="col-lg-8 col-md-12 col-sm-12 menu-column">
						<div class="menu-area">
							<nav class="main-menu navbar-expand-lg">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    </button>
								</div>
								<div class="navbar-collapse collapse clearfix">
									<ul class="navigation clearfix">
										<li><a href="/index">Home</a>
										</li>
										<li><a href="http://selemafarms.com.ng/about.html">About Us</a></li>
										<li><a href="/shop">Our Ranch</a>
										</li>
										<li><a href="/gallery">Our Gallery</a>
										</li>
										<li><a href="/contact">Contact Us</a></li>
									</ul>	
							
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
      {this.prop.children}
      <footer class="main-footer">

		  <div class="container">
			<div class="footer-content">
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-12 footer-column">
						<div class="logo-widget footer-widget">
							<figure class="logo-box"><a href="index.html"><img className="logo-big" src="images/logo-big.png" alt=""/></a></figure>
							<div class="text">
								<p>Healthy Livestock farming for consumption and investment for Nigerians.</p>
							</div>
							<ul class="footer-social">
								<li><a href="http://selemafarms.com.ng/facebook.com/selema.farm"><i class="fa fa-facebook"></i></a></li>
								<li><a href="https://twitter.com/selemafarms?s=17"><i class="fa fa-twitter"></i></a></li>
								<li><a href="https://www.linkedin.com/in/sola-omidiran-22748b100"><i class="fa fa-instagram"></i></a></li>
								<li><a href="https://www.instagram.com/selemafarmfresh_/?hl=en"><i class="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
						<div class="service-widget footer-widget">
							<div class="footer-title">Links</div>
							<ul class="list">
								<li><a href="/index">Home</a>
								</li>
								<li><a href="/about-us">About Us</a></li>
								<li><a href="/shop">Our Ranch</a>
								</li>
								<li><a href="/gallery">Our Gallery</a>
								</li>
								<li><a href="https://medium.com/selemafarms">Our Thoughts</a>
								</li>
								<li><a href="/contact">Contact Us</a></li>
								<li><a href="/faq">FAQs</a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 footer-widget">
						<div class="contact-widget footer-widget">
							<div class="footer-title">Contacts</div>
							<div class="text">
								<p> Iwo,Osun State.</p>
								<p>+234(0) 815 030 5555</p>
								<p>hello@cowfunding.com.ng</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			</footer>
  		<div class="footer-bottom">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-12 column">
					<div class="copyright"><a href="#">CowFunding By Selema Farms</a> &copy;2019 All Right Reserved</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12 column">
					<ul class="footer-nav">
						<li><a href="#">Terms of Service</a></li>
						<li><a href="#">Privacy Policy</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

  	<div id="donate-popup" class="donate-popup">
		<div class="close-donate"><span class="fa fa-close"></span></div>
		<div class="popup-inner">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="donate-form-area">
							<h2>Login</h2>
							<h4 class="text-center">Fill this form to login</h4>

              <LogInFormComp />

            </div>
					</div>
					<div class="col-sm-6">
						<div class="donate-form-area">
							<h2>Register</h2>
							<h4 class="text-center">Fill this form to Register</h4>

              <SignUpFormComp/>
						</div>
					</div>
				</div>
			</div>
			</div>
			</div>
      </div>
      </div>
    )
  }


}

export default StaticLayout;
