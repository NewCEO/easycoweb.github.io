import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
import LogInFormComp from "../components/loginForm";

class AboutUs extends React.Component{

  static async getInitialProps({ req }) {
    return { };
  }

  render() {
    return(
      <StaticLayout>
        <div id="wrapper">
        <div class="wrapper-inner">
			<a id="fake" href='#'></a>

			<div class="headerContent">
				<div class="topContent">
                <div id="header" class="stuck_position stuck" style={{"z-index":1000, position:"relative", top: "auto" ,"margin-left":"0px" ,width:"100%" ,left:"0px"}}>

						<div class="container-fluid" style={{position: "relative"}}>
							<div class="row">
								<div id="logo" class="col-sm-2 text-center">
									<a href="index.html">
										<span class="site-logo">
											<span class="item_title_part0 item_title_part_odd item_title_part_first_half item_title_part_first">
												<img src="images/2.png" class="img-responsive"/>
											</span>
										</span>
									</a>
								</div>
								<nav class="moduletable home_menu pull-right col-sm-8" style={{position: "relative"}}>
									<div class="module_container">
										<div class="icemegamenu">
											<ul id="icemegamenu">
												<li id="iceMenu_101" class="iceMenuLiLevel_1  ">
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
								<nav class="moduletable home_menu pull-right col" style={{position: "relative"}}>
									<div class="module_container">
										<div class="icemegamenu">
											<ul class="pull-right" id="icemegamenu">
												<li id="iceMenu_142" class="iceMenuLiLevel_1 ">
													<a href="user-registration.html" class=" iceMenuTitle ">
																<span class="icemega_title icemega_nosubtitle">Register</span>
															</a>
												</li>
												<li id="iceMenu_142" class="iceMenuLiLevel_1 current active fullwidth">
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
					<div id="fixed_cloned" class="fixed_cloned" style={{height: "110px", display: "none" ,visibility: "hidden", width: "1115px"}}>

						<div class="container">
							<div class="row">



								<div id="logo" class="col-sm-2">
									<a href="./index.html">
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
												<li id="iceMenu_203" class="iceMenuLiLevel_1 gallery current active fullwidth">
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

              <div id="breadcrumbs" className="stuck_position">
                <div className="container">
                  <div className="row">
                    <div className="moduletable   col-sm-12">
                      <div className="module_container"><span className="breadcrumb_title">Login</span>

                        <ul className="breadcrumb">
                          <li><a href="../index-2.html" className="pathway">Home</a><span
                            className="divider">&nbsp;/&nbsp;</span></li>
                          <li className="active"><span>User Login</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div id="content">
              <div className="container">
                <div className="row">
                  <div className="content-inner">

                    <div id="component" className="col-sm-12">
                      <main role="main">
                        <div id="system-message-container">
                        </div>

                        <div className="page-registration page-registration__">
                          <div className="page_header">
                            <h2 id="head"><span
                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">User Login</span>

                            </h2>
                          </div>

                          <LogInFormComp />

                        </div>
                      </main>

                    </div>
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

export default AboutUs;
