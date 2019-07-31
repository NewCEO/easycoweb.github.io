import React from 'react';
import DashBoardLayOut from '../../layouts/AdminDashboardLayout';
import AllUsers from '../../components/allUsers';
import isSuperAdmin from '../../middlewares/isSuperAdmin'


class allUsers extends React.Component{

  static async getInitialProps({ req }) {
    return {};
  }

  componentDidMount() {
    isSuperAdmin();
  }


  render() {
    return(
      <DashBoardLayOut>

        <hr/>


        <h2 id="form-head">All Users</h2>
        <br/>


        <AllUsers/>


        <br/>
        <br/>
      </DashBoardLayOut>
    )
  }
}

export default allUsers;
