import React from 'react';
import httpHelper from '../helpers/httpHelper';
import HelpBlock from '../components/HelpBlock';


class createFarmFormComponent extends React.Component{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.fileInput = React.createRef();
    this.form      = React.createRef();

    this.editFarmId = props.farmId;
    this.state ={location:''
    };

    this.state = {formValues:{status:'1'},
      farmNotification:{
        state:false,
        error:false,
        text:''
      }
    }

  }

  componentDidMount() {
    this.getLocations();
    this.getCategories();
    if (this.editFarmId){
      httpHelper.serverReq('farms/'+this.editFarmId).then( (data)=>{
        if (data.success){
          let formValues = {};
          for (var key in data.success.data){
            if (key === "funding_starts" || key === "funding_ends" || key === "farm_starts" || key === "farm_ends"){
              let date = new Date(data.success.data[key]);
              formValues[key] = `${date.getFullYear().toString()}-${date.getMonth()<11?"0"+date.getMonth().toString():date.getMonth().toString()}-${date.getDate() < 11?"0"+date.getDate().toString():date.getDate().toString()}`

              console.log(formValues[key],'date')
            }else{
              formValues[key] = data.success.data[key];
            }
          }
          this.setState( {formValues:formValues})
        }
      })
    }
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

  getLocations(){
    let htmlLocations = [];
    httpHelper.serverReq('locations').then( (locations)=> {
      locations.success.data.forEach((location)=>{
        htmlLocations.push( <option value={location.id} >{location.name}</option>);
      });
      this.setState({location: htmlLocations});
    })
  }

  getCategories(){
    let htmlCategories = [];
    httpHelper.serverReq('farms/categories').then( (categories)=> {
      categories.success.data.forEach((category)=>{
        htmlCategories.push( <option value={category.id} >{category.name}</option>);
      });
      this.setState({categories: htmlCategories});
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({btnDisabled:true});
    let values = this.state.formValues;
    let formData = new FormData();
    for (var key in values){
      formData.append(key,values[key])
    }
    this.setState({btnDisabled:false});
    let url;
    if (this.props.farmId){
      url = 'farms/update/'+this.props.farmId;
    }else{
      url = 'farms/create'
    }
    httpHelper.serverReq(url,formData,'Post').then( (result)=> {
      if (result.success){
        let temp = {};
        if (!this.props.farmId){

          for (var key in values){
            temp[key] = ""
          }
          this.setState({formValues:temp})
        }

        this.setState({ farmNotification:{
            state:true,
            error:false,
            text:`Farm ${this.props.farmId?'edited':'created'} successfully`
          }});
      }
    })
  }

  handleFileUpload() {
    let file = this.fileInput.current.files[0];
    let name = this.fileInput.current.name;
    let values;
    console.log(this.fileInput.current);

    this.state.formValues?values = this.state.formValues:values={};
    values[name] = file;
    this.setState({
      formValues: values
    });
   // console.log(this.fileInput,'file input');
  }

  render() {
    return(
      <form role="form" id="farmForm" ref={this.form} onSubmit={this.handleSubmit} className="form-horizontal  form-groups-bordered">
        {

          this.state.farmNotification.state?<HelpBlock type={this.state.farmNotification.error} text={this.state.farmNotification.text} />:''
        }
        <div className="form-group">
          <label htmlFor="field-1" className="col-sm-3 control-label">Farm Name</label>

          <div className="col-sm-5">
            <input type="text" name="title" value={this.state.formValues.title} required="required" onChange={this.handleChange} className="form-control" id="field-1" placeholder="Farm Title" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="field-1" className="col-sm-3 control-label">Farm Description</label>

          <div className="col-sm-5">
            <textarea type="text" name="description" value={this.state.formValues.description} required="required" onChange={this.handleChange} className="form-control" id="field-1" placeholder="Farm Title" ></textarea>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="field-2" className="col-sm-3 control-label">Location</label>

          <div className="col-sm-5">
            <select name="location"  onChange={this.handleChange} value={this.state.formValues.location} required="required" className="form-control" id="field-2" placeholder="Placeholder" >
              <option>select a location</option>
              {this.state.location}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 control-label">Price Per Unit</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="number" min="0" value={this.state.formValues.price_per_unit}  onChange={this.handleChange} required="required" name="price_per_unit" className="form-control" />
              <span className="input-group-addon">.00</span>
            </div>
          </div>
        </div>


        <div className="form-group">
          <label className="col-sm-3 control-label">ROI</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="number" name="roi" min="0" max="100" value={this.state.formValues.roi} onChange={this.handleChange} className="form-control" />
              <span className="input-group-addon">%</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 control-label">Units available</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="number" name="total_units" min="0"  value={this.state.formValues.total_units} required="required" onChange={this.handleChange} className="form-control" />
              <span className="input-group-addon">.00</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 control-label">Funding Starts</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="date" name="funding_starts" required="required" value={this.state.formValues.funding_starts} onChange={this.handleChange} className="form-control" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 control-label">Funding Ends</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="date" onChange={this.handleChange} value={this.state.formValues.funding_ends} required="required" name="funding_ends" className="form-control" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 control-label">Farm Opens</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="date" name="farm_starts"  onChange={this.handleChange} required="required" value={this.state.formValues.farm_starts} className="form-control" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 control-label">Farm Closes</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="date" required="required"  onChange={this.handleChange} value={this.state.formValues.farm_ends} name="farm_ends" className="form-control" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="field-2" className="col-sm-3 control-label">Category</label>

          <div className="col-sm-5">
            <select name="category" required="required"  onChange={this.handleChange} className="form-control" id="field-2" value={this.state.formValues.category} placeholder="Placeholder" >
              <option>select a category</option>
              {this.state.categories}

            </select>
          </div>
        </div>



        <div className="form-group">
          <label htmlFor="field-1" className="col-sm-3 control-label">Farm photo Thumbnail</label>

          <div className="col-sm-5">
            <input type="file" className="form-control" multiple="multiple" ref={this.fileInput} onChange={this.handleFileUpload} name="farmThumbNail" id="field-file" placeholder="Placeholder" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label">Activate</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="checkbox" value="1" name="active"  onChange={this.handleChange} required="required" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-5">
            <button type="sumbit" disabled={ this.state.btnDisabled ?"disabled":'' } className="btn btn-primary">Submit</button>

          </div>
        </div>
      </form>

    )
  }
}

export default createFarmFormComponent;
