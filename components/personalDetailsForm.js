import React from 'react';
import httpHelper from '../helpers/httpHelper';
import HelpBlock from '../components/HelpBlock';


class createFarmFormComponent extends React.Component{

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
      }
    };


  }

  componentDidMount() {

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


  render() {
    return(
      <div>
        {          this.state.notification.state?<HelpBlock type={this.state.notification.error} text={this.state.notification.text} />:''}
        <form id="rootwizard-2" method="post" onSubmit={this.handleSubmit} className="form-wizard validate">

          <div id="collapseOne-2" className="panel-collapse collapse">
            <div className="panel-body">
              <div className="tab-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="name">Full Name</label>
                      <input className="form-control" onChange={this.handleChange} name="name" value={this.state.formValues.name} id="name" data-validate="required"
                             placeholder="Your full name"/>
                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="address">Address</label>
                      <input className="form-control" onChange={this.handleChange} value={this.state.formValues.address} name="address" id="address_line_2"
                             placeholder="(Optional) Address"/>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="number">Phone No.</label>
                      <input className="form-control" onChange={this.handleChange} name="phone_number" value={this.state.formValues.phone_number} id="Phone No." placeholder="Phone No."/>
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
}

export default createFarmFormComponent;
