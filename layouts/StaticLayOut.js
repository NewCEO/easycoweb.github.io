import Head from 'next/head';
import React from 'react';

class StaticLayout extends React.Component {
  constructor(prop){
    super()
    this.prop = prop
  }
  static async getInitialProps({ req }) {
    return { };
  }

  render() {
    return(
      <html>
      <meta http-equiv="content-type" content="text/html;charset=utf-8"/>
      <Head>
        <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1"/>
        <base/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="generator" content="Joomla! - Open Source Content Management"/>
        <title>EasyCowFunding | Home</title>
        <link href="indexc0d0.php?format=feed&amp;type=rss" rel="alternate" type="application/rss+xml" title="RSS 2.0"/>
        <link href="index7b17.php?format=feed&amp;type=atom" rel="alternate" type="application/atom+xml" title="Atom 1.0"/>
        <link href="static/templates/theme3489/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon"/>
        <link
          href="index.php/component/search/indexd6e7.html?layout=theme3489:category&amp;id=8&amp;Itemid=101&amp;format=opensearch"
          rel="search" title="Search Agriculture" type="application/opensearchdescription+xml"/>
        <link href="static/media/jui/css/chosen3467.css?454a96ddb3b4e077fcfb532ca7c3d5eb" rel="stylesheet" type="text/css"/>
        <link href="static/templates/theme3489/css/template.css" rel="stylesheet" type="text/css"/>
        <link href="static/templates/theme3489/css/font-awesome.css" rel="stylesheet" type="text/css"/>
        <link
          href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"
          rel="stylesheet" type="text/css"/>
        <link href="http://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800" rel="stylesheet"
              type="text/css"/>
        <link href="static/templates/theme3489/css/komento.css" rel="stylesheet" type="text/css"/>
        <link href="static/templates/theme3489/css/color_schemes/color_scheme_1.css" rel="stylesheet" type="text/css"
              id="color_scheme"/>
        <link href="static/components/com_virtuemart/assets/css/facebox48de.css?vmver=3b73dab7" rel="stylesheet" type="text/css"/>
        <link href="static/modules/mod_tm_product_tabs/assets/responsive-tabs.css" rel="stylesheet" type="text/css"/>
        <link href="static/modules/mod_tm_parallax/css/rd-parallax.css" rel="stylesheet" type="text/css"/>
        <link href="static/templates/theme3489/css/swiper.css" rel="stylesheet" type="text/css"/>
        <link href="static/modules/mod_swiper/css/animate.css" rel="stylesheet" type="text/css"/>
        <link href="static/templates/theme3489/html/mod_icemegamenu/css/navbar.css" rel="stylesheet" type="text/css"/>
        <link href="static/templates/theme3489/css/color_schemes/mine.css" rel="stylesheet" type="text/css"/>
        <script src="static/media/jui/js/jquery.min3467.js?454a96ddb3b4e077fcfb532ca7c3d5eb" type="text/javascript"></script>
        <script src="static/media/jui/js/jquery-noconflict3467.js?454a96ddb3b4e077fcfb532ca7c3d5eb"
                type="text/javascript"></script>
        <script src="static/media/jui/js/jquery-migrate.min3467.js?454a96ddb3b4e077fcfb532ca7c3d5eb"
                type="text/javascript"></script>
        <script src="static/plugins/system/bootstrap_3/assets/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="media/jui/js/chosen.jquery.min3467.js?454a96ddb3b4e077fcfb532ca7c3d5eb"
                type="text/javascript"></script>
        <script src="static/templates/theme3489/js/scripts.js" type="text/javascript"></script>
        <script src="static/modules/mod_slogin/media/slogin.min3860.js?v=1" type="text/javascript"></script>
        <script src="static/media/system/js/core55a3.js?v=1543272676" type="text/javascript"></script>
        <script src="static/media/com_acymailing/js/acymailing_moduled756.js?v=580" type="text/javascript" async="async"></script>
        <script src="static/modules/mod_tm_product_tabs/assets/responsiveTabs.min.js" type="text/javascript"></script>
        <script src="static/components/com_virtuemart/assets/js/jquery-ui.mine17e.js?vmver=1.9.2" type="text/javascript"></script>
        <script src="static/components/com_virtuemart/assets/js/jquery.ui.autocomplete.html.js" type="text/javascript"></script>
        <script src="static/components/com_virtuemart/assets/js/jquery.noconflict.js" type="text/javascript"
                async="async"></script>
        <script src="static/components/com_virtuemart/assets/js/vmsite48de.js?vmver=3b73dab7" type="text/javascript"></script>
        <script src="static/components/com_virtuemart/assets/js/facebox.js" type="text/javascript"></script>
        <script src="static/components/com_virtuemart/assets/js/vmprices48de.js?vmver=3b73dab7" type="text/javascript"></script>
        <script src="static/components/com_tmbox/assets/scripts/tmbox48de.js?vmver=3b73dab7" type="text/javascript"></script>
        <script src="static/modules/mod_tm_parallax/js/jquery.rd-parallax.js" type="text/javascript"></script>
        <script src="static/modules/mod_swiper/js/swiper.min.js" type="text/javascript"></script>
        <script src="static/templates/theme3489/html/mod_icemegamenu/js/menu.js" type="text/javascript" defer="defer"></script>
        <script src="static/templates/theme3489/html/mod_icemegamenu/js/jquery.rd-navbar.js" type="text/javascript"
                defer="defer"></script>
        <script src="static/modules/mod_virtuemart_cart_tm/assets/js/update_cart48de.js?vmver=3b73dab7"
                type="text/javascript"></script>
      </Head>
      <body className="body__home option-com_content view-category task- itemid-101 option-com_virtuemart">
      {this.prop.children}
      <div id="footer-wrapper">
        <div className="footer-wrapper-inner">
          <div id="footer" className="stuck_position">
            <div className="container">
              <div className="row">
                <div className="moduletable   col-sm-6">
                  <div className="module_container">
                    <header className='page_header'>
                      <h4 className="moduleTitle "><span
                        className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">Newsletter</span>
                      </h4>
                      <div className="item_introtext">
                        <p>FUND A FARM TODAY</p>
                      </div>
                    </header>
                    <div className="acymailing_module" id="acymailing_module_formAcymailing50541">
                      <div className="acymailing_fulldiv" id="acymailing_fulldiv_formAcymailing50541">

                      </div>
                    </div>
                  </div>
                </div>
                <div className="moduletable   col-sm-12">
                  <div className="module_container">
                    <header className='page_header'>
                      <h4 className="moduleTitle "><span
                        className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Contact</span>
                        <span
                          className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">us</span>
                      </h4>
                    </header>
                    <div className="mod-menu">
                      <ul className="menu ">
                        <li className="item-610">
                          <span className="separator">Farmer Street 101, NY 10036, US</span></li>
                        <li className="item-611">
                          <a href="mailto:example@demolink.org">example@demolink.org</a>
                        </li>
                        <li className="item-612">
                          <span className="separator">Call Us: 1-800-123-1234</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="moduletable   col-sm-12">
                  <div className="module_container">
                    <header className='page_header'>
                      <h4 className="moduleTitle "><span
                        className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Follow</span>
                        <span
                          className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">us</span>
                      </h4>
                    </header>
                    <div className="mod-menu mod-menu__social">
                      <ul className="nav menu social">
                        <li className="item-148" id="limy"><a className="fa fa-facebook" href="#" title="Facebook"></a>
                        </li>
                        <li className="item-150" id="limy"><a className="fa fa-twitter" href="#" title="Twitter"></a>
                        </li>
                        <li className="item-149" id="limy"><a className="fa fa-google-plus" href="#" title="Google+"></a>
                        </li>
                        <li className="item-151" id="limy"><a className="fa fa-pinterest-p" href="#" title="Pinterest"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="copyright" role="contentinfo">
            <div className="container">
              <div className="row">

                <div className="copyright col-sm-12">
                  <span className="copy">&copy; </span><span className="year">2019 <span><a href="selemafarms.com">Selema Farms</a></span></span><span
                  className="copy"> All Rights Reserved. </span> <span className="terms_link">
                                <a href="index.php/privacy-policy.html">
                                    Terms of Use                                </a>
                                </span>
                  <span className="privacy_link">
                                <a rel="license" href="index.php/privacy-policy.html">
                                    Privacy Policy                                </a>
                                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="back-top">
        <a href="#"><span></span></a>
      </div>
      <div className="container">
        <div id="modal" className="modal fade fade loginPopup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <button type="button" className="close modalClose" data-dismiss="modal">×</button>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="moduletable ">
                <div className="modal-header">
                  <header className='page_header'>
                    <h3 className="moduleTitle "><span
                      className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">Search</span>
                      <span
                        className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">Form</span>
                    </h3>
                  </header>
                </div>
                <div className="modal-body">
                  <div role="search" className="mod-search mod-search__">
                    <form action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php" method="post"
                          className="navbar-form">
                      <label htmlFor="searchword-225" className="element-invisible">Search ...</label>
                      <input id="searchword-225" name="searchword" maxLength="200" className="inputbox mod-search_searchword"
                             type="text" size="0" placeholder="Search ..." required />
                      <button className="button btn btn-primary" onClick="this.form.searchword.focus();">Search</button>
                      <input type="hidden" name="task" value="search" />
                      <input type="hidden" name="option" value="com_search" />
                      <input type="hidden" name="Itemid" value="101" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fixed-sidebar-right">
        <div className="moduletable login login_shell" id="module_211"><i className="fa fa-user"></i>
          <div className="mod_login_wrapper">
            <noindex>
              <div className="jlslogin">

                <div className="slogin-clear"></div>
                <form action="https://livedemo00-joomla.template-help.com/joomla_prod-8983_v1/index.php" method="post"
                      id="login-form">
                  <fieldset className="userdata">
                    <div id="form-login-username">
                      <label htmlFor="modlgn-username">Username</label>
                      <input id="modlgn-username" type="text" name="username" className="inputbox" size="18"
                             placeholder="Username"/>
                    </div>
                    <div id="form-login-password">
                      <label htmlFor="modlgn-passwd">Password</label>
                      <input id="modlgn-passwd" type="password" name="password" className="inputbox" size="18"
                             placeholder="Password"/>
                    </div>
                    <div id="form-login-remember">
                      <label htmlFor="modlgn-remember">
                        <input id="modlgn-remember" type="checkbox" name="remember" className="inputbox" value="yes"/>
                        Remember Me </label>
                    </div>
                    <div className="slogin-clear"></div>
                    <input type="submit" name="Submit" className="btn button" value="Log in"/>
                    <input type="hidden" name="option" value="com_users"/>
                    <input type="hidden" name="task" value="user.login"/>
                    <input type="hidden" name="return"
                           value="aHR0cHM6Ly9saXZlZGVtbzAwLWpvb21sYS50ZW1wbGF0ZS1oZWxwLmNvbS9qb29tbGFfcHJvZC04OTgzX3YxLw=="/>
                    <input type="hidden" name="d973bf354ec2c5486215bc66c284e081" value="1"/></fieldset>
                  <ul className="ul-jlslogin">
                    <li>
                      <a rel="nofollow" href="index.php/password-reset.html">
                        Forgot your password?</a>
                    </li>
                    <li>
                      <a rel="nofollow" href="index.php/username-reminder-request.html">
                        Forgot your username?</a>
                    </li>
                    <li>
                      <a rel="nofollow" href="index.php/user-registration.html">
                        Create an account</a>
                    </li>
                  </ul>
                </form>
                <div id="slogin-buttons" className="slogin-buttons slogin-default">

                  <a rel="nofollow" className="btn linkfacebookslogin" title="Facebook" href="#"><span
                    className="facebookslogin slogin-ico"></span><span className="text-socbtn">Facebook</span></a>
                  <a rel="nofollow" className="btn linkgoogleslogin" title="Google" href=""><span
                    className="googleslogin slogin-ico"></span><span className="text-socbtn">Google</span></a>

                </div>

              </div>
            </noindex>
          </div>

        </div>
      </div>

      <div className="modalTmbox"></div>
      </body>
      </html>
    );
  }


}

export default StaticLayout;
