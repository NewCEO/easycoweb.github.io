import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';

class Index extends React.Component{

  static async getInitialProps({ req }) {
    return { };
  }

  render() {
    return(
      <StaticLayout>

        <div id="wrapper">
          <div className="wrapper-inner">
            <a id="fake" href='#'></a>

            <div className="headerContent">

              <div className="topContent">
                <div id="header" className="stuck_position">

                  <div className="container">
                    <div className="row">


                      <div id="logo" className="col-sm-2">
                        <a href="index.html">
                          <span className="site-logo"><span
                            className="item_title_part0 item_title_part_odd item_title_part_first_half item_title_part_first">EasyCowFunding</span> </span>
                        </a>
                      </div>
                      <nav className="moduletable home_menu  col-sm-8">
                        <div className="module_container">
                          <div className="icemegamenu">
                            <ul id="icemegamenu">
                              <li id="iceMenu_101" className="iceMenuLiLevel_1 current active fullwidth">
                                <a href="index.html" className="icemega_active iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">Home</span>
                                </a>
                              </li>
                              <li id="iceMenu_134" className="iceMenuLiLevel_1 ">
                                <a href="index.php/about.html" className=" iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">About us</span>
                                </a>
                              </li>

                              <li id="iceMenu_631" className="iceMenuLiLevel_1 ">
                                <a href="index.php/shop.html" className=" iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">Shop</span>
                                </a>
                              </li>
                              <li id="iceMenu_203" className="iceMenuLiLevel_1 gallery">
                                <a href="index.php/gallery.html" className=" iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">Gallery</span>
                                </a>
                              </li>
                              <li id="iceMenu_142" className="iceMenuLiLevel_1 ">
                                <a href="index.php/contacts.html" className=" iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">Contacts</span>
                                </a>
                              </li>
                              <div className="icemegamenu" id="mynav">
                                <ul>
                                  <li id="iceMenu_142" className="iceMenuLiLevel_1 ">
                                    <a href="index.php/user-registration.html" className=" iceMenuTitle ">
                                      <span className="icemega_title icemega_nosubtitle">Register</span>
                                    </a>
                                  </li>
                                  <li id="iceMenu_142" className="iceMenuLiLevel_1 ">
                                    <a href="index.php/login.html" className=" iceMenuTitle ">
                                      <span className="icemega_title icemega_nosubtitle">Login</span>
                                    </a>
                                  </li>
                                </ul>

                              </div>
                            </ul>
                          </div>
                        </div>
                      </nav>
                      <div className="moduletable shop-cart pull-right ">
                        <div className="module_container">
                          <div className="vmCartModule_ajax vmCartModule shop-cart pull-right vmCartModule_255"
                               id="vmCartModule">

                            <div className="total_products empty"><a href="index.php/cart.html"></a></div>

                            <div className="hiddencontainer" style= {{display: 'none' }}>
                              <div className="vmcontainer">
                                <div className="spinner"></div>
                                <div className="image">
                                </div>
                                <div className="product_row">
                                  <span className="product_name"></span>
                                  <span className="quantity"></span>
                                  <div className="prices" style={{display:'inline'}}></div>

                                  <a className="vm2-remove_from_cart remove" title="Remove product"
                                     onClick="remove_product_cart(this);"><i className="fa fa-times-circle"></i><span
                                    className="product_cart_id" style={{display:'none'}}></span></a>
                                  <div className="product_attributes"></div>
                                </div>
                              </div>
                            </div>
                            <div id="vm_cart_products" className="empty">
                              <div className="text-cart">
                                Recently added item(s)
                              </div>
                              <div className="vm_cart_products">

                              </div>

                              <div className="totalBox">
                                <div className="carttotaltext">
                                  <span className="totalText">Total:</span></div>
                                <div className="total">
                                </div>
                              </div>
                              <div className="show_cart">
                              </div>
                              <div style={{clear:'both'}}></div>
                              <noscript>
                                MOD_VIRTUEMART_CART_AJAX_CART_PLZ_JAVASCRIPT
                              </noscript>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="showcase" className="stuck_position">
                <div className="moduletable ">
                  <div className="module_container">
                    <div  className="swiper-container swiper-slider " data-min-height="500px"
                          data-height="34.24390243902439%" data-autoplay="false" data-loop="true"
                          data-slide-effect="fade">
                      <div className="swiper-wrapper">

                        <div className="swiper-slide " data-slide-bg="/joomla_prod-8983_v1/images/slider/slide-3.jpg">
                          <div className="swiper-slide-caption" data-caption-animate="fadeIn" data-caption-delay="200">
                            <div className="camera_caption ">


                              <div className="container">
                                <div className="row">
                                  <div className="moduletable   col-sm-7">
                                    <div className="module_container">
                                      <header className='page_header'>
                                        <h1 className="moduleTitle title"><span
                                          className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">FUNDING</span>
                                          <span
                                            className="item_title_part_1 item_title_part_even item_title_part_first_half">ONE</span>
                                          <span
                                            className="item_title_part_2 item_title_part_odd item_title_part_first_half">FARM</span>
                                          <span
                                            className="item_title_part_3 item_title_part_even item_title_part_first_half"></span>
                                          <span
                                            className="item_title_part_4 item_title_part_odd item_title_part_second_half"></span>
                                          <span
                                            className="item_title_part_5 item_title_part_even item_title_part_second_half">FUNDS</span>
                                          <span
                                            className="item_title_part_6 item_title_part_odd item_title_part_second_half">MULTIPLE</span>
                                          <span
                                            className="item_title_part_7 item_title_part_even item_title_part_second_half item_title_part_last">LIFES</span>
                                        </h1>
                                        <button className="btn btn-primary"><span>Get Started</span></button>
                                      </header>
                                      <div className="mod-article-single mod-article-single__" id="module_244">
                                        <div className="item__module" id="item_158">


                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="moduletable   col-sm-12">
                                    <div className="module_container">
                                      <header className='page_header' id="whyus">
                                        <h2 className="moduleTitle "><span
                                          className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">How</span>
                                          <span
                                            className="item_title_part_1 item_title_part_even item_title_part_first_half">It</span>
                                          <span
                                            className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Works</span>
                                        </h2>
                                      </header>
                                      <div className="mod-newsflash-adv mod-newsflash-adv__ cols-3" id="module_245">
                                        <div className="row">
                                          <article className="col-sm-3 item item_num0 item__module  " id="item_159">


                                            <figure className="item_img img-intro img-intro__left">
                                              <img src="static/images/slide-icon1.png" alt="" />
                                            </figure>

                                            <div className="item_content">

                                              <h4 className="item_title item_title__"><span
                                                className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Create </span>
                                                <span
                                                  className="item_title_part_1 item_title_part_even item_title_part_first_half">an</span>
                                                <span
                                                  className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Account</span>
                                              </h4>
                                              <div className="item_introtext">
                                                <p>Create an account,it's fast and easy.</p>
                                              </div>


                                            </div>
                                            <div className="clearfix"></div>
                                          </article>
                                          <article className="col-sm-3 item item_num1 item__module  " id="item_160">

                                            <figure className="item_img img-intro img-intro__left">
                                              <img src="static/images/slide-icon2.png" alt="" />
                                            </figure>

                                            <div className="item_content">

                                              <h4 className="item_title item_title__"><span
                                                className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Fund</span>
                                                <span
                                                  className="item_title_part_1 item_title_part_even item_title_part_first_half">a</span>
                                                <span
                                                  className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Farm</span>
                                              </h4>

                                              <div className="item_introtext">
                                                <p>fund a farm from our ranch. </p>
                                              </div>


                                            </div>
                                            <div className="clearfix"></div>
                                          </article>

                                          <article className="col-sm-3 item item_num1 item__module  " id="item_160">

                                            <figure className="item_img img-intro img-intro__left">
                                              <img src="static/images/slide-icon2.png" alt="" />
                                            </figure>

                                            <div className="item_content">

                                              <h4 className="item_title item_title__"><span
                                                className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Get</span>
                                                <span
                                                  className="item_title_part_1 item_title_part_even item_title_part_first_half"></span>
                                                <span
                                                  className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Updates</span>
                                              </h4>

                                              <div className="item_introtext">
                                                <p>Track your investments through our user assigned dashboard.</p>
                                              </div>


                                            </div>
                                            <div className="clearfix"></div>
                                          </article>

                                          <article className="col-sm-3 item item_num2 item__module  lastItem"
                                                   id="item_161">

                                            <figure className="item_img img-intro img-intro__left">
                                              <img src="static/images/slide-icon3.png" alt="" />
                                            </figure>

                                            <div className="item_content">

                                              <h4 className="item_title item_title__"><span
                                                className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Get</span>
                                                <span
                                                  className="item_title_part_1 item_title_part_even item_title_part_first_half">Returns</span>
                                                <span
                                                  className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last"></span>
                                              </h4>
                                              <div className="item_introtext">
                                                <p>get profit returns promptly.</p>
                                              </div>


                                            </div>
                                            <div className="clearfix"></div>
                                          </article>
                                        </div>
                                        <div className="clearfix"></div>

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

            <div className="moduletable parallax1">
              <div className="module_container">
                <div className="parallax parallax__parallax1"
                     data-url="/joomla_prod-8983_v1/images/parallax/parallax1.jpg" data-speed="0.8"
                     data-direction="normal" data-mobile="true" data-blur="false">


                  <div className="row-container">
                    <div className="container">
                      <div className="row">
                        <div className="moduletable center  col-sm-12">
                          <div className="module_container">
                            <header className='page_header'>
                              <h2 className="moduleTitle "><span
                                className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Why</span>
                                <span
                                  className="item_title_part_1 item_title_part_even item_title_part_first_half">Choose</span>
                                <span
                                  className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Us</span>
                              </h2>
                            </header>
                            <div className="mod-newsflash-adv mod-newsflash-adv__center cols-4" id="module_241">
                              <div className="row">
                                <article className="col-sm-3 item item_num0 item__module  " id="item_150">

                                  <figure className="item_img img-intro img-intro__none">
                                    <img src="static/images/icon1.png" alt="" />
                                  </figure>

                                  <div className="item_content">

                                    <h4 className="item_title item_title__center"><span
                                      className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Seasoned</span>
                                      <span
                                        className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Team</span>
                                    </h4>
                                    <div className="item_introtext">
                                      <p>Our experts spent last few years excelling their skills.</p>
                                    </div>


                                  </div>
                                  <div className="clearfix"></div>
                                </article>
                                <article className="col-sm-3 item item_num1 item__module  " id="item_151">

                                  <figure className="item_img img-intro img-intro__none">
                                    <img src="static/images/icon2.png" alt="" />
                                  </figure>

                                  <div className="item_content">

                                    <h4 className="item_title item_title__center"><span
                                      className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Smart</span>
                                      <span
                                        className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Logistics</span>
                                    </h4>

                                    <div className="item_introtext">
                                      <p>Delivering our produce to your place is an easy task for our company!</p>
                                    </div>


                                  </div>
                                  <div className="clearfix"></div>
                                </article>
                                <article className="col-sm-3 item item_num2 item__module  " id="item_152">

                                  <figure className="item_img img-intro img-intro__none">
                                    <img src="static/images/icon3.png" alt="" />
                                  </figure>

                                  <div className="item_content">

                                    <h4 className="item_title item_title__center"><span
                                      className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Quality</span>
                                      <span
                                        className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Matters</span>
                                    </h4>
                                    <div className="item_introtext">
                                      <p>We’re determined to keep up the quality of our farming products.</p>
                                    </div>


                                  </div>
                                  <div className="clearfix"></div>
                                </article>
                                <article className="col-sm-3 item item_num3 item__module  lastItem" id="item_153">

                                  <figure className="item_img img-intro img-intro__none">
                                    <img src="static/images/icon4.png" alt="" />
                                  </figure>

                                  <div className="item_content">

                                    <h4 className="item_title item_title__center"><span
                                      className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Products</span>
                                      <span
                                        className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Range</span>
                                    </h4>
                                    <div className="item_introtext">
                                      <p>We are growing a multitude of different vegetables, fruits and grains.</p>
                                    </div>


                                  </div>
                                  <div className="clearfix"></div>
                                </article>
                              </div>
                              <div className="clearfix"></div>

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
          <div id="content">
            <div className="container">
              <div className="row">
                <div className="content-inner">

                  <div id="component" className="col-sm-12">
                    <main role="main">
                      <div id="content-top">
                        <div className="row">
                          <div className="moduletable   col-sm-12">
                            <div className="module_container">
                              <header className='page_header'>
                                <h2 className="moduleTitle center title"><span
                                  className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Our</span>
                                  <span
                                    className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Shop</span>
                                </h2>
                              </header>
                              <div id="responsiveTabsDemo" className="responsive-tabs">
                                <h2 className="responsive-tabs__heading--active"><span
                                  className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">COW</span>
                                  <span
                                    className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">FARMS</span>
                                </h2>
                                <div id="tab-1" className="comvirtuemartmod vmgroup">
                                  <div className="vmproduct productdetails tabs">


                                    <div className="row prod">
                                      <div id="producthorizon3"
                                           className="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <img src="static/images/virtuemart/product/resized/image_product_2_768x768.jpg"
                                                 alt="image_product_13.png" className="browseProductImage"/>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">Female cow farm</span>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice3">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">₦60000</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>


                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">

                                                  <div className="addtocart-bar">
																							<span className="addtocart-button">
					<button className="addtocart-button btn"><span><a
            href="./user%2520dashboard/skin-green.html">FUND THIS FARM</a></span></button>

																							</span>
                                                  </div>
                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists3">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this farm"
                                                   onClick="TmboxAddToWishlist('3');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove3">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('3');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                      <div id="producthorizon1"
                                           className="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="Blueberry Basket"
                                               href="index.php/shop/collezione-pasta%2c-barilla-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_1_768x768.jpg"
                                                   alt="image_product_1.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/collezione-pasta%2c-barilla-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Blueberry</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Basket</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice1">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$19.89</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>
                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="Add to Cart"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="1"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="1"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="1"/>
                                                    <input type="hidden" className="pname" value="Blueberry Basket"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists1">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('1');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove1">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('1');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                      <div id="producthorizon4"
                                           className="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="Strawberry Basket"
                                               href="index.php/shop/house-cleaning%20products/ferara-pasta%2c-long-fusilli-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_12_768x768.jpg"
                                                   alt="image_product_19.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/house-cleaning%20products/ferara-pasta%2c-long-fusilli-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Strawberry</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Basket</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice4">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$19.89</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>

                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="Add to Cart"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="4"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="4"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="4"/>
                                                    <input type="hidden" className="pname" value="Strawberry Basket"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists4">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('4');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove4">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('4');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                      <div id="producthorizon2"
                                           className="product vm-product-horizon vm-col-4 last-border vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="Raspberry Basket"
                                               href="index.php/shop/house-cleaning%20products/angel-hair-nests-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_3_768x768.jpg"
                                                   alt="image_product_73.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/house-cleaning%20products/angel-hair-nests-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Raspberry</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Basket</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice2">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$19.89</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>
                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="Add to Cart"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="2"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="2"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="2"/>
                                                    <input type="hidden" className="pname" value="Raspberry Basket"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists2">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('2');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove2">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('2');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                    </div>

                                  </div>
                                </div>
                                <h2 className=""><span
                                  className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">GOAT</span>
                                  <span
                                    className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">FARMS</span>
                                </h2>
                                <div id="tab-2" className="comvirtuemartmod vmgroup">
                                  <div className="vmproduct productdetails tabs">


                                    <div className="row prod">
                                      <div id="producthorizon12"
                                           className="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="King Arthur Flour Apple Cinnamon Doughnut"
                                               href="index.php/shop/house-cleaning%20products/king-arthur-flour-apple-cinnamon-doughnut-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_128_768x768.jpg"
                                                   alt="image_product_67.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/house-cleaning%20products/king-arthur-flour-apple-cinnamon-doughnut-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">King</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_first_half">Arthur</span>
                                              <span
                                                className="item_title_part_2 item_title_part_odd item_title_part_first_half">Flour</span>
                                              <span
                                                className="item_title_part_3 item_title_part_even item_title_part_second_half">Apple</span>
                                              <span
                                                className="item_title_part_4 item_title_part_odd item_title_part_second_half">Cinnamon</span>
                                              <span
                                                className="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">Doughnut</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice12">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$250.00</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>
                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="Add to Cart"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="12"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="12"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="12"/>
                                                    <input type="hidden" className="pname"
                                                           value="King Arthur Flour Apple Cinnamon Doughnut"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists12">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('12');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove12">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('12');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                      <div id="producthorizon11"
                                           className="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="Kicking Horse Coffee Three Sisters Coffee"
                                               href="index.php/shop/kicking-horse-coffee-three-sisters-coffee-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_11_768x768.jpg"
                                                   alt="image_product_61.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/kicking-horse-coffee-three-sisters-coffee-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Kicking</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_first_half">Horse</span>
                                              <span
                                                className="item_title_part_2 item_title_part_odd item_title_part_first_half">Coffee</span>
                                              <span
                                                className="item_title_part_3 item_title_part_even item_title_part_second_half">Three</span>
                                              <span
                                                className="item_title_part_4 item_title_part_odd item_title_part_second_half">Sisters</span>
                                              <span
                                                className="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">Coffee</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice11">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$25.00</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>


                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="Add to Cart"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="11"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="11"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="11"/>
                                                    <input type="hidden" className="pname"
                                                           value="Kicking Horse Coffee Three Sisters Coffee"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists11">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('11');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove11">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('11');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                      <div id="producthorizon10"
                                           className="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="Kahlua Gourmet Ground Coffe"
                                               href="index.php/shop/house-cleaning%20products/kahlua-gourmet-ground-coffe-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_10_768x768.jpg"
                                                   alt="image_product_55.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/house-cleaning%20products/kahlua-gourmet-ground-coffe-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Kahlua</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_first_half">Gourmet</span>
                                              <span
                                                className="item_title_part_2 item_title_part_odd item_title_part_second_half">Ground</span>
                                              <span
                                                className="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">Coffe</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice10">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$15.00</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>
                                            <div className="vm-product-descr-container-0">
                                              <div className="product_s_desc">
                                                <p>However the products are strictly classified, so the ...</p></div>
                                            </div>

                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="Add to Cart"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="10"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="10"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="10"/>
                                                    <input type="hidden" className="pname"
                                                           value="Kahlua Gourmet Ground Coffe"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists10">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('10');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove10">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('10');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                      <div id="producthorizon9"
                                           className="product vm-product-horizon vm-col-4 last-border vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="Izze Sparkling Juice Variety Pack"
                                               href="index.php/shop/izze-sparkling-juice-variety-pack-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_89_768x768.jpg"
                                                   alt="image_product_8" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/izze-sparkling-juice-variety-pack-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Izze</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_first_half">Sparkling</span>
                                              <span
                                                className="item_title_part_2 item_title_part_odd item_title_part_first_half">Juice</span>
                                              <span
                                                className="item_title_part_3 item_title_part_even item_title_part_second_half">Variety</span>
                                              <span
                                                className="item_title_part_4 item_title_part_odd item_title_part_second_half item_title_part_last">Pack</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice9">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$35.00</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>


                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="Add to Cart"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="9"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="9"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="9"/>
                                                    <input type="hidden" className="pname"
                                                           value="Izze Sparkling Juice Variety Pack"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists9">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('9');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove9">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('9');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                    </div>

                                  </div>


                                </div>
                                <h2 className=""><span
                                  className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">LAMB</span>
                                  <span
                                    className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">FARMS</span>
                                </h2>
                                <div id="tab-3" className="comvirtuemartmod vmgroup">
                                  <div className="vmproduct productdetails tabs">
                                    <div className="row prod">
                                      <div id="producthorizon14"
                                           className="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="Napoleon Triple Stuffed Olives"
                                               href="index.php/shop/house-cleaning%20products/napoleon-triple-stuffed-olives-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_69_768x768.jpg"
                                                   alt="image_product_79.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/house-cleaning%20products/napoleon-triple-stuffed-olives-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Napoleon</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_first_half">Triple</span>
                                              <span
                                                className="item_title_part_2 item_title_part_odd item_title_part_second_half">Stuffed</span>
                                              <span
                                                className="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">Olives</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice14">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$10.00</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>


                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="Add to Cart"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="14"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="14"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="14"/>
                                                    <input type="hidden" className="pname"
                                                           value="Napoleon Triple Stuffed Olives"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists14">
                                                <a className="add_wishlist btn hasTooltips " title="Add To Wishlist"
                                                   onClick="TmboxAddToWishlist('14');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Add To eye</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove14">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('14');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                      <div id="producthorizon5"
                                           className="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
                                        <div id="producthorizont"
                                             className="prod-box with_discount_col spacer product-container">

                                          <div className="vm-product-media-container">
                                            <div className="sale">SOLD OUT</div>
                                            <a title="Fresh organic salad veg from our farms and growers"
                                               href="index.php/shop/fresh-organic-salad-veg-from-our-farms-and-growers-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_32_768x768.jpg"
                                                   alt="image_product_25.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/fresh-organic-salad-veg-from-our-farms-and-growers-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Fresh</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_first_half">organic</span>
                                              <span
                                                className="item_title_part_2 item_title_part_odd item_title_part_first_half">salad</span>
                                              <span
                                                className="item_title_part_3 item_title_part_even item_title_part_first_half">veg</span>
                                              <span
                                                className="item_title_part_4 item_title_part_odd item_title_part_first_half">from</span>
                                              <span
                                                className="item_title_part_5 item_title_part_even item_title_part_second_half">our</span>
                                              <span
                                                className="item_title_part_6 item_title_part_odd item_title_part_second_half">farms</span>
                                              <span
                                                className="item_title_part_7 item_title_part_even item_title_part_second_half">and</span>
                                              <span
                                                className="item_title_part_8 item_title_part_odd item_title_part_second_half item_title_part_last">growers</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price with_discount" id="productPrice5">
                                                <div className="PricesalesPrice vm-display vm-price-value"><span
                                                  className="PricesalesPrice">$44.00</span></div>

                                              </div>

                                              <div className="clear"></div>
                                            </div>


                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="Add to Cart"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="5"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="5"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="5"/>
                                                    <input type="hidden" className="pname"
                                                           value="Fresh organic salad veg from our farms and growers"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists5">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('5');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove5">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('5');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                      <div id="producthorizon6"
                                           className="product vm-product-horizon vm-col-4  vertical-separator vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="Apples Fresh Produce Fruit"
                                               href="index.php/shop/house-cleaning%20products/apples-fresh-produce-fruit-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_4_768x768.jpg"
                                                   alt="image_product_31.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/house-cleaning%20products/apples-fresh-produce-fruit-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Apples</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_first_half">Fresh</span>
                                              <span
                                                className="item_title_part_2 item_title_part_odd item_title_part_second_half">Produce</span>
                                              <span
                                                className="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">Fruit</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice6">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$300.00</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>


                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
                                                  <input type="text" className="quantity-input js-recalculate" name="quantity[]"
                                                         data-errStr="You can buy this product only in multiples of %s pieces!"
                                                         value="1" init="1" step="1"/>
                                                  <span className="quantity-controls js-recalculate">
                                                  <i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
                                                  <i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
                                                </span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart" title="FUND"><i
            className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="6"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="6"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="6"/>
                                                    <input type="hidden" className="pname"
                                                           value="Apples Fresh Produce Fruit"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}} className="wishlist list_wishlists6">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('6');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove6">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('6');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>

                                      <div id="producthorizon7"
                                           className="product vm-product-horizon vm-col-4 last-border vm-col col-sm-3">
                                        <div id="producthorizont" className="prod-box spacer product-container">

                                          <div className="vm-product-media-container">
                                            <a title="Gluten Free Pasta"
                                               href="index.php/shop/gluten-free-pasta-detail.html">
                                              <img src="static/images/virtuemart/product/resized/image_product_5_768x768.jpg"
                                                   alt="image_product_37.png" className="browseProductImage"/> </a>
                                          </div>
                                          <div className="fleft-box">
                                            <h5 className="item_name product_title"><a
                                              href="index.php/shop/gluten-free-pasta-detail.html"><span
                                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Gluten</span>
                                              <span
                                                className="item_title_part_1 item_title_part_even item_title_part_first_half">Free</span>
                                              <span
                                                className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">Pasta</span></a>
                                            </h5>
                                            <div className="vm3pr vm3pr-2">
                                              <div className="product-price " id="productPrice7">
                                                <div className="PricebasePrice vm-display vm-price-value"><span
                                                  className="PricebasePrice">$65.00</span></div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>
                                            <div className="vm-product-stockhandle-container">
                                            </div>
                                            <div className="box-btn">
                                              <div className="vm3pr-0 addcart-box">
                                                <div className="addtocart-area">
                                                  <form method="post" className="product js-recalculate"
                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php/component/virtuemart/">

                                                    <div className="addtocart-bar">
																								<span className="quantity-box">
					<input type="text" className="quantity-input js-recalculate" name="quantity[]"
                 data-errStr="You can buy this product only in multiples of %s pieces!"
                 value="1" init="1" step="1"/>
					<span className="quantity-controls js-recalculate">
					<i className="fa fa-plus quantity-controls quantity-plus" aria-hidden="true"></i>
					<i className="fa fa-minus quantity-controls quantity-minus" aria-hidden="true"></i>
				</span>
																								</span>

                                                      <span className="addtocart-button">
					<button type="submit" name="addtocart" className="addtocart-button btn" value="Add to Cart"
                  title="FUND THIS FARM"><i className="fa fa-shopping-cart "></i><span>FUND THIS FARM</span></button>
																								</span> <input type="hidden" name="virtuemart_product_id[]" value="7"/>
                                                      <noscript><input type="hidden" name="task" value="add"/>
                                                      </noscript>
                                                    </div>
                                                    <input type="hidden" name="option" value="com_virtuemart"/>
                                                    <input type="hidden" name="pid" value="7"/>
                                                    <input type="hidden" name="view" value="cart"/>
                                                    <input type="hidden" name="virtuemart_product_id[]" value="7"/>
                                                    <input type="hidden" className="pname" value="Gluten Free Pasta"/>
                                                    <input type="hidden" name="Itemid" value="101"/></form>

                                                </div>
                                              </div>


                                              <div style={{display:'block'}}className="wishlist list_wishlists7">
                                                <a className="add_wishlist btn hasTooltips " title="Watch this Farm"
                                                   onClick="TmboxAddToWishlist('7');">
                                                  <i className="fa fa-eye"></i>
                                                  <span>Watch this Farm</span>
                                                </a>


                                              </div>
                                              <div style={{display:'none'}}
                                                   className="wishlist remove list_wishlists_remove7">
                                                <a className="btn remove_wishlist hasTooltips"
                                                   title="Remove from Wishlist" onClick="TmboxRemoveWishlists('7');"><i
                                                  className="fa fa-heart-o"></i><span> Remove from Wishlist</span> </a>
                                              </div>
                                            </div>

                                          </div>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>



                              </div>
                              <script>


                              </script>


                            </div>
                          </div>
                        </div>
                      </div>
                      <div><a href="index.php/shop.html">
                        <button id="button" className="btn btn-primary col-sm-3"><span>View all farms</span></button>
                      </a></div>

                      <div id="system-message-container">
                      </div>

                      <section className="page-category page-category__home">
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
