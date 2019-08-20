import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import httpHelper from '../../helpers/httpHelper';
import PersonalDetailsForm from "../../components/personalDetailsForm"
import BankDetailsForm from "../../components/bankDetailsForm"

import SingleFarm from '../../components/singleFarm';
import { useRouter } from 'next/router';
import $ from 'jquery';
import Router from "next/router";


class investments extends React.Component{

  constructor(props){
    super(props);
    this.handleBankDetailsChange      = this.handleBankDetailsChange.bind(this);
    this.handlePersonalDetailsChange  = this.handlePersonalDetailsChange.bind(this);
    this.state = {userDetails:"",userName:""};

  }

  static async getInitialProps({ req }) {
    return {};
  }

  handlePersonalDetailsChange(data){

    let userDetails = this.state.userDetails;

    data.name? this.setState({userName:data.name}):"";
    data.phone_number?userDetails['phone_number'] = data.phone_number:"";
    data.address?userDetails['address']  = data.address:"";

    this.setState({userDetails:userDetails});
  }

  handleBankDetailsChange(data){

    data.bank_acct_name?this.setState({bank_acct_name:data.bank_acct_name}):"";
    data.bank_acct_number?this.setState({bank_acct_number:this.parseAcctNumber(data.bank_acct_number)}):"";
    data.bank_name?this.setState({bank:data.bank_name}):"";
  }

  componentDidMount() {
    httpHelper.serverReq("http://localhost:3009/api/v1/user").then((response)=>{
      if (response.success){
        let bank_acct_number  = response.success.data.bank_acct_number;
       let parsed             = this.parseAcctNumber(bank_acct_number);
        this.setState({userDetails:response.success.data,userName:response.success.data.name,bank_acct_name:response.success.data.bank_acct_name,bank_acct_number:parsed,bank:response.success.data.bank});

      }
    })
  }

  parseAcctNumber(acctNumber){
    let regex = /^(\d{2})(\d{3})(\d*)/;
    return String(acctNumber).replace(regex,"$1*******$3");
  }



  render() {
    return(
      <DashBoardLayOut>
        <h4 className="text-center bare" style={{"text-transform":"uppercase"}}>PROFILE - USER {this.state.userName}</h4>
        <div className="content mt-3">
          <div className="animated fadeIn">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Personal Details</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h4>E-mail</h4>
                        <p>{this.state.userDetails.email}</p>
                      </div>
                      <div className="col-sm-3">
                        <h4>Password</h4>
                        <p><strong>*********</strong></p>
                      </div>
                      <div className="col-sm-3">
                        <h4>Phone No.</h4>
                        <p>{this.state.userDetails.phone_number?this.state.userDetails.phone_number:"Not Available"}</p>
                      </div>
                      <div className="col-sm-3">
                        <h4>Address</h4>
                        <p>{this.state.userDetails.address?this.state.userDetails.address:"Not Available"}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <button type="button" className="button mb-1" data-toggle="modal" data-target="#profile">
                          Make Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PersonalDetailsForm handleChanges = {this.handlePersonalDetailsChange} />

          <div className="col-lg-12">
            <div className="animated fadeIn">
              <div className="card">
                <div className="animated fadeIn">
                  <div className="card-header">
                    <h4>Bank Details</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4">
                        <h4>Bank Name</h4>
                        <p>{this.state.bank||"Not Available"}</p>
                      </div>
                      <div className="col-sm-4">
                        <h4>Bank Account Name</h4>
                        <p>{this.state.bank_acct_name||"Not Available"}</p>
                      </div>
                      <div className="col-sm-4">
                        <h4>Bank Account Number</h4>
                        <p><strong>{this.state.bank_acct_number||"Not Available"}</strong></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <button type="button" className="button mb-1" data-toggle="modal" data-target="#bank">
                          Make Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <BankDetailsForm handleChanges = {this.handleBankDetailsChange} />

          </div>
        </div>
      </DashBoardLayOut>
    )
  }
}

export default investments;
