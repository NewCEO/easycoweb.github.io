import React from 'react';
import {duration} from '../helpers/date';
import httpHelper from "../helpers/httpHelper";



class payInvestor extends React.Component{

  constructor(props){

    super(props);
    this.props = props;
    this.state = {formValues:""}
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel= this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  componentDidMount() {

  }

  handleCancel(e){
    e.preventDefault();
    let dom = "";
    this.props.onPay(dom);
  }

  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("password",this.state.formValues.password);
    httpHelper.httpReq("http://localhost:3009/api/v1/farms/investment/"+this.props.investmentId+"/pay",formData,"POST").then( (response)=> {
      if (response.success){
        this.props.onPaySuccess(this.props.investmentId);
      }
      this.props.onPay("");
    })
  }

  handleChange(){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let values;
    this.state.formValues?values = this.state.formValues:values={};
    values[name] = value;
    this.setState({
      formValues: values
    });
  }


  handleClick(e){

    e.preventDefault();
    let dom = <div>
                <form onSubmit={this.handleSubmit}>
                  <div className="control-group">
                    <div className="control-label">
                      <label id="jform_password1-lbl" htmlFor="jform_password1"
                             className="hasPopover required" title="Password"
                             data-content="Enter your password to confirm this payment">
                        Password<span className="star">&#160;*</span></label>
                    </div>
                    <div className="controls">
                      <input type="password" name="password" id="jform_password1" onChange={this.handleChange}
                             autoComplete="off" className="validate-password required" size="30"
                             value={this.state.formValues.password} required aria-required="true"/></div>
                    <button className="btn btn-danger">Pay Now</button><button onClick={this.handleCancel} className="btn btn-info">Cancel</button>

                  </div>
                </form>
              </div>
    this.props.onPay(dom);

  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick} className="btn btn-danger">Pay</button>

      </div>

    )
  }
}

export default payInvestor;
