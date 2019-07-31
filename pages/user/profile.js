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
    this.setState({userName:data.name});
  }

  handleBankDetailsChange(data){
    this.setState({bank_acct_name:data.bank_acct_name,bank_acct_number:this.parseAcctNumber(data.bank_acct_number),bank_name:data.bank_name})
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
        <div className="sui-normal">
          <div className="row">
            <div className="col-md-12 welcome">
              <span style={{color:"#77b112"}}><h2>Profile - {this.state.userName}</h2></span>
            </div>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-4">
            <h4 style={{"color": "#77b112"}}>Personal Details</h4>
          </div>
        </div>
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
            <a data-toggle="collapse" data-parent="#accordion-test-2" href="#collapseOne-2">
              <h4 className="panel-title">
                <button className="btn btn-success">
                  Make Changes
                </button>
              </h4>
            </a>
          </div>
        </div>
        <div className="panel panel-default">
          <PersonalDetailsForm handleChanges = {this.handlePersonalDetailsChange} />
        </div>
        <hr/>

        <div className="row">
          <div className="col-sm-3">
            <h4>Bank Name</h4>
            <p>{this.state.bank||"Not Available"}</p>
          </div>
          <div className="col-sm-3">
            <h4>Bank Account Name</h4>
            <p>{this.state.bank_acct_name||"Not Available"}</p>
          </div>
          <div className="col-sm-3">
            <h4>Bank Account Number</h4>
            <p><strong>{this.state.bank_acct_number||"Not Available"}</strong></p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <a data-toggle="collapse" data-parent="#accordion-test-2" href="#collapseOne-1">
              <h4 className="panel-title">
                <button className="btn btn-success">
                  Make Changes
                </button>
              </h4>
            </a>
          </div>
        </div>


        <div className="panel panel-default">
          <BankDetailsForm handleChanges = {this.handleBankDetailsChange} />
        </div>
        <br/>
      </DashBoardLayOut>
    )
  }
}

export default investments;
