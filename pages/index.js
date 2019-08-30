import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
import AllFarms from '../components/allFarmsHomePage';
class Index extends React.Component{

  static async getInitialProps({ req }) {
    return { };
  }

	initWowSlider(){

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

	}

  constructor(props){
    super(props);
    this.state = {
      farms:"Loading.....",
      farmsUI:[]
    }
  }



componentDidMount() {
  	this.initWowSlider();
}

	render() {
    return(
      <StaticLayout>


		    <section class="main-slider slider-style-four">
		<div class="main-slider-carousel owl-carousel owl-theme slide-nav">

			<div class="slide" style={{"background-image":"url(images/main-slider/HKN_6769-min.jpg)"}}>
				<div class="container">
					<div class="content con">
						<h1>Funding one farm<br />funds multiple lifes<br /><br /></h1>
						<div class="text"> </div>
						<div class="donate-box"><button class="donate-box-btn theme-btn">Invest Now</button></div>
					</div>
				</div>
			</div>

			<div class="slide" style={{"background-image":"url(images/main-slider/goat.jpg)"}}>
				<div class="container">
					<div class="content con">
						<h1>Let your money<br/>work for you<br /><br /></h1>
						<div class="text"> </div>
						<div class="donate-box"><button class="donate-box-btn theme-btn">Invest Now</button></div>
					</div>
				</div>
			</div>

			<div class="slide" style={{"background-image":"url(images/main-slider/farm.jpg)"}}>
				<div class="container">
					<div class="content con">
						<h1>We prove that<br/>health and wealth are not so far apart</h1>
						<div class="text"> </div>
						<div class="donate-box"><button class="donate-box-btn theme-btn">Invest Now</button></div>
					</div>
				</div>
			</div>

		

		</div>
	</section>

				<div class="feature-style-two">
		<div class="container-fluid">
			<div class="feature-content">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-12 feature-column">
						<div class="feature-content-two" style={{"background-image": "url(images/resource/feature-4.jpg)"}}>
							<div class="icon-box wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms"><i class="flaticon-group"></i></div>
							<div class="title"><a href="#">Create an Account</a></div>
							<div class="text">CREATE AN ACCOUNT,IT'S FAST AND EASY.</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 feature-column">
						<div class="feature-content-two" style={{"background-image": "url(images/resource/feature-5.jpg);"}}>
							<div class="icon-box wow zoomIn" data-wow-delay="600ms" data-wow-duration="1500ms"><i class="flaticon-money-bag"></i></div>
							<div class="title"><a href="#">Fund a Farm</a></div>
							<div class="text">FUND A FARM FROM OUR RANCH.</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 feature-column">
						<div class="feature-content-two" style={{"background-image": "url(images/resource/feature-6.jpg);"}}>
							<div class="icon-box wow zoomIn" data-wow-delay="900ms" data-wow-duration="1500ms"><i class="flaticon-heart"></i></div>
							<div class="title"><a href="#">Get Farm Updates</a></div>
							<div class="text">TRACK YOUR INVESTMENTS THROUGH YOUR DASHBOARD.</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 feature-column">
						<div class="feature-content-two" style={{"background-image": "url(images/resource/feature-7.jpg);"}}>
							<div class="icon-box wow zoomIn" data-wow-delay="1200ms" data-wow-duration="1500ms"><i class="flaticon-money-bag"></i></div>
							<div class="title"><a href="#">Get Returns</a></div>
							<div class="text">GET PROFIT RETURNS PROMPTLY.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
				<section class="cause-section">
		<div class="cause-top-content overlay-bg centred" style={{"background-image":"url(images/resource/slider-Image-2.jpg)"}}>
			<div class="container">
				<div class="top-title">Our Farms </div>
			</div>
		</div>
		<div class="cause-bottom-content overlay-style-one">
			<div class="container">
				<div class="cause-content">
          <AllFarms/>
				</div>
			</div>
		</div>
	</section>


				<section class="testimonial-section">
		<div class="container">
			<div class="testimonial-content">
				<div class="row">
					<div class="col-lg-9 col-md-12 col-sm-12 testimonial-column">
						<div class="top-content overlay-bg" style={{"background-image":"url(images/resource/6.jpg)"}}>
							<div class="sec-title">What Our<br />Clients Say</div>
							<div class="title-text">Our Clients love our service.</div>
						</div>
					</div>
					<div class="col-lg-7 col-md-12 col-sm-12 brand-column">
					 <div class="title-text text-center">As Featured In</div> 
						<div class="brand-content">
						<div class="brand-carousel">
								<figure class="img-box"><a href="#"><img src="images/brand/vanguardlogo.png" alt=""/></a></figure>
								<figure class="img-box"><a href="#"><img src="images/brand/PunchLogo.png" alt=""/></a></figure>
								<figure class="img-box"><a href="#"><img src="images/brand/Pulselogo.png" alt=""/></a></figure>
								<figure class="img-box channels"><a href="#"><img src="images/brand/channelsTV%20logo.jpeg" alt=""/></a></figure>
								<figure class="img-box"><a href="#"><img src="images/brand/BounceLogo.png" alt=""/></a></figure>
							</div>
						</div>
					</div>
				</div>
				<div class="content-box">
					<div class="single-item-carousel">
						<div class="content">
							<div class="text">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia dese runt mollit anim est laborum sed ut perspiciatis unde omnis iste natus sit error voluptatem accusantium dolor emque laudatium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</div>
							<div class="author-info">
								<figure class="author-thumb"><img src="images/resource/1.png" alt=""/></figure>
								<h5>Victoria Simpson</h5>
								<div class="title">Co Founder</div>
							</div>
						</div>
						<div class="content">
							<div class="text">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia dese runt mollit anim est laborum sed ut perspiciatis unde omnis iste natus sit error voluptatem accusantium dolor emque laudatium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</div>
							<div class="author-info">
								<figure class="author-thumb"><img src="images/resource/1.png" alt=""/></figure>
								<h5>Victoria Simpson</h5>
								<div class="title">Co Founder</div>
							</div>
						</div>
						<div class="content">
							<div class="text">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia dese runt mollit anim est laborum sed ut perspiciatis unde omnis iste natus sit error voluptatem accusantium dolor emque laudatium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</div>
							<div class="author-info">
								<figure class="author-thumb"><img src="images/resource/1.png" alt=""/></figure>
								<h5>Victoria Simpson</h5>
								<div class="title">Co Founder</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

				<section class="subscribe-section">
					<div class="container">
			<div class="subscribe-content">
				<div class="row">
					<div class="col-lg-6 col-md-6 col-sm-12 column">
						<div class="subscribe-title">Subscribe To Our Newsletter</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 column">
						<div class="subscribe-form">
							<form action="#" method="post">
								<div class="form-group">
									<input type="email" name="email" placeholder="Your Email" required=""/>
									<button type="submit" class="theme-btn">Subscribe</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
				<button class="scroll-top scroll-to-target" data-target="html">
    <span class="fa fa-long-arrow-up"></span>
</button>


      </StaticLayout>

    )
  }
}

export default Index;
