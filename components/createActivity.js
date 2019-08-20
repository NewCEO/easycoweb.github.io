import React from 'react';
import httpHelper from '../helpers/httpHelper';
import HelpBlock from '../components/HelpBlock';


class createFarmActivityComponent extends React.Component{

  constructor(props){
    super(props);
    this.handleChange       = this.handleChange.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleFileUpload   = this.handleFileUpload.bind(this);
    this.addThumbnailButton = this.addThumbnailButton.bind(this);
    this.fileInput          = React.createRef();
    this.form               = React.createRef();

    this.editFarmId = props.farmId;
    this.state ={location:''
    };

    this.state = {formValues:{status:'1'},
      farmNotification:{
        state:false,
        error:false,
        text:''
      },
      thumbnailCount:0,
      images:{},
      imageThumbnails:[],
      farmId:props.farmId,
    }


  }

  manageImageThumbnail(){

  }

  handleImageAdd(){
    let count = this.state.thumbnailCount + 1;
    this.setState({thumbnailCount:count});
    let node = <input type="file" className="form-control" multiple="multiple" ref={this.fileInput} onChange={this.handleFileUpload} name={`thumbNail[${count}]`} id="field-file" placeholder="Placeholder" />;

    let prevNode  = this.state.imageThumbnails||[];
      prevNode.push(node);
      return prevNode;
  }

  addThumbnailButton(e){
    e.preventDefault();
    this.setState({imageThumbnails:this.handleImageAdd()});
  }

  componentDidMount() {
    this.getLocations();
    this.getCategories();
    this.setState({imageThumbnails:this.handleImageAdd()});
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
    httpHelper.serverReq('farms/activities/create/'+this.state.farmId).then( (locations)=> {
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
      if (key === "image_updates"){
        values[key].forEach(function (value,index) {
          formData.append(`image_update[${index}]`,value)
        })
      }else{
        formData.append(key,values[key])
      }
    }
    this.setState({btnDisabled:false});

    let url = 'farms/activities/create/'+this.state.farmId

    httpHelper.serverReq(url,formData,'POST').then( (result)=> {
      if (result.success){
        let temp = {};

          for (var key in values){
            temp[key] = ""
          }

          this.form.current.reset();

          this.setState({formValues:temp})


        this.setState({ farmNotification:{
            state:true,
            error:false,
            text:`Activity added successfully`
          }});
      }
    })
  }

  handleFileUpload() {
    let file = this.fileInput.current.files[0];
    let name = this.fileInput.current.name;
    let values;
    let images = this.state.images;

    images[name] = file;
    let formValuesImages = [];
    for(var index in images){
      formValuesImages.push(images[index]);
    }

    this.state.formValues?values  = this.state.formValues:values={};
    values["image_updates"]       = formValuesImages;
    this.setState({
      formValues: values
    });
  }

  render() {
    return(
      <form role="form" id="farmForm" ref={this.form} onSubmit={this.handleSubmit} className="form-horizontal  form-groups-bordered">
        {
          this.state.farmNotification.state?<HelpBlock type={this.state.farmNotification.error} text={this.state.farmNotification.text} />:''
        }
        <div className="form-group">
          <label htmlFor="field-1" className="col-sm-3 control-label">Activity </label>

          <div className="col-sm-5">
            <input type="text" name="activity" value={this.state.formValues.description} required="required" onChange={this.handleChange} className="form-control" id="field-1" placeholder="Add an Activity" ></input>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="field-1" className="col-sm-3 control-label">Information</label>

          <div className="col-sm-5">
            <input type="text" name="information" value={this.state.formValues.title} required="required" onChange={this.handleChange} className="form-control" id="field-1" placeholder="Activity Information" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="field-1" className="col-sm-3 control-label">Summary</label>

          <div className="col-sm-5">
            <textarea type="text" name="summary" value={this.state.formValues.description} required="required" onChange={this.handleChange} className="form-control" id="field-1" placeholder="Activity Summary" ></textarea>
          </div>
        </div>




        <div className="form-group">
          <label className="col-sm-3 control-label">Week</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="number" min="0" value={this.state.formValues.price_per_unit}  onChange={this.handleChange} required="required" name="weeks" className="form-control" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 control-label">Stage</label>

          <div className="col-sm-5">
            <div className="input-group">
              <input type="number" min="0" value={this.state.formValues.price_per_unit}  onChange={this.handleChange} required="required" name="stage" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="field-1" className="col-sm-3 control-label">Activity Images</label>

          <div className="col-sm-5">
            {this.state.imageThumbnails.map(function (thu) {
              return thu
            })}
            <button className="btn btn-primary" onClick={this.addThumbnailButton}>Add</button>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

    )
  }
}

export default createFarmActivityComponent;
