import React from 'react';
import {duration} from '../helpers/date';



class followBtn extends React.Component{

  constructor(props){
    super(props);
    this.props = props;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    let btnStatus = this.props.btnStatus;
    //if it is followed
    if (btnStatus){
      btnStatus = false
    }else{
      //unfollow farm
      btnStatus = true
    }
    this.props.onClickFollowBtn(btnStatus);
  }

  componentDidMount() {


  }


  render() {
    return(
      <a onClick={this.handleClick} style={{"font-size":"25px"}}><i className={this.props.followed === "true"?"fa fa-heart":"fa fa-heart-o"}></i><br/></a>
    )
  }
}

export default followBtn;
