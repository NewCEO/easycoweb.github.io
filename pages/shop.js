import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
class shop extends React.Component{

    static async getInitialProps({ req }) {
      return { };
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
				<div class="col-lg-4 col-md-6 col-sm-12 cause-column">
					<div class="single-cause-content inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<figure class="image-box">
							<img src="images/resource/cause-1.jpg" alt=""/>
							
							<div class="overlay-box">
								<div class="overlay-inner">
									<div class="content">
										<a href="causes-details.html" class="link"><i class="icon fa fa-link"></i></a>
									</div>
								</div>
							</div>
						</figure>
						<div class="lower-content">
							<h4><a href="causes-details.html">KURI CATTLE FARM</a><i class="fa fa-heart right"></i></h4>
							<div class="text">Excepteur sint occaecat cupidatat non proident sunt.</div>
							
								<div class="progress-box">
									<div class="progress" data-value="60">
										<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
											<div class="value-holder"><span class="value"></span>%</div>
										</div>
									</div>
								</div>

							<ul class="price clearfix">
								<li>Price: <span><h3>₦10,000</h3></span></li>
								<li>Return: <span><h2>30%</h2></span></li>
							</ul>
							<ul class="price clearfix pos">
								<li>Duration:<span><h3>3 months</h3></span></li>
							</ul>
							<br/>
							<br/>
							<br/>
							<br/>
							<div class="donate-box text-center"><button class="donate-box-btn theme-btn-two">Invest Now</button></div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 cause-column">
					<div class="single-cause-content inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2000ms">
						<figure class="image-box">
							<img src="images/resource/cause-2.jpg" alt=""/>
						
							<div class="overlay-box">
								<div class="overlay-inner">
									<div class="content">
										<a href="causes-details.html" class="link"><i class="icon fa fa-link"></i></a>
									</div>
								</div>
							</div>
						</figure>
						<div class="lower-content">
							<h4><a href="causes-details.html">Raise fund for our Education</a></h4>
							<div class="text">Excepteur sint occaecat cupidatat non proident sunt.</div>
							<div class="progress-box">
								<div class="progress" data-value="75">
									<div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
										<div class="value-holder"><span class="value"></span>%</div>
									</div>
								</div>
							</div>
							<ul class="price clearfix">
								<li>Raised: <span>$2,000</span></li>
								<li>Goal: <span>$4,000</span></li>
							</ul>
							<div class="donate-box"><button class="donate-box-btn theme-btn-two">Donate Now</button></div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 cause-column">
					<div class="single-cause-content inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2500ms">
						<figure class="image-box">
							<img src="images/resource/cause-3.jpg" alt=""/>
							
							<div class="overlay-box">
								<div class="overlay-inner">
									<div class="content">
										<a href="causes-details.html" class="link"><i class="icon fa fa-link"></i></a>
									</div>
								</div>
							</div>
						</figure>
						<div class="lower-content">
							<h4><a href="causes-details.html">Feed For Hungry Child</a></h4>
							<div class="text">Excepteur sint occaecat cupidatat non proident sunt.</div>
							<div class="progress-box">
								<div class="progress" data-value="85">
									<div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
										<div class="value-holder"><span class="value"></span>%</div>
									</div>
								</div>
							</div>
							<ul class="price clearfix">
								<li>Raised: <span>$1,000</span></li>
								<li>Goal: <span>$3,000</span></li>
							</ul>
							<div class="donate-box"><button class="donate-box-btn theme-btn-two">Donate Now</button></div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 cause-column">
					<div class="single-cause-content inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="3000ms">
						<figure class="image-box">
							<img src="images/resource/cause-8.jpg" alt=""/>
							
							<div class="overlay-box">
								<div class="overlay-inner">
									<div class="content">
										<a href="causes-details.html" class="link"><i class="icon fa fa-link"></i></a>
									</div>
								</div>
							</div>
						</figure>
						<div class="lower-content">
							<h4><a href="causes-details.html">Water Helps Poor</a></h4>
							<div class="text">Excepteur sint occaecat cupidatat non proident sunt.</div>
							<div class="progress-box">
								<div class="progress" data-value="80">
									<div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
										<div class="value-holder"><span class="value"></span>%</div>
									</div>
								</div>
							</div>
							<ul class="price clearfix">
								<li>Raised: <span>$5,000</span></li>
								<li>Goal: <span>$6,000</span></li>
							</ul>
							<div class="donate-box"><button class="donate-box-btn theme-btn-two">Donate Now</button></div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 cause-column">
					<div class="single-cause-content inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="3500ms">
						<figure class="image-box">
							<img src="images/resource/cause-9.jpg" alt=""/>
						
							<div class="overlay-box">
								<div class="overlay-inner">
									<div class="content">
										<a href="causes-details.html" class="link"><i class="icon fa fa-link"></i></a>
									</div>
								</div>
							</div>
						</figure>
						<div class="lower-content">
							<h4><a href="causes-details.html">Children’s Health Fund</a></h4>
							<div class="text">Excepteur sint occaecat cupidatat non proident sunt.</div>
							<div class="progress-box">
								<div class="progress" data-value="90">
									<div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
										<div class="value-holder"><span class="value"></span>%</div>
									</div>
								</div>
							</div>
							<ul class="price clearfix">
								<li>Raised: <span>$4,000</span></li>
								<li>Goal: <span>$6,000</span></li>
							</ul>
							<div class="donate-box"><button class="donate-box-btn theme-btn-two">Donate Now</button></div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 cause-column">
					<div class="single-cause-content inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="4000ms">
						<figure class="image-box">
							<img src="images/resource/cause-10.jpg" alt=""/>
						
							<div class="overlay-box">
								<div class="overlay-inner">
									<div class="content">
										<a href="causes-details.html" class="link"><i class="icon fa fa-link"></i></a>
									</div>
								</div>
							</div>
						</figure>
						<div class="lower-content">
							<h4><a href="causes-details.html">Charity For Animal</a></h4>
							<div class="text">Excepteur sint occaecat cupidatat non proident sunt.</div>
							<div class="progress-box">
								<div class="progress" data-value="70">
									<div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
										<div class="value-holder"><span class="value"></span>%</div>
									</div>
								</div>
							</div>
							<ul class="price clearfix">
								<li>Raised: <span>$8,000</span></li>
								<li>Goal: <span>$9,000</span></li>
							</ul>
							<div class="donate-box"><button class="donate-box-btn theme-btn-two">Donate Now</button></div>
						</div>
					</div>
				</div>
			</div>
			<ul class="pagination centred clearfix">
				<li><a href="#"><i class="fa fa-angle-left"></i></a></li>
				<li><a href="#" class="active">1</a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
				<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
			</ul>
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