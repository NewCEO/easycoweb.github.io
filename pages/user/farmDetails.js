import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import httpHelper from '../../helpers/httpHelper';
import SingleFarm from '../../components/singleFarm';
import { useRouter } from 'next/router';
import $ from 'jquery';

class allFarms extends React.Component{

  constructor(props){
    super(props);
    this.state = {farmDetails:''};
  }

  static async getInitialProps({ req }) {
    return {farmId:req.params.farmId};
  }

  calculateMonth(d1,d2){
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  componentDidMount() {
   httpHelper.serverReq("http://localhost:3009/api/v1/farms/"+this.props.farmId).then( (data)=> {
     if (data.success){

       this.setState({farmDetails:data.success.data});
     }
   })
  }


  render() {
    return(
      <DashBoardLayOut>
        <div className="col-sm-12">
          <div className="panel panel-primary" data-collapsed="0">

            <div className="panel-body container">
              <div className="row">
                  <div className="col-md-4">
                    <img src={this.state.farmDetails.images?JSON.parse(this.state.farmDetails.images)[0]:""}alt="..."
                         className="img-responsive details col-md-6"/>
                    <div className="row text-center">
                      <h2 className="text-center">Description</h2>
                      <p className="describe">{this.state.farmDetails.description} </p>
                      <div className="col-md-6">
                        <p>Price Per Unit </p>
                        <p className="ptag">₦{this.state.farmDetails.price_per_unit}</p>
                      </div>
                      <div className="col-md-6">
                        <p className="">Returns</p>
                        <p className="ptag">{this.state.farmDetails.roi}%</p>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-6">
                        <p>Duration</p>
                        <p className="ptag">{this.calculateMonth( new Date(this.state.farmDetails.funding_starts),new Date(this.state.farmDetails.funding_ends))} Months</p>
                      </div>
                      <div className="col-md-6">
                        <p className="">Units Available</p>
                        <p className="ptag">{this.state.farmDetails.total_units - this.state.farmDetails.sold_out}</p>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-6">
                        <a href="#" className="btn btn-primary" role="button">Fund</a>
                      </div>
                      <div className="col-md-6">
                        <a href="#" className="btn btn-primary" role="button">follow <i className="fa fa-heart"></i></a>
                      </div>
                    </div>
                    <div className="insured">
                      <p style={{color: '#77B112'}}><b>This farm is insured by</b><img src="assets/images/leadway.png"
                                                                                   alt=""/></p>
                    </div>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </DashBoardLayOut>
    )
  }
}

export default allFarms;
