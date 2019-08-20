import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import httpHelper from '../../helpers/httpHelper';
import Link from 'next/link';

import SingleFarm from '../../components/singleFarm';
import { useRouter } from 'next/router';
import $ from 'jquery';
import Router from "next/router";

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
     if (data.success && data.success.data){

       this.setState({farmDetails:data.success.data});
     }else{
       return   Router.push('/404')

     }
   })
  }


  render() {
    return(
      <DashBoardLayOut>
        <div className="content mt-3">
          <div className="animated fadeIn">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Farm Details</h4>
                  </div>
                  <div className="card-body">
                    <div className="col-md-6">
                      <div className="card">
                        <img className="card-img-top" src={this.state.farmDetails.images?JSON.parse(this.state.farmDetails.images)[0]:""} alt="Card image cap"/>
                          <div className="card-body">
                          </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-body">
                          <h2 className="card-title mb-3 Col text-center">{this.state.farmDetails.title}</h2>
                          <p className="card-text">{this.state.farmDetails.description}</p>
                          <div className="row">
                            <div className="col">
                              <div className="text-center">
                                <Link href={"/user/farm/"+this.state.farmDetails.slug+"/activities"}>
                                <button className="button" data-toggle="modal" data-target="#update">View Update
                                </button>
                                </Link>
                              </div>
                            </div>
                            <div className="col">
                              <div className="text-center">
                                <Link href={"/user/farm/"+this.state.farmDetails.slug+"/fund"}>
                                <button className="button">Fund</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
