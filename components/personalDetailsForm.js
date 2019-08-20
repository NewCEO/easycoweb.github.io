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
      <div className="modal fade" id="profile" tabIndex="-1" role="dialog" aria-labelledby="smallmodalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="smallmodalLabel">Personal Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="rootwizard-2" onSubmit={this.handleSubmit} method="post" action="" className="form-wizard validate">

            <div className="modal-body">
              {  this.state.notification.state?<HelpBlock type={this.state.notification.error} text={this.state.notification.text} />:''}
                <div className="panel-body">
                  <div className="tab-content">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label" htmlFor="name">Full Name</label>
                          <input className="form-control" onChange={this.handleChange} name="name" value={this.state.formValues.name} id="name" data-validate="required" placeholder="Your full name"/>
                        </div>
                      </div>


                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label" htmlFor="address">Address</label>
                          <input className="form-control" onChange={this.handleChange} value={this.state.formValues.address} name="address" id="address_line_2" placeholder="(Optional) Address"/>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label" htmlFor="number">Phone No.</label>
                          <input className="form-control" onChange={this.handleChange} name="phone_number" value={this.state.formValues.phone_number} id="Phone No." placeholder="Phone No."/>

                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Old Password</label>

                          <div className="input-group">
                            <div className="input-group-addon">
                              <i className="entypo-key"></i>
                            </div>

                            <input type="password" className="form-control" name="password" id="password"
                                   data-validate="required" placeholder="Enter strong password"/>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">New Password</label>

                          <div className="input-group">
                            <div className="input-group-addon">
                              <i className="entypo-cw"></i>
                            </div>

                            <input type="password" className="form-control" name="password" id="password"
                                   data-validate="required,equalTo[#password]"
                                   data-message-equal-to="Passwords doesn't match." placeholder="Confirm password"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
            <div className="modal-footer">
              <button type="button" className=" button btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="submit" className=" button btn btn-primary">Confirm</button>
            </div>
            </form>
          </div>
        </div>
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

    httpHelper.serverReq("user/update",formData,'Post').then( (result)=> {
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
