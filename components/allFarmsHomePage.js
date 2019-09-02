import React from 'react';
import httpHelper from "../helpers/httpHelper";
import SingleFarm from "../components/singleFarmHomePage";
import status from '../config/status';


class allFarmTableComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      farms:"Loading..."
    }

    this.props = props;

    this.state = {

      userType:false
    };

    this.state = {
      userIn:false,
    };
  }


  getFarms(){
    httpHelper.httpReq(this.props.url).then( (response)=> {
      if (response.success){


        let ui =   response.success.data.farms.map( (farm)=> {
          return <SingleFarm key={farm.farm_id} details={farm} isLoggedIn={this.state.userIn}/>
        });
        this.setState({farms:ui});
        //Init slider in home page
      }
      this.props.loadSlider()

    }).catch(()=>{
      //In case it fails still load the sliders
      this.props.loadSlider()

    })
  }

  getLoggedInUserDetails(){
    httpHelper.httpReq('user').then((response)=>{
      //Check if the user is logged in before getting the farms to determine how to display the "invest now button"
      this.getFarms();
      if (response.success){
        this.setState({userType:response.success.data.user_type,userIn:true});

      }else{
        this.setState({userIn:false})

      }
    }).catch(()=>{
      this.setState({userIn:false})
    })
  }

  componentDidMount() {
    this.getLoggedInUserDetails();
  }

  render() {
    return(
      <div className="three-column-carousel">
        {this.state.farms}
      </div>
    )
  }
}

export default allFarmTableComponent;
