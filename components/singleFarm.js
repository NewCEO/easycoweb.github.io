import React from 'react';
import {duration} from '../helpers/date';
import FollowBtn from "../components/followBtn"
import httpHelper from '../helpers/httpHelper';



class singleFarm extends React.Component{

  constructor(props){
    super(props);
    this.state = {details:props.details,followed:props.details.followed};
    this.handleFollowBtn = this.handleFollowBtn.bind(this)

  }

  componentDidMount() {


  }
  handleFollowBtn(value){
    let type;
    if (this.state.followed === "true"){
      type = "un-follow";
    }else{
      type = "follow";
    }
    let data = new FormData();
    httpHelper.httpReq("http://localhost:3009/api/v1/farms/relationship/"+this.state.details.slug+"/"+type,"","POST").then((response)=>{
      if (response.success){
        let state = this.state.followed === "true"?"false":"true";
        this.setState({followed:state});
      }
    })
  }

  render() {

    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail cus-background-grey cus-zero-padding">
          <div className="cus-thumbnail-image-container">

            <img src={this.state.details.images?JSON.parse(this.state.details.images)[0]:""} alt="" className="img-responsive"/>
          </div>
          <div className="cus-flex-row container-fluid cus-flex-align-center cus-background-white">
            <div className="cus-flex-8" style={{"text-align":"left"}} >
              <a href={"/user/farm/"+this.state.details.slug}><h3>{this.state.details.title}</h3></a>
            </div>
            <div className="cus-flex-2 cus-align-center">
              <FollowBtn followed={this.state.followed} onClickFollowBtn={this.handleFollowBtn} />
              <div>
                <span className="badge badge-success badge-roundless" id="">Open</span>
              </div>
            </div>
          </div>
          <div className=" container-fluid caption">

            <div className="cus-thumbnail-contents">
              <div className="row">
                <div className="col-md-5">
                  <h4>Price/unit</h4>
                  <p className="ptag">₦{this.state.details.price_per_unit}</p>
                </div>
                <div className="col-md-7 cus-text-right">
                  {/*<p className="">Returns</p>*/}
                  <p className="ptag" style={{"font-size":"35px"}}>{this.state.details.roi}% <span style={{"font-size":"15px",color:'grey'}}>ROI</span></p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4>Duration</h4>
                  <p className="ptag">{duration( new Date(this.state.details.farm_starts),new Date(this.state.details.farm_ends))} Months</p>
                </div>
                <div className="col-md-6 cus-text-right" >
                  <h4 className="">Units Available</h4>
                  <p className="ptag">{this.state.details.total_units - this.state.details.sold_out}</p>
                </div>
              </div>
              <div className="row">
                {/*<div className="col-md-6">*/}
                  {/*<a href="#" className="btn btn-primary" role="button">Details</a>*/}
                {/*</div>*/}
                <div className="col-md-8 col-md-offset-2">
                  <a href={"/user/farm/"+this.state.details.slug+"/fund"} className="btn btn-primary btn-lg cus-block-btn cus-invest-btn-container" role="button">
                    <div className="cus-invest-btn-text">
                      Invest <i
                        className="fa fa-long-arrow-right"></i>
                    </div>
                    <div className="cus-invest-icon">
                      <img src="https://library.kissclipart.com/20180830/bow/kissclipart-save-money-flat-icon-clipart-saving-money-computer-9834d44646c66b72.png" />
                    </div>


                  </a>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    )
  }
}

export default singleFarm;
