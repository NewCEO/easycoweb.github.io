import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
import AllFarms from "../components/allFarmsHomePage";
import status from "../config/status";
class shop extends React.Component{

    static async getInitialProps({ req }) {
      return { };
    }

    constructor(props){
    	super(props);
    	this.handleLoadedDom = this.handleLoadedDom.bind(this);
	}

	handleLoadedDom(){
		this.initCounter();
		this.initWowSlider();
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoadedDom);

	}


	initWowSlider(){

		if($('.wow').length){
			var wow = new WOW({
				mobile:       true
			});
			wow.init();
		}

		//three-column-carousel
		if ($('.three-column-carousel').length) {
			$('.three-column-carousel').owlCarousel({
				loop:false,
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
				loop:false,
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
				loop:false,
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
				loop:false,
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
				loop:false,
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
				loop:false,
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

	initCounter(){
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
          <StaticLayout>

<section class="page-title centred" style={{"backgroundImage": "url(images/main-slider/slider-Image-1.jpg)"}}>
		<div class="container">
			<div class="content-box">
				<div class="title">Our Ranch</div>
				<ul class="bread-crumb">
					<li><a href="index-2.html">Home</a></li>
					<li>Our Ranch</li>
				</ul>
			</div>
		</div>
	</section>
	
	<section class="cause-section cause-style-two causes-grid overlay-style-one sec-pad-2">
		<div class="container">
			<div class="row">
				<AllFarms loadSlider={this.handleLoadedDom} url={`farms/all?paginate=true&page=1&status[eql]=${status.active}&status[eql]=${status.soldout}`}/>

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
        
    </StaticLayout>

        )
    }
}

export default shop;