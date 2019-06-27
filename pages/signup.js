import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
import SignUpFormComp from '../components/signupForm'

class SignUp extends React.Component{

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
                              <li id="iceMenu_101" className="iceMenuLiLevel_1">
                                <a href="../index.html" className="iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">Home</span>
                                </a>
                              </li>
                              <li id="iceMenu_134" className="iceMenuLiLevel_1  ">
                                <a href="../index.php/about.html" className=" iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">About us</span>
                                </a>
                              </li>

                              <li id="iceMenu_631" className="iceMenuLiLevel_1 current active fullwidth">
                                <a href="../index.php/shop.html" className=" iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">Shop</span>
                                </a>
                              </li>
                              <li id="iceMenu_203" className="iceMenuLiLevel_1 gallery">
                                <a href="../index.php/gallery.html" className=" iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">Gallery</span>
                                </a>
                              </li>
                              <li id="iceMenu_142" className="iceMenuLiLevel_1 ">
                                <a href="../index.php/contacts.html" className=" iceMenuTitle ">
                                  <span className="icemega_title icemega_nosubtitle">Contacts</span>
                                </a>
                              </li>
                              <div className="icemegamenu" id="mynav">
                                <ul>
                                  <li id="iceMenu_142" className="iceMenuLiLevel_1 current active fullwidth ">
                                    <a href="../index.php/user-registration.html" className=" iceMenuTitle ">
                                      <span className="icemega_title icemega_nosubtitle">Register</span>
                                    </a>
                                  </li>
                                  <li id="iceMenu_142" className="iceMenuLiLevel_1 ">
                                    <a href="../index.php/login.html" className=" iceMenuTitle ">
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

                            <div className="hiddencontainer" style={{display: 'none'}}>
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

              <div id="breadcrumbs" className="stuck_position">
                <div className="container">
                  <div className="row">
                    <div className="moduletable   col-sm-12">
                      <div className="module_container"><span className="breadcrumb_title">User registration</span>

                        <ul className="breadcrumb">
                          <li><a href="../index-2.html" className="pathway">Home</a><span
                            className="divider">&nbsp;/&nbsp;</span></li>
                          <li className="active"><span>User registration</span></li>
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
                              className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">User</span>
                              <span
                                className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">registration</span>
                            </h2>
                          </div>

                          <SignUpFormComp />

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

export default SignUp;
