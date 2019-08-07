import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
class gallery extends React.Component{

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
								<nav class="moduletable home_menu pull-right col" style={{position: "relative"}}>
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

				
				<div id="breadcrumbs" class="stuck_position">
					<div class="container">
						<div class="row">
							<div class="moduletable   col-sm-12">
								<div class="module_container"><span class="breadcrumb_title">Gallery</span>

									<ul class="breadcrumb">
										<li><a href="index.html" class="pathway">Home</a><span class="divider">&nbsp;/&nbsp;</span></li>
										<li class="active"><span>Gallery</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			
			<div id="content">
				<div class="container">
					<div class="row">
						<div class="content-inner">
						

							<div id="component" class="col-sm-12">
								<main role="main">
									<div id="system-message-container">
									</div>

									<div class="gallery">
										<header class="page_header">
											<h2><span class="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">Gallery</span></h2>
										</header>
										<div class="jg_subcat">
											<div class="row cols-3">
												<div class="col-sm-4">
													<div class="jg_imgalign_catsubs">
														<div class="jg_subcatelem_photo">
															<a href="gallery/gallery/gallery-1.html">
              <img src="images/joomgallery/thumbnails/gallery_2/gallery_1_9/gallery-image6_20171219_1290313072.jpg" class="jg_photo_custom" alt="Gallery 1" />
            </a>
														</div>
														<div class="jg_subcatelem_txt">
															<ul>
																<li>
																	<a href="gallery/gallery/gallery-1.html">Gallery 1</a>
																</li>
															</ul>
															<a title="Gallery 1" class="jg_subcatelem_txt__link" href="gallery/gallery/gallery-1.html"></a>
														</div>
													</div>
												</div>
												<div class="col-sm-4">
													<div class="jg_imgalign_catsubs">
														<div class="jg_subcatelem_photo">
															<a href="gallery/gallery/gallery-2.html">
              <img src="images/joomgallery/thumbnails/gallery_2/gallery_2_10/gallery-image9_20171219_1795293918.jpg" class="jg_photo_custom" alt="Gallery 2" />
            </a>
														</div>
														<div class="jg_subcatelem_txt">
															<ul>
																<li>
																	<a href="gallery/gallery/gallery-2.html">Gallery 2</a>
																</li>
															</ul>
															<a title="Gallery 2" class="jg_subcatelem_txt__link" href="gallery/gallery/gallery-2.html"></a>
														</div>
													</div>
												</div>
												<div class="col-sm-4">
													<div class="jg_imgalign_catsubs">
														<div class="jg_subcatelem_photo">
															<a href="gallery/gallery/gallery-3.html">
              <img src="images/joomgallery/thumbnails/gallery_2/gallery_3_11/gallery-image18_20171219_2026574498.jpg" class="jg_photo_custom" alt="Gallery 3" />
            </a>
														</div>
														<div class="jg_subcatelem_txt">
															<ul>
																<li>
																	<a href="gallery/gallery/gallery-3.html">Gallery 3</a>
																</li>
															</ul>
															<a title="Gallery 3" class="jg_subcatelem_txt__link" href="gallery/gallery/gallery-3.html"></a>
														</div>
													</div>
												</div>
												<div class="jg_clearboth"></div>
											</div>
											<div class="row cols-3">
												<div class="col-sm-4">
													<div class="jg_imgalign_catsubs">
														<div class="jg_subcatelem_photo">
															<a href="gallery/gallery/gallery-4.html">
              <img src="images/joomgallery/thumbnails/gallery_2/gallery_4_12/gallery-image24_20171219_1437318000.jpg" class="jg_photo_custom" alt="Gallery 4" />
            </a>
														</div>
														<div class="jg_subcatelem_txt">
															<ul>
																<li>
																	<a href="gallery/gallery/gallery-4.html">Gallery 4</a>
																</li>
															</ul>
															<a title="Gallery 4" class="jg_subcatelem_txt__link" href="gallery/gallery/gallery-4.html"></a>
														</div>
													</div>
												</div>
												<div class="col-sm-4">
													<div class="jg_imgalign_catsubs">
														<div class="jg_subcatelem_photo">
															<a href="gallery/gallery/gallery-5.html">
              <img src="images/joomgallery/thumbnails/gallery_2/gallery_5_13/gallery-image27_20171219_1108066716.jpg" class="jg_photo_custom" alt="Gallery 5" />
            </a>
														</div>
														<div class="jg_subcatelem_txt">
															<ul>
																<li>
																	<a href="gallery/gallery/gallery-5.html">Gallery 5</a>
																</li>
															</ul>
															<a title="Gallery 5" class="jg_subcatelem_txt__link" href="gallery/gallery/gallery-5.html"></a>
														</div>
													</div>
												</div>
												<div class="col-sm-4">
													<div class="jg_imgalign_catsubs">
														<div class="jg_subcatelem_photo">
															<a href="gallery/gallery/gallery-6.html">
              <img src="images/joomgallery/thumbnails/gallery_2/gallery_6_14/gallery-image33_20171219_1893080005.jpg" class="jg_photo_custom" alt="Gallery 6" />
            </a>
														</div>
														<div class="jg_subcatelem_txt">
															<ul>
																<li>
																	<a href="gallery/gallery/gallery-6.html">Gallery 6</a>
																</li>
															</ul>
															<a title="Gallery 6" class="jg_subcatelem_txt__link" href="gallery/gallery/gallery-6.html"></a>
														</div>
													</div>
												</div>
												<div class="jg_clearboth"></div>
											</div>
										</div>
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

export default gallery;
