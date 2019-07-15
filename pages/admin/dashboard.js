import React from 'react';
import DashBoardLayOut from '../../layouts/AdminDashboardLayout';
import isAdmin from  '../../middlewares/isAdmin';
import $ from 'jquery';

class Dashboard extends React.Component{

  static async getInitialProps({ req }) {
    return {};
  }

  componentDidMount() {
    isAdmin();

  }


  render() {
    return(
      <DashBoardLayOut>
      </DashBoardLayOut>
    )
  }
}

export default Dashboard;
