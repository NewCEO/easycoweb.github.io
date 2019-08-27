import React from 'react';
import StaticLayout from '../layouts/StaticLayOut';
import httpHelper from '../helpers/httpHelper'
import AllFarms from '../components/allFarmsHomePage';
import HelpBlock from "../components/HelpBlock";
class Index extends React.Component{

  static async getInitialProps({ req }) {
    return {email:req.query.email,validation_key : req.query.key };
  }

  constructor(props){
    super(props);
    this.state = {
      status:"Verifying your account please wait.....",
      farmsUI:[]
    }
  }

  componentDidMount() {
    this.validateUser();
  }


  validateUser(){
    let formData = new FormData();
    formData.append('email',this.props.email);
    formData.append('validation_key',this.props.validation_key);
    httpHelper.httpReq('user/verify',formData,"POST").then((response)=>{
      if (response.success){
        this.setState({status:<HelpBlock  type="fasle" text={ <a href="/">Congratulations your account was successfully activated  Login</a>} />})

      } else{
        this.setState({status:<HelpBlock  type="true" text="We could't verify your account at this time" />})

      }
    })
  }


  render() {
    return(
      <div>

        {this.state.status}

      </div>

    )
  }
}

export default Index;
