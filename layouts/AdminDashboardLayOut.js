import Head from 'next/head';
import React from 'react';
import HttpHelper from '../helpers/httpHelper';
import userTypes from "../config/userTypes";
import Link from 'next/link';
import $ from 'jquery';

import ContentLoader from "react-content-loader";

class DashboardLayOut extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {userDetails:'',userTypes:false}
  }

  componentDidMount() {
    this.userDetails();

  }

  userDetails(){
    HttpHelper.serverReq('user','','GET').then( (userDet)=> {
      if(userDet.success.data){
        this.setState({userDetails:userDet.success.data});
      }
    })
  }

  render() {
    return (
      <div>
      <meta http-equiv="content-type" content="text/html;charset=utf-8"/>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="user dashboard"/>
        <meta name="author" content=""/>

        <link rel="icon" href="assets/images/favicon.ico"/>

        <title>CowFunding | Dashboard</title>

        <link rel="stylesheet" href="/dashboard/assets/js/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom.min.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/font-icons/entypo/css/entypo.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/font-icons/font-awesome/css/font-awesome.css"/>
        <link
          href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i"
          rel="stylesheet" type="text/css"/>
        <link href="http://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800" rel="stylesheet"
              type="text/css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/bootstrap.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/neon-core.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/neon-theme.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/neon-forms.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/custom.css"/>
        <link rel="stylesheet" href="/dashboard/assets/css/skins/green.css"/>
        <link rel="stylesheet" href="/templates/theme3489/css/color_schemes/mine.css"/>
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet" type="text/css"/>


        <link rel="stylesheet" href="/dashboard/assets/js/jvectormap/jquery-jvectormap-1.2.2.css" />
        <link rel="stylesheet" href="/dashboard/assets/js/rickshaw/rickshaw.min.css"/>import $ from 'jquery';

        <link rel="stylesheet" href="/dashboard/assets/js/datatables/datatables.css" />
          <link rel="stylesheet" href="/dashboard/assets/js/select2/select2-bootstrap.css" />
            <link rel="stylesheet" href="/dashboard/assets/js/select2/select2.css" />
        <script src="/dashboard/assets/js/jquery-1.11.3.min.js"></script>


        <script src="/dashboard/assets/js/gsap/TweenMax.min.js"></script>
        <script src="/dashboard/assets/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js"></script>
        <script src="/dashboard/assets/js/bootstrap.js"></script>
        <script src="/dashboard/assets/js/joinable.js"></script>
        <script src="/dashboard/assets/js/resizeable.js"></script>
        <script src="/dashboard/assets/js/neon-api.js"></script>

        <script src="/dashboard/assets/js/neon-custom.js"></script>



        <script src="/dashboard/assets/js/neon-demo.js"></script>
        <script src="/js/jquery.js"></script>

        <script src="/dashboard/assets/js/datatables/datatables.js"></script>
        <script src="/dashboard/assets/js/select2/select2.min.js"></script>



      </Head>


      <div className = "page-body skin-green" >
      <div className="page-container">
        <div className="sidebar-menu">

          <div className="sidebar-menu-inner">

            <header className="logo-env">

              <div className="sidebar-collapse">
                <a href="#" className="sidebar-collapse-icon with-animations">
                  <i className="entypo-menu"></i>
                </a>
              </div>

              <div className="logo">
                <a href="/">
                  <img className="myimg" src="/dashboard/assets/images/logo.png" width="120" alt=""/>
                </a>
              </div>
              <div className="sidebar-mobile-menu visible-xs">
                <a href="#" className="with-animation">
                  <i className="entypo-menu"></i>
                </a>
              </div>

            </header>
            <ul id="main-menu" className="main-menu">
              <li className="opened active ">
                <Link href="/admin/dashboard">
                <a>
                  <i className="entypo-home"></i>
                  <span className="title">Dashboard</span>
                </a>
                </Link>
              </li>
              <li className="opened active ">
                <Link href="/admin/farm/create">
                  <a>
                    <i className="entypo-gauge"></i>
                    <span className="title">New Farm</span>
                  </a>
                </Link>
              </li>
              <li className="opened active ">
               <Link href="/admin/farms">
                <a>
                  <i className="entypo-leaf"></i>
                  <span className="title">All farms</span>
                </a>
               </Link>
              </li>
              <li className="opened active ">
                <Link href="/admin/farm/payment/offline">
                  <a>
                    <i className="entypo-leaf"></i>
                    <span className="title">Offline Payment</span>
                  </a>
                </Link>
              </li>
              {
                this.state.userDetails.user_type === userTypes.superAdmin?
                  <li className="opened active ">
                    <Link href="/admin/create">
                      <a>
                        <i className="entypo-user-add"></i>
                        <span className="title">Add User</span>
                      </a>
                    </Link>
                  </li>:
                  ""

              }

              {
                this.state.userDetails.user_type === userTypes.superAdmin?
                  <li className="opened active ">
                    <Link href="/admin/users/manage">
                      <a>
                        <i className="entypo-home"></i>
                        <span className="title">Manage Users</span>
                      </a>
                    </Link>
                  </li>:
                  ""

              }
<br />
<br />
<br />
<br />
<br />

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
                  <a href="/logout">
                    Log Out <i className="entypo-logout right"></i>
                  </a>
                </li>
              </ul>

            </div>

          </div>
          {this.props.children}
        </div>
      </div>
      </div>

      </div>
    )
  }
}

export default DashboardLayOut;
