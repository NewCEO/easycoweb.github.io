import React from 'react';
import DashBoardLayOut from '../../layouts/AdminDashboardLayOut';
import CreateFarmForm from '../../components/createFarm';
import isAdmin from  '../../middlewares/isAdmin';
import $ from 'jquery';
import HelpBlock from "../../components/HelpBlock";
import httpHelper from  '../../helpers/httpHelper';

class createFarm extends React.Component{

  static async getInitialProps({ req }) {
    return {farmId:req.params.farmId};
  }

  constructor(props){
      super(props)
      this.state = {formValues:{status:'1'},
          HelpBlock:{
              state:false,
              error:false,
              text:''
          },
          show:false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateInvestment = this.updateInvestment.bind(this);
  }
  updateInvestment(){
    httpHelper.httpReq()
  }
  componentDidMount() {
    isAdmin();

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


    updateInvestment(e){
      e.preventDefault();
      let formData = new FormData();
      formData.append("password",this.state.formValues.password)
        formData.append("reference",this.state.formValues.invoiceId)
      httpHelper.httpReq('farms/investment/offline/invoice/pay',formData,"POST").then((response)=>{
            if (response.success){
                this.setState({ HelpBlock:{
                        state:true,
                        error:false,
                        text:"Transaction Successful"
                    }});
            }else{
                this.setState({ HelpBlock:{
                        state:true,
                        error:true,
                        text:"Transaction failed"
                    }});
            }
      }).catch(()=>{
          this.setState({ HelpBlock:{
                  state:true,
                  error:true,
                  text:"Transaction failed"
              }});
      })
    }

    handleSubmit(e){
      e.preventDefault();
        httpHelper.httpReq("user/invoice/summary/"+this.state.formValues.invoiceId,"","GET").then((response)=>{
            if (response.success){

                this.setState({farmDet:response.success.data,show:true});
                console.log(this.state.investmentDet,'sucess data')

            }else{
                alert("An error occurred");
            }
        })
    }

  render() {
    return(
      <DashBoardLayOut>

        <hr/>
        <h2 id="form-head">Create Offline Payment</h2>
        <br/>

        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary" data-collapsed="0" id="form">
              <div className="panel-body">
                  <form role="form" id="farmForm" ref={this.form} onSubmit={this.handleSubmit} className="form-horizontal  form-groups-bordered">
                      {

                          this.state.HelpBlock.state?<HelpBlock type={this.state.HelpBlock.error} text={this.state.HelpBlock.text} />:''
                      }


                      <div className="form-group">
                          <label htmlFor="field-1" className="col-sm-3 control-label">Invoice ID</label>
                          <div className="col-sm-5">
                              <input type="text" name="invoiceId" value={this.state.formValues.invoiceId} required="required" onChange={this.handleChange} className="form-control" id="field-1" placeholder="Invoice Id" />
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="col-sm-5">
                              <button type="submit"  className="btn btn-primary" data-toggle="modal" data-target="#invoice">Submit</button>

                          </div>
                      </div>
                  </form>

              </div>
            </div>
              <div className="modal fade" id="invoice" tabIndex="-1" role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-lg" role="document">
                      <form onSubmit={this.updateInvestment}>
                        <div className="modal-content">
                          <div className="modal-header">
                              <h5>Confirmation</h5>
                          </div>
                          <div className="modal-body">
                              <h3>You are about to fund this offline transaction</h3>
                              <h3><b>Investor's Name:</b>{this.state.farmDet?this.state.farmDet.investor_name:"loading..."}</h3>
                              <h3><b>Units:</b>{this.state.farmDet?this.state.farmDet.quantity:"Loading"}</h3>
                              <h3><b>Value:</b>₦{this.state.farmDet?this.state.farmDet.quantity * this.state.farmDet.price_per_unit:""}</h3>
                              <h3>Enter Your Password to confirm this transaction</h3>
                              <div className="control-group">
                                  <div className="control-label">
                                      <label id="jform_password1-lbl" htmlFor="jform_password1"
                                             className="hasPopover required" title="Password"
                                             data-content="Enter your password to confirm this payment">
                                          Password<span className="star">&#160;*</span></label>
                                  </div>
                                  <div className="controls">
                                      <input type="password"  name="password" id="jform_password1" onChange={this.handleChange}
                                             autoComplete="off" className="validate-password required" required="required" size="30"
                                             value={this.state.formValues.password} required aria-required="true"/></div>

                              </div>
                              {

                                  this.state.HelpBlock.state?<HelpBlock type={this.state.HelpBlock.error} text={this.state.HelpBlock.text} />:''
                              }
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="button btn btn-secondary" data-dismiss="modal">Cancel
                              </button>
                              <button type="submit" className="button btn btn-primary">Confirm</button>
                          </div>
                      </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>



      </DashBoardLayOut>
    )
  }
}

export default createFarm;
