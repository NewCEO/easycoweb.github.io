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
    httpHelper.serverReq("banks").then( (response)=> {
      if (response.success){
        this.setState({apiBanks:response.success.data});
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
    if (name === 'bank'){
      this.state.apiBanks.forEach(function (bank) {
        if (bank.id == value){
          values['bank_name'] =  bank.name
        }
      })
    }
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

  render() {
    return(

      <div className="modal" id="bank" tabIndex="-1" role="dialog" aria-labelledby="mediumModalLabel"
           aria-hidden="true">
        {          this.state.notification.state?<HelpBlock type={this.state.notification.error} text={this.state.notification.text} />:''}

        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mediumModalLabel">Update Bank Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <form id="rootwizard-2" onSubmit={this.handleSubmit} method="post" action="" className="form-wizard validate">

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="name">Bank Name</label>
                      <select onChange={this.handleChange} name="bank" value={this.state.formValues.bank} className="form-control">
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


                </div>
                <div className="modal-footer">
                  <button type="button" className="button btn btn-secondary" data-dismiss="modal">Cancel
                  </button>
                  <button type="submit" className="button btn btn-primary">Confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }



}

export default bankDetailsForm;
