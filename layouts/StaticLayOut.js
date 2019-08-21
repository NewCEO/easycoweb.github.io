import Head from 'next/head';
import React from 'react';

class StaticLayout extends React.Component {
  constructor(prop){
    super()
    this.prop = prop
  }


	componentDidMount(){
		
		if($('.wow').length){		
			var wow = new WOW({
			mobile:       false
			});
			wow.init();
		}

		//three-column-carousel
		if ($('.three-column-carousel').length) {
			$('.three-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}

	//three-column-carousel
	    if ($('.related-event-carousel').length) {
			$('.related-event-carousel').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="flaticon-back"></span>', '<span class="flaticon-right-arrow-angle"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}


	// single-item-carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}

	// brand-carousel
	if ($('.brand-carousel').length) {
		$('.brand-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}


	// brand-carousel
	if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}

	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	

	//Search Box Toggle
	if($('.search-toggle').length){
	   //Dropdown Button
	   $('.search-toggle').on('click', function() {
	    $(this).toggleClass('active');
	    $(this).next('.search-box').toggleClass('now-visible');
	    });
	}

	//Custom Seclect Box
		if($('.custom-select-box').length){
			$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
		}

		var progressBar = $('.progress');
	  		if(progressBar.length) {
	    		progressBar.each(function () {
	      		var Self = $(this);
	      		Self.appear(function () {
	        	var progressValue = Self.data('value');

	        	Self.find('.progress-bar').animate({
	          	width:progressValue+'%'           
	        	}, 100);

	        	Self.find('span.value').countTo({
	          		from: 0,
	            	to: progressValue,
	            	speed: 100
	        		});
	     	 	});
	   		})
	  }
	}


	
  render() {
    return(

       <html>

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
	<script src="/js/jquery.appear.js"></script>
	<script src="/js/jquery.countTo.js"></script>
	<script src="/js/script.js"></script>
	<link href="/css/style.css" rel="stylesheet"/>
	<link href="/css/custom.css" rel="stylesheet"/>
	<link href="/css/responsive.css" rel="stylesheet"/>
	<link rel="icon" href="images/favicon.ico" type="image/x-icon"/>
	<link href="/css/font-awesome.css" rel="stylesheet"/>

</Head>


<body class="boxed_wrapper">
	<div class="preloader"></div>
	<header class="main-header header-style-three header-style-four">

		<div class="header-upper">
			<div class="container clearfix">
				<figure class="logo-box"><a href="index.html"><img src="images/logo.png" alt=""/></a></figure>
				<div class="upper-right clearfix">
					<div class="upper-column info-box">
						<div class="icon-box"><i class="flaticon-phone-call"></i></div>
						<ul>
							<li>
								<strong>880 1723801729</strong>hello@cowfunding.com.ng
							</li>
						</ul>
					</div>
					<div class="upper-column info-box">
						<div class="icon-box"><i class="flaticon-placeholder"></i></div>
						<ul>
							<li>
							<strong> Oloba Village,</strong>Osun State.
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
										<li><a href="index.html">Home</a>
										</li>
										<li><a href="about.html">About Us</a></li>
										<li><a href="causes-grid.html">Our Ranch</a>
										</li>
										<li><a href="team.html">Our Gallery</a>
										</li>
										<li><a href="https://medium.com/selemafarms">Our Thoughts</a>
										</li>
										<li><a href="contact.html">Contact Us</a></li>
									</ul>
								</div>
							</nav>
						</div>
						<ul class="nav-right pull-right">
							<div class="upper-column info-box donate-box">
								<button class="donate-box-btn theme-btn">Login</button>
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
						<figure class="logo-box"><a href="index.html"><img src="" alt=""/>CowFunding</a></figure>
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
										<li><a href="index-7.html">Home</a>
										</li>
										<li><a href="about.html">About Us</a></li>
										<li><a href="causes-grid.html">Our Ranch</a>
										</li>
										<li><a href="team.html">Our Gallery</a>
										</li>
										<li><a href="#">Our Thoughts</a>
										</li>
										<li><a href="contact.html">Contact Us</a></li>
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
							<figure class="logo-box"><a href="index-6.html"><img src="images/logo.png" alt=""/></a></figure>
							<div class="text">
								<p>Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure.</p>
							</div>
							<ul class="footer-social">
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
						<div class="service-widget footer-widget">
							<div class="footer-title">Links</div>
							<ul class="list">
								<li><a href="index-7.html">Home</a>
								</li>
								<li><a href="about.html">About Us</a></li>
								<li><a href="causes-grid.html">Our Ranch</a>
								</li>
								<li><a href="team.html">Our Gallery</a>
								</li>
								<li><a href="#">Our Thoughts</a>
								</li>
								<li><a href="contact.html">Contact Us</a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 footer-widget">
						<div class="contact-widget footer-widget">
							<div class="footer-title">Contacts</div>
							<div class="text">
								<p> Oloba Village,Osun State.</p>
								<p>+2(305) 587-3407</p>
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
							<form action="#" class="donate-form default-form me">
								<div class="form-bg">
									<div class="row clearfix">
										<div class="col-lg-12 col-md-6 col-sm-12">
											<div class="form-group">
												<p>Your Name*</p>
												<input type="text" name="name" placeholder=""/>
											</div>
										</div>
										<div class="col-lg-12 col-md-6 col-sm-12">
											<div class="form-group">
												<p>Email*</p>
												<input type="text" name="email" placeholder=""/>
											</div>
										</div>
									</div>
								</div>
								<div class="center text-center me"><button class="theme-btn" type="submit">Login</button></div>
							</form>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="donate-form-area">
							<h2>Register</h2>
							<h4 class="text-center">Fill this form to Register</h4>
							<form action="#" class="donate-form default-form me">
								<div class="form-bg">
									<div class="row clearfix">
										<div class="col-lg-12 col-md-12 col-sm-12">
											<div class="form-group">
												<p>Your Name*</p>
												<input type="text" name="name" placeholder=""/>
											</div>
										</div>
										<div class="col-lg-12 col-md-12 col-sm-12">
											<div class="form-group">
												<p>Email*</p>
												<input type="text" name="email" placeholder=""/>
											</div>
										</div>
									</div>
								</div>
								<div class="center text-center me"><button class="theme-btn" type="submit">Register</button></div>
							</form>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
      </body>
      </html> 
    )
  }


}

export default StaticLayout;
