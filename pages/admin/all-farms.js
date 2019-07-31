import React from 'react';
import DashBoardLayOut from '../../layouts/AdminDashboardLayout';
import isAdmin from '../../middlewares/isAdmin'
import AllFarms from '../../components/allFarms'


class createFarm extends React.Component{

  static async getInitialProps({ req }) {
    return {};
  }

  componentDidMount() {
    isAdmin();
  }


  render() {
    return(
      <DashBoardLayOut>

        <hr/>


        <h2 id="form-head">All Farms</h2>
        <br/>


          <AllFarms/>


        <br/>
        <br/>
      </DashBoardLayOut>
    )
  }
}

export default createFarm;
