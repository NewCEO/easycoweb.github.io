import React from 'react';
import DashBoardLayOut from '../../layouts/AdminDashboardLayout';
import CreateFarmForm from '../../components/createFarm';
import isSuperAdmin from  '../../middlewares/isSuperAdmin';
import $ from 'jquery';
import httpHelper from "../../helpers/httpHelper";
import HelpBlock from '../../components/HelpBlock';
import UserFormHelpText from "../../components/FormHelpText";

class createFarm extends React.Component{

  static async getInitialProps({ req }) {
    return {farmId:req.params.farmId};
  }

  constructor(props){
    super(props);
    this.state = {
      name:'',
      redirect:false,
      emailHelpText :{
        state:false,
        error:false,
        text:''
      },
      nameHelpText:{
        state:false,
        error:false,
        text:''
      },
      helpBlock:{
        state:false,
        error:false,
        text:''
      },
      userTypes:[],
      formValues:{status:'1'}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    isSuperAdmin();
    this.getUseTypes();

  }

  handleChange(e){

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    switch (target.name) {
      case 'name':
        this.validateName(target.value);
        break;

      case 'email':
        this.validateEmail(target.value);
        break;
    }

  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ loginHelpBlock:{
        state:false,
        error:false,
        text:''
      }});

    let formData = new FormData();
    formData.append('name',this.state.name);
    formData.append('email',this.state.email);
    formData.append('user_type',this.state.user_type);




    httpHelper.httpReq('user/admin/create',formData,'POST')
      .then((response)=>{
        if (response.success){
          this.setState({ helpBlock:{
              state:true,
              error:false,
              text:'user created successfully'
            }});
        }else{
          this.setState({ helpBlock:{
              state:true,
              error:true,
              text:'error creating user'
            }});
        }
      }).catch((error)=>{
      this.setState({ helpBlock:{
          state:true,
          error:true,
          text:'error creating user'
        }});
      });

  }

  validateEmail(email){
    if (email !== 'undefined'){
      return new Promise( (resolve,reject)=> {
        httpHelper.httpReq('email/exists?email='+email,'','GET')
          .then((result)=>{
            // console.log(JSON.stringify(result),'does email exist');
            if (result.success.data === "true"){
              console.log("this is true")
              this.setState({
                emailHelpText:{
                  state:true,
                  error:true,
                  text:'Email already exist'
                }
              });
            }else{
              this.setState({
                emailHelpText:{
                  state:false,
                  error:false,
                  text:' '
                }
              });
            }
            resolve(this.state.emailHelpText.error);
          }).catch((error)=>{
          this.setState({
            emailHelpText:{
              state:true,
              error:true,
              text:'An error occurred'
            }
          });
        });
      })
    }else{
      this.setState({
        emailHelpText:{
          state:true,
          error:true,
          text:'Email already exist'
        }
      })
    }


  }



  validateName(input){
    if (input.trim() === ''){
      this.setState({nameHelpText:{
          state:true,
          error:true,
          text:'Name is required'
        }});
      return false;
    }else{
      this.setState({nameHelpText:{
          state:false,
          error:false,
          text:'Name is required'
        }});
      return true;
    }
  }

  getAdminTypes(){
    httpHelper.serverReq('farms/all').then( (response)=> {
      if (response.success){
        this.setState({userTypes:response.success.data});
      }
    })
    }

    getUseTypes(){
      httpHelper.httpReq("users/types").then( (response)=> {
        if (response.success){

          this.setState({userTypes:response.success.data});
        }
      })
    }
  render() {
    return(
      <DashBoardLayOut>
        <hr/>
        <h2 id="form-head">Create Admin User</h2>
        <br/>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary" data-collapsed="0" id="form">
              <div className="panel-body">
                <form role="form" id="farmForm" ref={this.form} onSubmit={this.handleSubmit} className="form-horizontal  form-groups-bordered">
                  {

                    this.state.helpBlock.state?<HelpBlock type={this.state.helpBlock.error} text={this.state.helpBlock.text} />:''
                  }

                  <div className="form-group">
                    <label htmlFor="field-1" className="col-sm-3 control-label"> Name</label>

                    <div className="col-sm-5">
                      <input type="text" name="name" value={this.state.name} required="required" onChange={this.handleChange} className="form-control" id="field-1" placeholder="Enter User's Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="field-1" className="col-sm-3 control-label">Email</label>

                    <div className="col-sm-5">
                      <input type="email" name="email" value={this.state.email} required="required" onChange={this.handleChange} className="form-control" id="field-1" placeholder="Enter User's Email" />

                      {

                        this.state.emailHelpText.state?<UserFormHelpText type={this.state.emailHelpText.error} text={this.state.emailHelpText.text} />:''
                      }
                    </div>

                  </div>
                  <div className="form-group">
                    <label htmlFor="field-1" className="col-sm-3 control-label"> User Types</label>

                    <div className="col-sm-5">
                      <select name="user_type" value={this.state.user_type} onChange={this.handleChange}  className="form-control">
                        {this.state.userTypes.map( (type)=> {
                          return <option value={type.id}>{type.name}</option>
                        })}
                      </select>

                    </div>
                  </div>

                  <div className="col-sm-5">
                    <button className="btn btn-primary">Create</button>
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
