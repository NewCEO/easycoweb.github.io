import Head from 'next/head';
import React from 'react';
import {appStatic} from '../helpers/static';


class DashboardLayOut extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {userDetails:'',mounted:false}
    this.pageTitle = prop.title;
  }

  componentDidMount() {
  }



  render() {
    return (

      <div>

      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <title>CowFunding | {this.pageTitle}</title>
        <meta name="description" content="Easycow Dashboard"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="apple-touch-icon" href="/apple-icon.png"/>
        <link rel="shortcut icon" href="/images/1%20(1).png"/>
        <link rel="stylesheet" href="/vendors/bootstrap/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/vendors/font-awesome/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="/vendors/themify-icons/css/themify-icons.css"/>
        <link rel="stylesheet" href="/vendors/flag-icon-css/css/flag-icon.min.css"/>
        <link rel="stylesheet" href="/vendors/selectFX/css/cs-skin-elastic.css"/>
        <link rel="stylesheet" href="/assets/css/custom.css"/>
        <link rel="stylesheet" href="/assets/css/style.css"/>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet"/>


        <script src="/vendors/jquery/dist/jquery.min.js"></script>
        <script src="/vendors/popper.js/dist/umd/popper.min.js"></script>
        <script src="/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="/assets/js/main.js"></script>
        <script src="/vendors/datatables.net/js/jquery.dataTables.min.js"></script>
        <script src="/vendors/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="/vendors/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
        <script src="/vendors/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>

      </Head>

      <body>

      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">

          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu"
                    aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="./"><img src="/images/2.png" alt="Logo"/></a>
            <a className="navbar-brand hidden" href="./"><img src="/images/1%20(1).png" alt="Logo"/></a>
          </div>

          <div id="main-menu" className="main-menu collapse navbar-collapse mine">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="index.user.html"> <i className="menu-icon fa fa-dashboard"></i>Dashboard </a>
              </li>
              <hr/>
                <li><a href="index.user.html"><i className="menu-icon fa fa-home"></i>Home</a>
                </li>
                <li><a href="all-farms.html"><i className="menu-icon fa fa-flag"></i>All Farms </a></li>
                <li><a href="transaction.html"><i className="menu-icon fa fa-money"></i>Transactions</a>
                </li>
                <li><a href="profile.html"><i className="menu-icon fa fa-user"></i>Profile</a>
                </li>
                <li><a href="history.html"><i className="menu-icon  fa fa-sort-alpha-desc"></i>History</a>
                </li>
            </ul>
          </div>
        </nav>
      </aside>

      <div id="right-panel" className="right-panel" style={{backgroundImage: "url(/images/IMG-20190711-WA0010.jpg)"}}>

        <header id="header" className="header">
          <div className="header-menu">
            <nav className="navbar-expand-sm navbar-default" id="head">
              <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-menu"
                        aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars"></i>
                </button>
              </div>
              <div id="my-menu" className="main-menu collapse navbar-collapse">
                <div className="col-sm-10">
                  <a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks"></i></a>
                  <div className="header-left">
                    <ul className="navbar navbar-nav mynav">
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="causes-grid.html">Our Ranch</a>
                      </li>
                      <li><a href="team.html">Our Team</a>
                      </li>
                      <li><a href="#">Our Thoughts</a>
                      </li>
                      <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>


                <div className="col-sm-2">
                  <div className="user-area float-right">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">Logout</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {this.props.children}
      </div>




      </body>
      </div>

    )
  }
}

export default DashboardLayOut;
