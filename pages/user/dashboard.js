import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import $ from 'jquery';

class Dashboard extends React.Component{

  static async getInitialProps({ req }) {

    return {};
  }


  render() {
    return(
      <DashBoardLayOut>
        <section className="tabs" id="tabs">
          <div className="col-sm-12">
            <div className="panel panel-primary" data-collapsed="0">

              <div className="panel-heading">
                <div className="panel-title">
                  <h2>Farms Funded</h2>
                </div>
                <div className="panel-options">
                </div>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-12">
                    <h3 style={{color: "#77b112"}}>You haven't made any investments!</h3>
                    <p>Go to All Farms,Click Fund button on an open farm,Enter number of units you want to buy,Pay using
                      your preferred payment channel<br/>At the farm period, returns are made to your bank account</p>
                    <a href="your-farms.html">
                      <button type="button" className="btn btn-success">Invest Now</button>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>


          <div className="col-sm-6">

            <div className="panel panel-primary" data-collapsed="0">

              <div className="panel-heading">
                <div className="panel-title">
                  <h2>Farms you follow</h2>
                </div>

                <div className="panel-options">
                  <a href="#" data-rel="collapse"><i className="entypo-down-open"></i></a>
                </div>
              </div>

              <div className="panel-body">

                <h3>You don't follow any farms</h3>
                <a href="your-farms.html">
                  <button type="button" className="btn btn-success">View all our farms</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="panel panel-primary" data-collapsed="0">
              <div className="panel-heading">
                <div className="panel-title">
                  <h2>About Your Returns</h2>
                </div>

                <div className="panel-options">
                  <a href="#" data-rel="collapse"><i className="entypo-down-open"></i></a>
                </div>
              </div>

              <div className="panel-body">
                <p>You can pay with mobile money, bank or credit card.<br/>Transactions are processed through PayStack's
                  secure system. When its time to get paid, we send the money to your bank account. Set up Banking
                  details under the Profile page</p>
                <a href="Profile.html">
                  <button type="button" className="btn btn-success">Profile Page</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </DashBoardLayOut>
    )
  }
}

export default Dashboard;
