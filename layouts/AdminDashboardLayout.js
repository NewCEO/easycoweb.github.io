import Head from 'next/head';
import React from 'react';
import {appStatic} from '../helpers/static';
import HttpHelper from '../helpers/httpHelper';
import ContentLoader from "react-content-loader";

class DashboardLayOut extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {userDetails:''}
  }

  componentDidMount() {
    this.userDetails();

  }

  userDetails(){
    HttpHelper.httpReq('http://localhost:3009/api/v1/user','','GET').then( (userDet)=> {
      if(userDet.success.data){
        this.setState({userDetails:userDet.success.data});
      }
    })
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
                  <img src="/dashboard/assets/images/logo@2x.png" width="120" alt=""/>
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
              {
                this.state.userDetails?
                  <div className="sui-normal">
                    <a href="#" className="user-link">
                      <img src={this.state.userDetails.profile_pics?this.state.userDetails.profile_pics:"/images/default_profile_pics.png"} width="55" alt="" className="img-circle"/>

                      <span>Welcome,</span>
                      <strong>{this.state.userDetails.name}</strong>
                    </a>
                  </div>: <ContentLoader
                    height={80}
                    width={200}
                    speed={2}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                  >
                    <rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
                    <rect x="70" y="35" rx="3" ry="3" width="85" height="6" />
                    <circle cx="30" cy="30" r="30" />
                  </ContentLoader>
              }

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
              <li className="active opened active ">
                <a href="index.admin.html">
                  <i className="entypo-menu"></i>
                  <span className="title">Dashboard Overview</span>
                </a>
              </li>

              <li className="active opened active ">
                <a href="all-farms.html">
                  <i className="entypo-gauge"></i>
                  <span className="title">All Farms</span>
                </a>
              </li>

              <li className="active opened active ">
                <a href="Investors.html">
                  <i className="entypo-users"></i>
                  <span className="title">Total Investors</span>
                </a>
              </li>

              <li className="active opened active ">
                <a href="active%20farms.html">
                  <i className="entypo-check"></i>
                  <span className="title">Active Farms</span>
                </a>
              </li>

              <li className="active opened active ">
                <a href="soldout.html">
                  <i className="entypo-erase"></i>
                  <span className="title">Soldout Farms</span>
                </a>
              </li>

              <li className="active opened active ">
                <a href="add.farm.html">
                  <i className="entypo-leaf"></i>
                  <span className="title">Add Farm</span>
                </a>
              </li>

              <li className="active opened active ">
                <a href="adduser.html">
                  <i className="entypo-user-add"></i>
                  <span className="title">Add Admin</span>
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
          {this.props.children}
        </div>
      </div>
      </body>
      </html>
    )
  }
}

export default DashboardLayOut;
