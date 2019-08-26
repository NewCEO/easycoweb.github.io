import React            from  'react';
import DashBoardLayOut  from  '../../layouts/AdminDashboardLayOut';
import CreateFarmForm   from  '../../components/createFarm';
import isAdmin          from  '../../middlewares/isAdmin';
import CreateActivity   from  '../../components/createActivity';
import $ from 'jquery';

class createFarm extends React.Component{

  static async getInitialProps({ req }) {
    return {farmId:req.params.farmId};
  }

  componentDidMount() {
    isAdmin();
  }


  render() {
    return(
      <DashBoardLayOut>
        <hr/>
        <h2 id="form-head">Create  Farm Activity</h2>
        <br/>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary" data-collapsed="0" id="form">
              <div className="panel-body">
                <CreateActivity farmId={this.props.farmId} />
              </div>
            </div>
          </div>
        </div>
      </DashBoardLayOut>
    )
  }
}

export default createFarm;
