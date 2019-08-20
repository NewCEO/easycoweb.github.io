import React from 'react';
import {duration} from '../helpers/date';
import FollowBtn from "../components/followBtn";
import httpHelper from '../helpers/httpHelper';
import Link from 'next/link';



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
    httpHelper.httpReq("farms/relationship/"+this.state.details.slug+"/"+type,"","POST").then((response)=>{
      if (response.success){
        let state = this.state.followed === "true"?"false":"true";
        this.setState({followed:state});
      }
    })
  }

  render() {

    return(

      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={this.state.details.images?JSON.parse(this.state.details.images)[0]:""} alt="Card image cap"/>
            <div className="card-body">
              <h4>
                <a href={"/user/farm/"+this.state.details.slug}>{this.state.details.title}</a>
                <FollowBtn followed={this.state.followed} onClickFollowBtn={this.handleFollowBtn} />
              </h4>
              <p className="card-text">{this.state.details.description}</p>
              <ul className="price clearfix">
                <li className="li">Price: <span><h3>₦{this.state.details.price_per_unit}</h3></span></li>
                <li className="li" id="right">Return: <span><h2>{this.state.details.roi}% </h2></span></li>
              </ul>
              <ul className="price clearfix">
                <li>Duration:<span><h3>{duration( new Date(this.state.details.farm_starts),new Date(this.state.details.farm_ends))} months</h3></span></li>
              </ul>
              <div className="text-center">
                <Link href={"/user/farm/"+this.state.details.slug+"/fund"}>
                <button className="button">Invest Now</button>
                </Link>
              </div>
            </div>
        </div>
      </div>


    )
  }
}

export default singleFarm;
