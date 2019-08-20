import React from 'react';
import httpHelper from '../helpers/httpHelper';
import status from "../config/status";
import {duration} from '../helpers/date';



class followBtn extends React.Component{

  constructor(props){
    super(props);
    this.props = props;
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props.user.status,'status');
    if (this.props.user.status === status.active){
      this.state = {btnStatus:true}
    }else{
      this.state = {btnStatus:false}

    }
  }


  handleClick(e){
    let type;
    if (this.state.btnStatus){
      type = 'de-activate'
    }else{
      type = 'activate'
    }
    httpHelper.httpReq("user/"+this.props.user.id+"/status/"+type).then( (user)=> {
      if (this.state.btnStatus){
        this.setState({btnStatus:false})
      }else{
        this.setState({btnStatus:true})
      }
      this.props.onStatusBtn(this.props.user.id,this.state.btnStatus)
    })
  }

  componentDidMount() {


  }


  render() {
    return(
     this.state.btnStatus?<button className="btn btn-danger"  onClick={this.handleClick}>De-activate</button>:<button className="btn btn-info"  onClick={this.handleClick}>Activate</button>
    )
  }
}

export default followBtn;
