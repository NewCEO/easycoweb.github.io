import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import httpHelper from '../../helpers/httpHelper';
import SingleFarm from '../../components/singleFarm';
import { useRouter } from 'next/router';
import $ from 'jquery';
import Router from "next/router";

class fundFarm extends React.Component{

  constructor(props){
    super(props);
    this.state = {farmDetails:''};
    this.handleChange = this.handleChange.bind(this);
    this.fundNow      = this.fundNow.bind(this);
  }

  static async getInitialProps({ req }) {
    return {farmId:req.params.farmId};
  }

  handleChange(e){
    let unitsToBuy = parseInt(e.target.value);
    if (!Number.isInteger(unitsToBuy)){
     unitsToBuy = 0;
    }

    if (unitsToBuy > (this.state.farmDetails.total_units - this.state.farmDetails.sold_out)){
      unitsToBuy = this.state.farmDetails.total_units - this.state.farmDetails.sold_out;
    }
    if (unitsToBuy < 1){
      this.setState({isEnabled:false})
    }else{
      this.setState({isEnabled:true});
    }
    this.calculateInvestment(unitsToBuy);
    this.setState({totalUnitsInput:unitsToBuy.toString(10).replace(/^0(?=[0-9]+)/,"")});
  }

  calculateInvestment(unitsToBuy){
    let totalPrice = this.state.farmDetails.price_per_unit * unitsToBuy;
    let totalReturns = unitsToBuy * ((this.state.farmDetails.roi * this.state.farmDetails.price_per_unit)/100);
    let totalPayOut   = totalPrice + totalReturns;
    this.setState({calcTotalPrice:totalPrice,calcTotalReturns:totalReturns,calcTotalPayOut:totalPayOut})
  }

  calculateMonth(d1,d2){
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  fundNow(){
    let data = new FormData();
    data.append("farmId",this.props.farmId);
    data.append("units",this.state.totalUnitsInput);
    data.append("paystack_cb","http://www-dev.easycow.com:3000/user/farm/invoice/pay");
    httpHelper.httpReq(`http://localhost:3009/api/v1/farms/invoice/create`,data,"POST").then(function (data) {
      if (data.success.data){
        console.log(data.success.data.authorization_url)
        window.location = data.success.data.authorization_url;
      }
    })
  }

  componentDidMount() {
    httpHelper.serverReq("http://localhost:3009/api/v1/farms/"+this.props.farmId).then( (data)=> {
      if (data.success && data.success.data){

        this.setState({farmDetails:data.success.data,totalUnitsInput:1,isEnabled:true});
        this.calculateInvestment(this.state.totalUnitsInput);

      }else{
        return   Router.push('/404')

      }
    })
  }


  render() {
    return(
      <DashBoardLayOut>

        <section className="tabs" id="tabs">
          <div className="col-sm-12">
            <div className="panel panel-primary" data-collapsed="0">
              <div className="panel-body">
                <div className="row">
                  <h2 className="alert">You are about to fund this farm !</h2>
                  <p className="p-alert"> You can fund this farm by increasing or reducing the number of units to suit
                    what you’d love to fund. As your number of farms changes, The Total Price, Total Returns and Total
                    Payout are automatically calculated for you to see. Satisfied? Click on Pay Now.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="panel panel-primary" data-collapsed="0">
              <div className="panel-body">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-8 fundh2 text-center">
                      <p>Selected Farm</p>
                      <strong>{this.state.farmDetails.title}</strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Price Per Unit</p>
                      <p className="ptag">₦{this.state.farmDetails.price_per_unit}</p>
                    </div>
                    <div className="col-md-6">
                      <p className="">Returns</p>
                      <p className="ptag">{this.state.farmDetails.roi}%</p>
                    </div>
                  </div>

                  <div className="row" id="row2">
                    <div className="col-md-">
                      <div className="col-md-6">
                        <p>Total units</p>
                        <p className="ptag">{this.state.farmDetails.total_units}</p>
                      </div>
                      <div className="col-md-6">
                        <p className="">Available</p>
                        <p className="ptag">{this.state.farmDetails.total_units - this.state.farmDetails.sold_out}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-">
                      <div className="col-md-6">
                        <p>Duration</p>
                        <p className="ptag">{this.calculateMonth( new Date(this.state.farmDetails.funding_starts),new Date(this.state.farmDetails.funding_ends))} month(s)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="fundh21 text-center"><strong>Confirmation</strong></h2>
                    </div>
                    <br/>
                      <div className="row text-center">
                        <div className="col-md-4">
                          <p className="">No of units</p>
                          <input name="units" type="number" className="col-sm-2 form-control input-unit"
                                 placeholder={'1 to '+(this.state.farmDetails.total_units - this.state.farmDetails.sold_out)} value={this.state.totalUnitsInput} min="1"  max={this.state.farmDetails.total_units - this.state.farmDetails.sold_out} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                          <p className="">Unit Price</p>
                          <p className="ptag">	&#8358;{this.state.farmDetails.price_per_unit}</p>
                        </div>
                        <div className="col-md-4">
                          <p className="">Return & duration</p>
                          <p className="ptag">{this.state.farmDetails.roi}% in {this.calculateMonth( new Date(this.state.farmDetails.funding_starts),new Date(this.state.farmDetails.funding_ends))} month(s)</p>
                        </div>
                      </div>
                      <div className="row text-center" id="row2">
                        <div className="col-md-4">
                          <p className="">Total Price</p>
                          <p className="ptag">	&#8358;{this.state.calcTotalPrice}</p>
                        </div>
                        <div className="col-md-4">
                          <p className="">Total Returns</p>
                          <p className="ptag">	&#8358;{this.state.calcTotalReturns}</p>
                        </div>
                        <div className="col-md-4">
                          <p className="">Total Payout</p>
                          <p className="ptag">	&#8358;{this.state.calcTotalPayOut}</p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">

                        <button type="button" onClick={this.fundNow} disabled={this.state.isEnabled?"":"disabled"} className="btn btn-success">Fund Now</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DashBoardLayOut>
    )
  }
}

export default fundFarm;
