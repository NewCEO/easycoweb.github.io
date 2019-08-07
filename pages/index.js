import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';

class Index extends React.Component{

  static async getInitialProps({ req }) {
    return { };
  }

  componentDidMount(){
	var RESPONSIVEUI = {};

	(function($) {
		$(document).ready(function() {
			$(".moduletable#module_211>i.fa-user").click(function() {
				$(".moduletable#module_211").toggleClass("shown")
			})
		})
	})(jQuery);
	if (typeof acymailing == 'undefined') {
		var acymailing = Array();
	}
	acymailing['NAMECAPTION'] = 'Name';
	acymailing['NAME_MISSING'] = 'Please enter your name';
	acymailing['EMAILCAPTION'] = 'Enter Your Email';
	acymailing['VALID_EMAIL'] = 'Please enter a valid e-mail address';
	acymailing['ACCEPT_TERMS'] = 'Please check the Terms and Conditions';
	acymailing['CAPTCHA_MISSING'] = 'The captcha is invalid, please try again';
	acymailing['NO_LIST_SELECTED'] = 'Please select the lists you want to subscribe to';
	// ResponsiveTabs.js | Version:1.10 | Author:Pete Love | www.petelove.com
	var RESPONSIVEUI = {};
	(function ($) {
	RESPONSIVEUI.responsiveTabs = function () {
		var $tabSets = $(".responsive-tabs");
		if (!$tabSets.hasClass("responsive-tabs--enabled")) {
			$tabSets.addClass("responsive-tabs--enabled");
			var tablistcount = 1;
			$tabSets.each(function () {
				var $tabs = $(this);
				$tabs.children(":header").addClass("responsive-tabs__heading");
				$tabs.children("div").addClass("responsive-tabs__panel");
				var $activePanel = $tabs.find(".responsive-tabs__panel--active");
				if (!$activePanel.length) {
					$activePanel = $tabs.find(".responsive-tabs__panel").first().addClass("responsive-tabs__panel--active")
				}
				$tabs.find(".responsive-tabs__panel").not(".responsive-tabs__panel--active").hide().attr("aria-hidden", "true");
				$activePanel.attr("aria-hidden", "false");
				$activePanel.addClass("responsive-tabs__panel--closed-accordion-only");
				var $tabsWrapper = $("<div/>", {
					"class": "responsive-tabs-wrapper"
				});
				$tabs.wrap($tabsWrapper);
				var highestHeight = 0;
				$tabs.find(".responsive-tabs__panel").each(function () {
					var tabHeight = $(this).height();
					if (tabHeight > highestHeight) {
						highestHeight = tabHeight
					}
				});
				var $tabList = $("<ul/>", {
					"class": "responsive-tabs__list",
					role: "tablist"
				});
				var tabcount = 1;
				$tabs.find(".responsive-tabs__heading").each(function () {
					var $tabHeading = $(this);
					var $tabPanel = $(this).next();
					$tabHeading.attr("tabindex", 0);
					var $tabListItem = $("<li/>", {
						"class": "responsive-tabs__list__item",
						id: "tablist" + tablistcount + "-tab" + tabcount,
						"aria-controls": "tablist" + tablistcount + "-panel" + tabcount,
						role: "tab",
						tabindex: 0,
						text: $tabHeading.text(),
						keydown: function (objEvent) {
							if (objEvent.keyCode === 13) {
								$tabListItem.click()
							}
						},
						click: function () {
							$tabsWrapper.css("height", highestHeight);
							$tabs.find(".responsive-tabs__panel--closed-accordion-only").removeClass("responsive-tabs__panel--closed-accordion-only");
							$tabs.find(".responsive-tabs__panel--active").toggle().removeClass("responsive-tabs__panel--active").attr("aria-hidden", "true").prev().removeClass("responsive-tabs__heading--active");
							$tabPanel.toggle().addClass("responsive-tabs__panel--active").attr("aria-hidden", "false");
							$tabHeading.addClass("responsive-tabs__heading--active");
							$tabList.find(".responsive-tabs__list__item--active").removeClass("responsive-tabs__list__item--active");
							$tabListItem.addClass("responsive-tabs__list__item--active");
							$tabsWrapper.css("height", "auto")
						}
					});
					$tabPanel.attr({
						role: "tabpanel",
						"aria-labelledby": $tabListItem.attr("id"),
						id: "tablist" + tablistcount + "-panel" + tabcount
					});
					if ($tabPanel.hasClass("responsive-tabs__panel--active")) {
						$tabListItem.addClass("responsive-tabs__list__item--active")
					}
					$tabList.append($tabListItem);
					$tabHeading.keydown(function (objEvent) {
						if (objEvent.keyCode === 13) {
							$tabHeading.click()
						}
					});
					$tabHeading.click(function () {
						$tabs.find(".responsive-tabs__panel--closed-accordion-only").removeClass("responsive-tabs__panel--closed-accordion-only");
						if (!$tabHeading.hasClass("responsive-tabs__heading--active")) {
							var oldActivePos, $activeHeading = $tabs.find(".responsive-tabs__heading--active");
							if ($activeHeading.length) {
								oldActivePos = $activeHeading.offset().top
							}
							$tabs.find(".responsive-tabs__panel--active").slideToggle().removeClass("responsive-tabs__panel--active").prev().removeClass("responsive-tabs__heading--active");
							$tabs.find(".responsive-tabs__panel").hide().attr("aria-hidden", "true");
							$tabPanel.slideToggle().addClass("responsive-tabs__panel--active").attr("aria-hidden", "false");
							$tabHeading.addClass("responsive-tabs__heading--active");
							var $currentActive = $tabs.find(".responsive-tabs__list__item--active");
							$currentActive.removeClass("responsive-tabs__list__item--active");
							var panelId = $tabPanel.attr("id");
							var tabId = panelId.replace("panel", "tab");
							$("#" + tabId).addClass("responsive-tabs__list__item--active");
							var tabsPos = $tabs.offset().top;
							var newActivePos = ($tabHeading.offset().top) - 15;
							if (oldActivePos < newActivePos) {
								$("html, body").animate({
									scrollTop: tabsPos
								}, 0).animate({
									scrollTop: newActivePos
								}, 400)
							}
						} else {
							$tabPanel.removeClass("responsive-tabs__panel--active").slideToggle(function () {
								$(this).addClass("responsive-tabs__panel--closed-accordion-only")
							});
							$tabHeading.removeClass("responsive-tabs__heading--active")
						}
					});
					tabcount++
				});
				$tabs.prepend($tabList);
				tablistcount++
			})
		}
	}
	})(jQuery);

	jQuery(document).ready(function() {
		RESPONSIVEUI.responsiveTabs();
	});
  }

  render() {
    return(
      <StaticLayout>

		<div id="wrapper">
			<div class="wrapper-inner">
			<div class="headerContent overlay">
			
				<div class="topContent">
					
					<div id="header" class="stuck_position stuck" style={{"z-index": 1000, position: "relative", top: "auto", "margin-left": "0px", width: '100%', left: "0px"}}>

						<div class="container-fluid" style={{position: "relative;"}}>
							<div class="row">
								<div id="logo" class="col-sm-2 text-center">
									<a href="index.html">
										<span class="site-logo">
											<span class="item_title_part0 item_title_part_odd item_title_part_first_half item_title_part_first">
												<img src="images/2.png" class="img-responsive"></img>
											</span>
										</span>
									</a>
								</div>
								<nav class="moduletable home_menu pull-right col-sm-8" style={{position: 'inherit'}}>
									<div class="module_container">
										<div class="icemegamenu">
											<ul id="icemegamenu">
												<li id="iceMenu_101" class="iceMenuLiLevel_1 current active fullwidth ">
													<a href="index.html" class="iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">Home</span>
													</a>
												</li>
												<li id="iceMenu_134" class="iceMenuLiLevel_1">
													<a href="about.html" class=" iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">About us</span>
													</a>
												</li>
												<li id="iceMenu_631" class="iceMenuLiLevel_1 ">
													<a href="shop.html" class=" iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">Shop</span>
													</a>
												</li>
												<li id="iceMenu_203" class="iceMenuLiLevel_1 gallery">
													<a href="gallery.html" class=" iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">Gallery</span>
													</a>
												</li>
												<li id="iceMenu_142" class="iceMenuLiLevel_1 ">
													<a href="contacts.html" class=" iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">Contacts</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</nav>
								<nav class="moduletable home_menu pull-right col" style={{position: 'inherit'}}>
									<div class="module_container">
										<div class="icemegamenu">
											<ul class="pull-right" id="icemegamenu">
												<li id="iceMenu_142" class="iceMenuLiLevel_1 ">
													<a href="user-registration.html" class=" iceMenuTitle ">
																<span class="icemega_title icemega_nosubtitle">Register</span>
															</a>
												</li>
												<li id="iceMenu_142" class="iceMenuLiLevel_1 ">
													<a href="login.html" class=" iceMenuTitle ">
																<span class="icemega_title icemega_nosubtitle">Login</span>
															</a>
												</li>
											</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
					<div id="fixed_cloned" class="fixed_cloned" style={{height: '110px', display: 'none', visibility: 'hidden', width: '1115px'}}>

						<div class="container">
							<div class="row">
								<div id="logo" class="col-sm-2">
									<a href="index.html">
										<span class="site-logo"><span class="item_title_part0 item_title_part_odd item_title_part_first_half item_title_part_first">EasyCowFunding</span> </span>
									</a>
								</div>
								<nav class="moduletable home_menu  col-sm-8">
									<div class="module_container">
										<div class="icemegamenu">
											<ul id="icemegamenu">
												<li id="iceMenu_101" class="iceMenuLiLevel_1">
													<a href="index.html" class="iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">Home</span>
													</a>
												</li>
												<li id="iceMenu_134" class="iceMenuLiLevel_1 current active fullwidth ">
													<a href="about.html" class=" iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">About us</span>
													</a>
												</li>
												<li id="iceMenu_631" class="iceMenuLiLevel_1 ">
													<a href="shop.html" class=" iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">Shop</span>
													</a>
												</li>
												<li id="iceMenu_203" class="iceMenuLiLevel_1 gallery">
													<a href="gallery.html" class=" iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">Gallery</span>
													</a>
												</li>
												<li id="iceMenu_142" class="iceMenuLiLevel_1 ">
													<a href="contacts.html" class=" iceMenuTitle ">
														<span class="icemega_title icemega_nosubtitle">Contacts</span>
													</a>
												</li>
											</ul>
											<ul class="pull-right">
												<li id="iceMenu_142" class="iceMenuLiLevel_1 ">
													<a href="user-registration.html" class=" iceMenuTitle ">
																<span class="icemega_title icemega_nosubtitle">Register</span>
															</a>
												</li>
												<li id="iceMenu_142" class="iceMenuLiLevel_1 ">
													<a href="login.html" class=" iceMenuTitle ">
																<span class="icemega_title icemega_nosubtitle">Login</span>
															</a>
												</li>
											</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>

				<div id="showcase" class ="stuck_position">
					<div class="moduletable">
						<div class="module_container">
							<div class="swiper-container swiper-slider" data-min-height="500px" data-height="34.24390243902439%" data-autoplay="false" data-loop="true" data-slide-effect="fade">
								<div class="swiper-wrapper">

									<div class="swiper-slide " data-slide-bg="/joomla_prod-8983_v1/images/slider/slide-.jpg">
										<div class="swiper-slide-caption" data-caption-animate="fadeIn" data-caption-delay="200">
											<div class="camera_caption ">




												<div class="container undernav">
													<div class="row">
														<div class="moduletable col-sm-12 text-center">
															<div class="module_container">
																<header class='page_header'>
																	<h1 class="moduleTitle title"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">FUNDING</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">ONE</span> <span class="item_title_part_2 item_title_part_odd item_title_part_first_half">FARM</span> <span class="item_title_part_3 item_title_part_even item_title_part_first_half"></span> <span class="item_title_part_4 item_title_part_odd item_title_part_second_half"></span> <span class="item_title_part_5 item_title_part_even item_title_part_second_half">FUNDS</span> <span class="item_title_part_6 item_title_part_odd item_title_part_second_half">MULTIPLE</span> <span class="item_title_part_7 item_title_part_even item_title_part_second_half item_title_part_last">LIFES</span></h1>
																	<button class="btn btn-primary invest-now"><span>INVEST NOW</span></button>
																</header>
																<div class="mod-article-single mod-article-single__" id="module_244">
																	<div class="item__module" id="item_158">

													

																	</div>
																</div>
															</div>
														</div>
														<div class="moduletable   col-sm-12">
															<div class="module_container">
																<header class='page_header' id="whyus">
																	<h2 class="moduleTitle "><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">How</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">It</span> <span class="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Works</span></h2>
																</header>
																<div class="mod-newsflash-adv mod-newsflash-adv__ cols-3" id="module_245">
																	<div class="row">
																		<article class="col-sm-3 item item_num0 item__module  " id="item_159">


																	
																			<figure class="item_img img-intro img-intro__left">
																				<img src="images/slide-icon1.png" alt=""></img>
																			</figure>

																			<div class="item_content">

																			
																				<h4 class="item_title item_title__"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Create </span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">an</span> <span class="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Account</span></h4>
																				
																				<div class="item_introtext">
																					<p>Create an account,it's fast and easy.</p>
																				</div>


																			
																			</div>
																			<div class="clearfix"></div>
																		</article>
																		<article class="col-sm-3 item item_num1 item__module  " id="item_160">

																			
																			<figure class="item_img img-intro img-intro__left">
																				<img src="images/slide-icon2.png" alt=""></img>
																			</figure>

																			<div class="item_content">

																				
																				<h4 class="item_title item_title__"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Fund</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">a</span> <span class="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Farm</span></h4>
																		
																				<div class="item_introtext">
																					<p>fund a farm from our ranch. </p>
																				</div>


																				
																			</div>
																			<div class="clearfix"></div>
																		</article>

																		<article class="col-sm-3 item item_num1 item__module  " id="item_160">

																			
																			<figure class="item_img img-intro img-intro__left">
																				<img src="images/slide-icon2.png" alt=""></img>
																			</figure>

																			<div class="item_content">

																			
																				<h4 class="item_title item_title__"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Get</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half"></span> <span class="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Updates</span></h4>
																			
																				<div class="item_introtext">
																					<p>Track your investments through our user assigned dashboard.</p>
																				</div>


																				
																			</div>
																			<div class="clearfix"></div>
																		</article>

																		<article class="col-sm-3 item item_num2 item__module  lastItem" id="item_161">

																		
																			<figure class="item_img img-intro img-intro__left">
																				<img src="images/slide-icon3.png" alt=""></img>
																			</figure>

																			<div class="item_content">

																				
																				<h4 class="item_title item_title__"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Get</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">Returns</span> <span class="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last"></span></h4>
																			
																				<div class="item_introtext">
																					<p>get profit returns promptly.</p>
																				</div>


																	
																			</div>
																			<div class="clearfix"></div>
																		</article>
																	</div>
																	<div class="clearfix"></div>

																</div>
															</div>
														</div>
													</div>
												</div>
											

											</div>
										</div>
									</div>
								</div>						
							</div>
						</div>
					</div>
				</div>
			</div>


			<div id="feature" class="stuck_position">
				<div class="container">
					<div class="row">
						<div class="moduletable center  col-sm-8 col-sm-offset-2">
							<div class="module_container">
								<header class='page_header'>
									<h6 class="moduleTitle "><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Our</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">Products</span> <span class="item_title_part_2 item_title_part_odd item_title_part_second_half">&</span> <span class="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">Services</span></h6>
								</header>
								<div class="mod-article-single mod-article-single__center" id="module_242">
									<div class="item__module" id="item_154">
									
										<h1 class="item-title"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">We</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">Are</span> <span class="item_title_part_2 item_title_part_odd item_title_part_first_half">Innovators</span> <span class="item_title_part_3 item_title_part_even item_title_part_second_half">in</span> <span class="item_title_part_4 item_title_part_odd item_title_part_second_half">Agricultural</span> <span class="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">Business</span></h1>

									
										<div class="item_introtext">
											<p>Our goal is to bring healthy organic food to every house thanks to the combination of new technologies and our expert team.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="moduletable services  col-sm-12">
							<div class="module_container">
								<div class="mod-newsflash-adv mod-newsflash-adv__services cols-3" id="module_243">
									<div class="row">
										<article class="col-sm-4 item item_num0 item__module  " id="item_155">

											
											<figure class="item_img img-intro img-intro__none">
												<img src="images/page1-img1.jpg" alt=""></img>
											</figure>

											<div class="item_content">

											
												<h4 class="item_title item_title__services"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Our</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Mission</span></h4>

												<div class="item_introtext">
													<p>Our mission is profitable growth through superior customer service, innovation, quality and commitment.</p>
												</div>


											
											</div>
											<div class="clearfix"></div>
										</article>
										<article class="col-sm-4 item item_num1 item__module  " id="item_156">

											
											<figure class="item_img img-intro img-intro__none">
												<img src="images/page1-img2.jpg" alt=""></img>
											</figure>

											<div class="item_content">

												
												<h4 class="item_title item_title__services"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Agricultural</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Services</span></h4>
												
												<div class="item_introtext">
													<p>We provide inspection, testing, and risk management services across the whole agricultural supply chain.</p>
												</div>


												
											</div>
											<div class="clearfix"></div>
										</article>
										<article class="col-sm-4 item item_num2 item__module  lastItem" id="item_157">

								
											<figure class="item_img img-intro img-intro__none">
												<img src="images/page1-img3.jpg" alt=""></img>
											</figure>

											<div class="item_content">

										
												<h4 class="item_title item_title__services"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Future</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Breeding</span></h4>
												
												<div class="item_introtext">
													<p>We commenced a two-year program to select the best genetics from our composite studs to form an elite composite stud in future.</p>
												</div>



											</div>
										</article>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="parallax2">
			</div>

			<div class="moduletable parallax1">
				<div class="module_container">
					<div class="parallax__parallax1" data-url="images/elements_img2.jpg" data-speed="0.8" data-direction="normal" data-mobile="true" data-blur="false">
						<div class="row-container">
							<div class="container">
								<div class="row">
									<div class="moduletable center  col-sm-12">
										<div class="module_container">
											<header class='page_header'>
												<h2 class="moduleTitle "><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Why</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">Choose</span> <span class="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Us</span></h2>
											</header>
											<div class="mod-newsflash-adv mod-newsflash-adv__center cols-4" id="module_241">
												<div class="row">
													<article class="col-sm-3 item item_num0 item__module  " id="item_150">

														
														<figure class="item_img img-intro img-intro__none">
															<img src="images/icon1.png" alt=""></img>
														</figure>

														<div class="item_content">

													
															<h4 class="item_title item_title__center"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Seasoned</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Team</span></h4>
															
															<div class="item_introtext">
																<p>Our experts spent last few years excelling their skills.</p>
															</div>


															
														</div>
														<div class="clearfix"></div>
													</article>
													<article class="col-sm-3 item item_num1 item__module  " id="item_151">

														
														<figure class="item_img img-intro img-intro__none">
															<img src="images/icon2.png" alt=""></img>
														</figure>

														<div class="item_content">

														
															<h4 class="item_title item_title__center"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Smart</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Logistics</span></h4>
															
															<div class="item_introtext">
																<p>Delivering our produce to your place is an easy task for our company!</p>
															</div>


														
														</div>
														<div class="clearfix"></div>
													</article>
													<article class="col-sm-3 item item_num2 item__module  " id="item_152">

														
														<figure class="item_img img-intro img-intro__none">
															<img src="images/icon3.png" alt=""></img>
														</figure>

														<div class="item_content">

														
															<h4 class="item_title item_title__center"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Quality</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Matters</span></h4>
														
															<div class="item_introtext">
																<p>We’re determined to keep up the quality of our farming products.</p>
															</div>


														
														</div>
														<div class="clearfix"></div>
													</article>
													<article class="col-sm-3 item item_num3 item__module  lastItem" id="item_153">

														{/* <!-- Intro Image --> */}
														<figure class="item_img img-intro img-intro__none">
															<img src="images/icon4.png" alt=""/>
														</figure>

														<div class="item_content">

															{/* <!-- Item title --> */}
															<h4 class="item_title item_title__center"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Products</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Range</span></h4>
															{/* <!-- Introtext --> */}
															<div class="item_introtext">
																<p>We are growing a multitude of different vegetables, fruits and grains.</p>
															</div>


															{/* <!-- Read More link --> */}
														</div>
														<div class="clearfix"></div>
													</article>
												</div>
												<div class="clearfix"></div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="parallaxx">
			</div>

		</div>
			{/* <!-- Main Content row --> */}
			<div id="content">
			<div class="container">
				<div class="row">
					<div class="content-inner">
						{/* <!-- Left sidebar --> */}

						<div id="component" class="col-sm-12">
							<main role="main">
								{/* <!-- content-top --> */}
								<div id="content-top">
									<div class="row">
										<div class="moduletable   col-sm-12">
											<div class="module_container">
												<header class='page_header'>
													<h2 class="moduleTitle center title"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Our</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Shop</span></h2>
												</header>
												<div id="responsiveTabsDemo" class="responsive-tabs">
													<h2 class="responsive-tabs__heading--active"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">OPEN</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">FARMS</span></h2>
													<div id="tab-1" class="comvirtuemartmod vmgroup">
														<div class="vmproduct productdetails tabs">



															<div class="row prod">
																<div id="producthorizon3" class="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
																	<div id="producthorizont" class="prod-box spacer product-container">

																		<div class="vm-product-media-container">
																			<img src="images/virtuemart/product/resized/image_product_2_768x768.jpg" alt="image_product_13.png" class="browseProductImage" />
																		</div>
																		<div class="fleft-box">
																			<h5 class="item_name product_title"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">Kuri Cattle</span></h5>
																			<div class="vm3pr vm3pr-2">
																				<div class="product-price " id="productPrice3">
																					<div class="PricebasePrice vm-display vm-price-value"><span class="PricebasePrice">₦60000</span></div>
																				</div>
																				<span style={{color: '#77b112'}}>
																					<h4 style={{color: '#77b112'}}> 20% in 6 months</h4>
																				</span>
																				<div class="clear"></div>
																			</div>



																			<div class="box-btn">
																				<div class="vm3pr-0 addcart-box">
																					<div class="addtocart-area">

																						<div class="addtocart-bar">
																							<span class="addtocart-button">
																								<a href="./index.php/login.html"><button class="addtocart-button btn"><span>FUND THIS FARM</span></button>
																							</a>

																							</span>
																						</div>
																					</div>
																				</div>


																				<div style={{display:'block'}} class="wishlist list_wishlists3">
																					<a class="add_wishlist btn hasTooltips " title="Watch this farm" onclick="TmboxAddToWishlist('3');">
																						<i class="fa fa-eye"></i>
																						<span>Watch this Farm</span>
																					</a>
																				</div>
																				<div style={{display:'block'}} class="wishlist list_wishlists_remove3">
																					<a class="btn remove_wishlist hasTooltips" title="Remove from Wishlist" onclick="TmboxRemoveWishlists('3');"><i class="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
																				</div>
																			</div>
																		</div>
																		<div class="clearfix"></div>
																	</div>
																</div>
															</div>

														</div>

								
													</div>
													<h2 class=""><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">CLOSED</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">FARMS</span></h2>
													<div id="tab-2" class="comvirtuemartmod vmgroup">
														<div class="vmproduct productdetails tabs">
															<div class="row prod">
																<div id="producthorizon12" class="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
																	<div id="producthorizont" class="prod-box spacer product-container">

																		<div class="vm-product-media-container">
																			<div class="sale">SOLD OUT</div><a title="King Arthur Flour Apple Cinnamon Doughnut" href="index.php/shop/house-cleaning%20products/king-arthur-flour-apple-cinnamon-doughnut-detail.html">
																				<img src="images/virtuemart/product/resized/image_product_128_768x768.jpg" alt="image_product_67.png" class="browseProductImage" /> </a>
																		</div>
																		<div class="fleft-box">
																			<h5 class="item_name product_title"><a href="index.php/shop/house-cleaning%20products/king-arthur-flour-apple-cinnamon-doughnut-detail.html"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Sahelian</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">Goat</span> <span class="item_title_part_2 item_title_part_odd item_title_part_first_half">Farm</span><span class="item_title_part_3 item_title_part_even item_title_part_second_half"></span> <span class="item_title_part_4 item_title_part_odd item_title_part_second_half"></span> <span class="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last"></span></a></h5>
																			<div class="vm3pr vm3pr-2">
																				<div class="product-price " id="productPrice12">
																					<div class="PricebasePrice vm-display vm-price-value"><span class="PricebasePrice">₦25000</span></div>
																				</div>
																				<span style = {{color:'#77b112'}}>
																					<h4 style = {{color:'#77b112'}}>20% in 6 months</h4>
																				</span>
																				<div class="clear"></div>
																			</div>
																			<div class="vm-product-stockhandle-container">
																			</div>
																			<div class="box-btn">
																				<div class="vm3pr-0 addcart-box">
																					<div class="addtocart-area">

																						<div class="addtocart-bar">
																							<span class="addtocart-button">
																								<a href="./index.php/login.html"><button class="addtocart-button btn"><span>FUND THIS FARM</span></button>
																							</a>

																							</span>
																						</div>
																					</div>
																				</div>

																				<div style={{display:'block'}} class="wishlist list_wishlists1">
																					<a class="add_wishlist btn hasTooltips " title="Watch this Farm" onclick="TmboxAddToWishlist('1');">
																						<i class="fa fa-eye"></i>
																						<span>Watch this Farm</span>
																					</a>


																				</div>
																				<div style={{display:'none'}} class="wishlist remove list_wishlists_remove1">
																					<a class="btn remove_wishlist hasTooltips" title="Remove from Wishlist" onclick="TmboxRemoveWishlists('1');"><i class="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
																				</div>
																			</div>

																		</div>
																		<div class="clearfix"></div>
																	</div>
																</div>
																

															
																
															</div>

														</div>

													
													</div>
												
                        	<h2 class=""><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">ALL</span> <span class="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">FARMS</span></h2>
													<div id="tab-3" class="comvirtuemartmod vmgroup">
														<div class="vmproduct productdetails tabs">
															<div class="row prod">
																<div id="producthorizon14" class="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
																	<div id="producthorizont" class="prod-box spacer product-container">

																		<div class="vm-product-media-container">
																			<a title="Napoleon Triple Stuffed Olives" href="index.php/shop/house-cleaning%20products/napoleon-triple-stuffed-olives-detail.html">
																				<img src="images/virtuemart/product/resized/image_product_69_768x768.jpg" alt="image_product_79.png" class="browseProductImage" /> </a>
																		</div>
																		<div class="fleft-box">
																			<h5 class="item_name product_title"><a href="index.php/shop/house-cleaning%20products/napoleon-triple-stuffed-olives-detail.html"><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Balami</span> <span class="item_title_part_1 item_title_part_even item_title_part_first_half">Sheep</span> <span class="item_title_part_2 item_title_part_odd item_title_part_second_half">Farm</span> <span class="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last"></span></a></h5>
																			<div class="vm3pr vm3pr-2">
																				<div class="product-price " id="productPrice14">
																					<div class="PricebasePrice vm-display vm-price-value"><span class="PricebasePrice">₦10000</span></div>
																				</div>
																				<span style={{color: '#77b112'}}>
																					<h4 style={{color: '#77b112'}}>20% in 6 months</h4>
																				</span>
																				<div class="clear"></div>
																			</div>


																			<div class="vm-product-stockhandle-container">
																			</div>
																			<div class="box-btn">
																				<div class="vm3pr-0 addcart-box">
																					<div class="addtocart-area">

																						<div class="addtocart-bar">
																							<span class="addtocart-button">
																								<a href="user_dashboard/skin-green.html"><button class="addtocart-button btn"><span>FUND THIS FARM</span></button>
																							</a>

																							</span>
																						</div>
																					</div>
																				</div>

																				<div style={{display:'block'}} class="wishlist list_wishlists1">
																					<a class="add_wishlist btn hasTooltips " title="Watch this Farm" onclick="TmboxAddToWishlist('1');">
																						<i class="fa fa-eye"></i>
																						<span>Watch this Farm</span>
																					</a>


																				</div>
																				<div style={{display:'block'}} class="wishlist remove list_wishlists_remove1">
																					<a class="btn remove_wishlist hasTooltips" title="Remove from Wishlist" onclick="TmboxRemoveWishlists('1');"><i class="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
																				</div>
																			</div>

																		</div>
																		<div class="clearfix"></div>
																	</div>
																</div>																																
                            	</div>
														</div>
										
													</div>
												</div>										
											</div>
										</div>
									</div>
								</div>
								<div><a href="index.php/shop.html"><button id="button" class="btn btn-primary col-sm-3"><span>View all farms</span></button></a></div>

								<div id="system-message-container">
								</div>

								<section class="page-category page-category__home">
								</section>
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
        
      </StaticLayout>
    )
  }
}

export default Index;
