import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import httpHelper from '../../helpers/httpHelper';
import FollowBtn from "../../components/followBtn";
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
    this.handleFollowBtn = this.handleFollowBtn.bind(this)

  }

  static async getInitialProps({ req }) {
    return {farmId:req.params.farmId};
  }

  handleFollowBtn(value){
    let type;
    if (this.state.followed === "true"){
      type = "un-follow";
    }else{
      type = "follow";
    }
    let data = new FormData();
    httpHelper.httpReq("farms/relationship/"+this.state.farmDetails.slug+"/"+type,"","POST").then((response)=>{
      if (response.success){
        let state = this.state.followed === "true"?"false":"true";
        this.setState({followed:state});
      }
    })
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
    httpHelper.httpReq(`farms/invoice/create`,data,"POST").then(function (data) {
      if (data.success.data){
        console.log(data.success.data.authorization_url)
        window.location = data.success.data.authorization_url;
      }
    })
  }

  componentDidMount() {
    httpHelper.serverReq("farms/"+this.props.farmId).then( (data)=> {
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
        <div className="content mt-3">
          <div className="animated fadeIn">

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Farms Funded</h4>
                  </div>
                  <div className="card-body">
                    <h3 className="text-muted m-b-15 text-center Col">You are about to fund this farm!</h3>
                    <p className="text-muted m-b-15">You can fund this farm by increasing or reducing the number of
                      units to suit what you’d love to fund. As your number of farms changes, The Total Price, Total
                      Returns and Total Payout are automatically calculated for you to see. Satisfied? Click on Fund
                      Now.</p>

                  </div>
                </div>
              </div>

            </div>


            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Selected Farm</h4>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <img className="card-img-top"  src={this.state.farmDetails.images?JSON.parse(this.state.farmDetails.images)[0]:""} alt="Card image cap"/>
                        <div className="card-body">
                          <h4><a href="causes-details.html">{this.state.farmDetails.title}</a><FollowBtn followed={this.state.followed} onClickFollowBtn={this.handleFollowBtn} />
                          </h4>
                          <p className="card-text">{this.state.farmDetails.description}</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Confirmation</h4>
                  </div>
                  <div className="card-body">
                    <div className="col-md-12">

                      <br/>
                        <div className="row text-center">
                          <div className="col-md-4">
                            <p className="">No of units</p>
                            <input name="units" type="number" className="form-control input-unit"
                                   placeholder={'1 to '+(this.state.farmDetails.total_units - this.state.farmDetails.sold_out)} value={this.state.totalUnitsInput} min="1"  max={this.state.farmDetails.total_units - this.state.farmDetails.sold_out} onChange={this.handleChange}/>
                          </div>
                          <div className="col-md-4">
                            <p className="">Unit Price</p>
                            <p className="ptag">&#8358;{this.state.farmDetails.price_per_unit}</p>
                          </div>
                          <div className="col-md-4">
                            <p className="">Return & duration</p>
                            <p className="ptag">{this.state.farmDetails.roi}% in {this.calculateMonth( new Date(this.state.farmDetails.funding_starts),new Date(this.state.farmDetails.funding_ends))} month(s)</p>
                          </div>
                        </div>
                        <div className="row text-center">
                          <div className="col-md-4">
                            <p className="">Total Price</p>
                            <p className="ptag">&#8358;{this.state.calcTotalPrice}</p>

                          </div>
                          <div className="col-md-4">
                            <p className="">Total Return</p>
                            <p className="ptag">&#8358;{this.state.calcTotalReturns}</p>
                          </div>
                          <div className="col-md-4">
                            <p className="">Total Payout</p>
                            <p className="ptag">&#8358;{this.state.calcTotalPayOut}</p>
                          </div>
                        </div>
                        <div className=" but row">
                          <div className="text-center">
                            <button type="button" onClick={this.fundNow} disabled={this.state.isEnabled?"":"disabled"} className="button">Fund Now</button>
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

export default fundFarm;
