import Head from 'next/head';
import React from 'react';
import {appStatic} from '../helpers/static';

class DashboardLayOut extends React.Component {

  constructor(prop) {
    super(prop);
  }


  render() {
    return (
      <html>
        <meta http-equiv="content-type" content="text/html;charset=utf-8"/>
        <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="user dashboard"/>
        <meta name="author" content=""/>

        <link rel="icon" href="assets/images/favicon.ico"/>

        <title>EasyCowFunding | Dashboard</title>

        <link rel="stylesheet" href={'/dashboard/assets/js/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom.min.css'}/>
        <link rel="stylesheet" href={"/dashboard/assets/css/font-icons/entypo/css/entypo.css"}/>
        <link rel="stylesheet" href={"/dashboard/assets/css/font-icons/font-awesome/css/font-awesome.css"}/>
        <link
          href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"
          rel="stylesheet" type="text/css"/>
        <link href="http://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800" rel="stylesheet"
              type="text/css"/>
        <link rel="stylesheet" href={"/dashboard/assets/css/bootstrap.css"}/>
        <link rel="stylesheet" href="/dashboard/assets/css/neon-core.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/neon-theme.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/neon-forms.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/custom.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/skins/green.css"/>
        <link rel="stylesheet" href="/templates/theme3489/css/color_schemes/mine.css"/>
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet" type="text/css"/>

          <link rel="stylesheet" href="/dashboard/assets/js/jvectormap/jquery-jvectormap-1.2.2.css" />
          <link rel="stylesheet" href="/dashboard/assets/js/rickshaw/rickshaw.min.css"/>
          <script src="/dashboard/assets/js/jquery-1.11.3.min.js"></script>


          <script src="/dashboard/assets/js/gsap/TweenMax.min.js"></script>
          <script src="/dashboard/assets/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js"></script>
          <script src="/dashboard/assets/js/bootstrap.js"></script>
          <script src="/dashboard/assets/js/joinable.js"></script>
          <script src="/dashboard/assets/js/resizeable.js"></script>
          <script src="/dashboard/assets/js/neon-api.js"></script>

          <script src="/dashboard/assets/js/neon-custom.js"></script>



          <script src="/dashboard/assets/js/neon-demo.js"></script>


        </Head>


        <body className = "page-body skin-green" >
          <div className="page-container">
            <div className="sidebar-menu">

              <div className="sidebar-menu-inner">

                <header className="logo-env">

                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/images/logo@2x.png" width="120" alt=""/>
                    </a>
                  </div>


                  <div className="sidebar-collapse">
                    <a href="#" className="sidebar-collapse-icon with-animations">
                      <i className="entypo-menu"></i>
                    </a>
                  </div>


                  <div className="sidebar-mobile-menu visible-xs">
                    <a href="#" className="with-animation">
                      <i className="entypo-menu"></i>
                    </a>
                  </div>

                </header>

                <div className="sidebar-user-info">

                  <div className="sui-normal">
                    <a href="#" className="user-link">
                      <img src="assets/images/thumb-1@2x.png" width="55" alt="" className="img-circle"/>

                      <span>Welcome,</span>
                      <strong>User Name Here</strong>
                    </a>
                  </div>

                  <div className="sui-hover inline-links animate-in">


                    <a href="#">
                      <i className="entypo-pencil"></i>
                      New Page
                    </a>

                    <a href="mailbox.html">
                      <i className="entypo-mail"></i>
                      Inbox
                    </a>

                    <a href="extra-lockscreen.html">
                      <i className="entypo-lock"></i>
                      Log Off
                    </a>

                    <span className="close-sui-popup">&times;</span>
                  </div>
                </div>


                  <ul id="main-menu" className="main-menu">

                    <li className="opened active ">
                      <a href="skin-green.html">
                        <i className="entypo-home"></i>
                        <span className="title">Dashboard</span>
                      </a>
                    </li>

                    <li className="opened active ">
                      <a href="tranactions.html">
                        <i className="fa fa-money"></i>
                        <span className="title">Transactions</span>
                      </a>
                    </li>

                    <li className="opened active ">
                      <a href="your-farms.html">
                        <i className="entypo-gauge"></i>
                        <span className="title">Your farms</span>
                      </a>
                    </li>

                    <li className="opened active ">
                      <a href="forms-wizard.html">
                        <i className="entypo-user"></i>
                        <span className="title">Profile</span>
                      </a>
                    </li>

                    <li className="opened active ">
                      <a href="history.html">
                        <i className="entypo-flow-tree"></i>
                        <span className="title">History</span>
                      </a>
                    </li>
                  </ul>
              </div>

            </div>
            <div className="main-content">
              <div className="row">

                <div className="col-md-12 col-sm-4 clearfix">


                  <ul className="list-inline links-list pull-right">

                    <li className="sep"></li>


                    <li className="sep"></li>
`
                    <li>`
                      <a href="extra-login.html">
                        Log Out <i className="entypo-logout right"></i>
                      </a>
                    </li>
                  </ul>

                </div>

              </div>
            </div>
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}

export default DashboardLayOut;
