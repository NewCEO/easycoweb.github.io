import React from 'react';
import DashBoardLayOut from '../../layouts/AdminDashboardLayout';
import AllFarms from '../../components/allFarms'
import CreateFarmForm from '../../components/createFarm';
import isAdmin from  '../../middlewares/isAdmin';
import $ from 'jquery';
import httpHelper from "../../helpers/httpHelper";

class createFarm extends React.Component{

  static async getInitialProps({ req }) {
    return {};
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
