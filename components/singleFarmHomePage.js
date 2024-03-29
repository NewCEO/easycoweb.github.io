import React from 'react';
import {duration} from '../helpers/date';
import FollowBtn from "../components/followBtn";
import httpHelper from '../helpers/httpHelper';
import Link from 'next/link';
import status from '../config/status';


class singleFarm extends React.Component{

  constructor(props){
    super(props);
    this.state = {details:props.details,followed:props.details.followed};
    this.handleFollowBtn = this.handleFollowBtn.bind(this);
    this.isLoggedIn      = props.isLoggedIn;

  }

  handleFollowBtn(value){
    let type;
    if (this.state.followed === "true"){
      type = "un-follow";
    }else{
      type = "follow";
    }
    let data = new FormData();
    httpHelper.httpReq("farms/relationship/"+this.state.details.slug+"/"+type,"","POST").then((response)=>{
      if (response.success){
        let state = this.state.followed === "true"?"false":"true";
        this.setState({followed:state});
      }
    })
  }

  render() {
    //Choose button type logic
    let button;
    if(this.isLoggedIn){
      //if farm is active show the invest now button else don't show any button for the user
      if ((this.state.details.status === status.active || this.state.details.status === status.soldout)){
        button = <Link href={"/user/farm/"+this.state.details.slug+"/fund"}>
          <button className="theme-btn-two">Invest Now</button>
        </Link>;
      }
    }else{
      //if the user is not logged in show the invest button just that when the user clicks on it it pops out the login or sign up button

      button = 	<button className="donate-box-btn  theme-btn-two">Invest Now</button>;


    }

    return(
      <div className="single-cause-content inner-box">
        <figure className="image-box">
          <img src={this.state.details.images?JSON.parse(this.state.details.images)[0]:""} alt=""/>

          <div className="overlay-box">
            <div className="overlay-inner">
            </div>
          </div>
        </figure>
        <div className="lower-content">
          <h4><a  href={"/user/farm/"+this.state.details.slug}>{this.state.details.title}</a>
            <FollowBtn followed={this.state.followed} onClickFollowBtn={this.handleFollowBtn} />

          </h4>
          <div className="text">{this.state.details.description}</div>

          <div className="progress-box">
            <div className="progress" data-value={(this.state.details.sold_out/this.state.details.total_units)*100} >
              <div className="progress-bar" role="progressbar" aria-valuenow={(this.state.details.sold_out/this.state.details.total_units)*100} aria-valuemin="0"
                   aria-valuemax="100">
                <div className="value-holder"><span className="value"></span>%-SOLD OUT</div>
              </div>
            </div>
          </div>
          <ul className="price clearfix">
            <li>Price/Unit: <span><h3>₦{this.state.details.price_per_unit}</h3></span></li>
            <li>Return: <span><h2>{this.state.details.roi}%</h2></span></li>
          </ul>
          <ul className="price clearfix pos">
            <li>Duration:<span><h3>{duration( new Date(this.state.details.farm_starts),new Date(this.state.details.farm_ends))} month(s)</h3></span></li>
          </ul>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="donate-box text-center">

            {button}
          </div>
        </div>
      </div>

    )
  }
}

export default singleFarm;
