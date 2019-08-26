import React from 'react';
import DashBoardLayOut from '../../layouts/AdminDashboardLayOut';
import AllFarmActivities from '../../components/allFarmActivities'


class createFarm extends React.Component{

  static async getInitialProps({ req }) {
    return {farmId:req.params.farmId};
  }




  render() {
    console.log(this.props.farmId)
    return(
      <DashBoardLayOut>

        <hr/>


        <h2 id="form-head">All Activities</h2>
        <br/>


        <AllFarmActivities farmId={this.props.farmId}  />


        <br/>
        <br/>
      </DashBoardLayOut>
    )
  }
}

export default createFarm;
