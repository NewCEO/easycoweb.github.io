import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';

class AboutUs extends React.Component{

  static async getInitialProps({ req }) {
    return { };
  }

  render() {
    return(
      <StaticLayout>

<section class="page-title centred" style={{"background-image": "url(images/background/page-title.jpg);"}}>
		<div class="container">
			<div class="content-box">
				<div class="title">About Us</div>
				<ul class="bread-crumb">
					<li><a href="index-2.html">Home</a></li>
					<li>About</li>
				</ul>
			</div>
		</div>
	</section>
	
	<section class="about-style-two sec-pad">
		<div class="container">
			<div class="sec-title centred">We give you <span>a chance to<br />Live  A Wealthier Live</span></div>
			<div class="row">
				<div class="col-lg-6 col-md-12 col-sm-12 about-column">
					<div class="about-content">
						<div class="top-content">
							<div class="title">Raise Your Helping Hand</div>
							<div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiu smod tempor incidunt enim ad minim veniam quis nostrud exerc tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
							<ul class="list">
								<li>Convallis ligula ligula gravida tristique.</li>
								<li>Lobortis massa fringilla odio.</li>
							</ul>
							<div class="link"><a href="#" class="theme-btn">Get Started</a></div>
						</div>
						<div class="lower-content">
							<div class="row">
								<div class="col-lg-4 col-md-6 col-sm-12 column">
									<div class="single-item">
										<div class="number">01</div>
										<h4><a href="#">Our Story</a></h4>
										<div class="text">Retro tattooed tousled, disrupt portland synth slow-carb</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 col-sm-12 column">
									<div class="single-item">
										<div class="number">02</div>
										<h4><a href="#">Our Mission</a></h4>
										<div class="text">Retro tattooed tousled, disrupt portland synth slow-carb</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 col-sm-12 column">
									<div class="single-item">
										<div class="number">03</div>
										<h4><a href="#">Our Vision</a></h4>
										<div class="text">Retro tattooed tousled, disrupt portland synth slow-carb</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6 col-md-12 col-sm-12 img-column">
					<figure class="img-box"><img src="images/resource/2.jpg" alt=""/></figure>
				</div>
			</div>
		</div>
	</section>
	
	<section class="counter-style-two counter-style-three overlay-bg" style={{"background-image": "url(images/background/counter.jpg);"}}>
		<div class="container">
			<div class="row clearfix">
				<div class="col-lg-4 col-md-6 col-sm-12 counter-column">
					<div class="single-item">
						<article class="column wow fadeIn" data-wow-duration="0ms">
							<div class="count-outer"><span class="count-text" data-speed="1500" data-stop="12500">0</span></div>
						</article>
						<div class="text">Farms Invested</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 counter-column">
					<div class="single-item">
						<article class="column wow fadeIn" data-wow-duration="0ms">
							<div class="count-outer"><span class="count-text" data-speed="1500" data-stop="640">0</span></div>
						</article>
						<div class="text">Investors</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 counter-column">
					<div class="single-item">
						<article class="column wow fadeIn" data-wow-duration="0ms">
							<div class="count-outer"><span class="count-text" data-speed="1500" data-stop="320">0</span></div>
						</article>
						<div class="text">Completely Funded Farms</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section class="team-section overlay-style-two sec-pad centred">
		<div class="container">
			<div class="sec-title centred">Our Team</div>
			<div class="title-text centred">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmo</div>
			<div class="team-content">
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-12 team-column">
						<div class="single-team-content single-item">
							<div class="image img-box">
								<figure><img src="images/resource/team-1.jpg" alt=""/></figure>
								<div class="overlay">
									<a class="link-btn" href="#">
                                        <i class="fa fa-link"></i>
                                    </a>
								</div>
							</div>
							<div class="lower-content">
								<h4><a href="#">Heather Matthews</a></h4>
								<div class="title">Volunteer</div>
								<div class="text">Excepteur sint occaecat cupidatat non proident sunt.in culpa. deserunt mollit.</div>
								<ul class="social">
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-vimeo"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12 team-column">
						<div class="single-team-content single-item">
							<div class="image img-box">
								<figure><img src="images/resource/team-2.jpg" alt=""/></figure>
								<div class="overlay">
									<a class="link-btn" href="#">
                                        <i class="fa fa-link"></i>
                                    </a>
								</div>
							</div>
							<div class="lower-content">
								<h4><a href="#">Lauren Davis</a></h4>
								<div class="title">Volunteer</div>
								<div class="text">Excepteur sint occaecat cupidatat non proident sunt.in culpa. deserunt mollit.</div>
								<ul class="social">
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-vimeo"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12 team-column">
						<div class="single-team-content single-item">
							<div class="image img-box">
								<figure><img src="images/resource/team-3.jpg" alt=""/></figure>
								<div class="overlay">
									<a class="link-btn" href="#">
                                        <i class="fa fa-link"></i>
                                    </a>
								</div>
							</div>
							<div class="lower-content">
								<h4><a href="#">Cameron Rogers</a></h4>
								<div class="title">Volunteer</div>
								<div class="text">Excepteur sint occaecat cupidatat non proident sunt.in culpa. deserunt mollit.</div>
								<ul class="social">
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-vimeo"></i></a></li>
								</ul>
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
      </StaticLayout>
    )
  }
}

export default AboutUs;
