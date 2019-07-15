import React from 'react';
import DashBoardLayOut from '../../layouts/AdminDashboardLayout';
import CreateFarmForm from '../../components/createFarm';
import isAdmin from  '../../middlewares/isAdmin';
import $ from 'jquery';

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
        <h2 id="form-head">Add a Farm</h2>
        <br/>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary" data-collapsed="0" id="form">
              <div className="panel-body">
                <CreateFarmForm />
              </div>
            </div>
          </div>
        </div>
      </DashBoardLayOut>
    )
  }
}

export default createFarm;
