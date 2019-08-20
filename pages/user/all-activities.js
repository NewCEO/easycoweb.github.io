import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayout';
import AllFarmActivities from '../../components/allFarmActivitiesUser'
import InfiniteScroll from "../../components/allUserFarms";


class createFarm extends React.Component{

  static async getInitialProps({ req }) {
    return {farmId:req.params.farmId};
  }




  render() {
    console.log(this.props.farmId)
    return(
      <DashBoardLayOut>

        <div className="card ground">
          <div className="card-header">
            <h4>Farm Updates</h4>
          </div>
          <div className="card-body" style={{background:"white"}}>
            <AllFarmActivities farmId={this.props.farmId}  />

          </div>
        </div>

      </DashBoardLayOut>
    )
  }
}

export default createFarm;
