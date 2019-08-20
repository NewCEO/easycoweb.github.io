import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import payStackConf from "../../config/paystack"
import httpHelper from '../../helpers/httpHelper';
import SingleFarm from '../../components/singleFarm';
import { useRouter } from 'next/router';
import $ from 'jquery';
import Router from "next/router";


class allFarms extends React.Component{

  constructor(props){
    super(props);
    this.state = {paymentState:"We are verifying and updating your payment please wait..."}

  }

  static async getInitialProps({ req }) {
    return {reference:req.query.reference};
  }


  componentDidMount() {
   let formData = new FormData();
   formData.append("reference",this.props.reference);
    httpHelper.httpReq("farms/invoice/pay",formData,"POST").then( (response)=> {
      if (response.success){
        this.setState({paymentState:"Congratulations your investment was successful "})
      }else{
        this.setState({paymentState:"Sorry your investment was unsuccessful "})

      }
    })

  }


  render() {
    return(
      <DashBoardLayOut>

        <h4>{this.state.paymentState} </h4>
      </DashBoardLayOut>
    )
  }
}

export default allFarms;
