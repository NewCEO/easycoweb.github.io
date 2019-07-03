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
      </DashBoardLayOut>
    )
  }
}

export default Dashboard;
