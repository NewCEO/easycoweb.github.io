import React from 'react';
import httpHelper from '../helpers/httpHelper';
import HelpBlock from '../components/HelpBlock';


class bankDetailsForm extends React.Component{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInnerChanges = props.handleChanges;
    this.state ={formValues:''
      ,
      notification:{
        state:false,
        error:false,
        text:`Update Successful`
      },
      banksDom:[]
    };


  }

  componentDidMount() {
    this.getBanks();
  }

  getBanks(){
    httpHelper.serverReq("http://localhost:3009/api/v1/banks").then( (response)=> {
      if (response.success){
       let dom = response.success.data.map(function (bank) {
         return <option value={bank.id}>{bank.name}</option>
       })
        this.setState({banksDom:dom})
      }
    })
  }
  handleChange(event){
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

  handleSubmit(event){
    event.preventDefault();
    this.setState({btnDisabled:true});
    let values = this.state.formValues;
    let formData = new FormData();

    for (var key in values){
      formData.append(key,values[key])
    }

    httpHelper.serverReq("http://localhost:3009/api/v1/user/update",formData,'Post').then( (result)=> {
      if (result.success){
        this.handleInnerChanges(this.state.formValues);
        this.setState({ notification:{
            state:true,
            error:false,
            text:`Update Successful`
          }});
      }else {
        this.setState({ notification:{
            state:true,
            error:true,
            text:`Update failed`
          }});
      }
    })
  }

  render() {
    return(
      <div>
        {          this.state.notification.state?<HelpBlock type={this.state.notification.error} text={this.state.notification.text} />:''}
        <form id="rootwizard-2" method="post" onSubmit={this.handleSubmit} className="form-wizard validate">

          <div id="collapseOne-1" className="panel-collapse collapse">
            <div className="panel-body">
              <div className="tab-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="name">Bank Name</label>
                      <select onChange={this.handleChange} name="bank" value={this.state.formValues.bank_name} className="form-control">
                        {this.state.banksDom}
                      </select>

                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="address">Bank Account Name</label>
                      <input className="form-control" onChange={this.handleChange} value={this.state.formValues.address} name="bank_acct_name" id="address_line_2"
                             placeholder=" Enter Bank Account Name"/>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="number">Bank Account Number</label>
                      <input className="form-control" onChange={this.handleChange} name="bank_acct_number" value={this.state.formValues.phone_number} id="Phone No." placeholder="Enter Bank Account Number"/>
                    </div>
                  </div>


                  {/*<div className="col-md-6">*/}
                  {/*<div className="form-group">*/}
                  {/*<label className="control-label">Old Password</label>*/}

                  {/*<div className="input-group">*/}
                  {/*<div className="input-group-addon">*/}
                  {/*<i className="entypo-key"></i>*/}
                  {/*</div>*/}

                  {/*<input type="password" className="form-control" name="password" id="password"*/}
                  {/*data-validate="required" placeholder="Enter strong password"/>*/}
                  {/*</div>*/}
                  {/*</div>*/}
                  {/*</div>*/}

                  {/*<div className="col-md-6">*/}
                  {/*<div className="form-group">*/}
                  {/*<label className="control-label">New Password</label>*/}

                  {/*<div className="input-group">*/}
                  {/*<div className="input-group-addon">*/}
                  {/*<i className="entypo-cw"></i>*/}
                  {/*</div>*/}

                  {/*<input type="password" className="form-control" name="password" id="password"*/}
                  {/*data-validate="required,equalTo[#password]"*/}
                  {/*data-message-equal-to="Passwords doesn't match." placeholder="Confirm password"/>*/}
                  {/*</div>*/}
                  {/*</div>*/}
                  {/*</div>*/}
                </div>
                <div className="col-sm-4 form-group">
                  <button style={{"font-family": "dosis"}} type="submit" className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    )
  }



}

export default bankDetailsForm;
