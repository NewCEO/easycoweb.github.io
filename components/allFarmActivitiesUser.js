import React from 'react';
import httpHelper from '../helpers/httpHelper';
import HelpBlock from '../components/HelpBlock';
import isAdmin from "../middlewares/isAdmin";
import TR  from "../components/activitiesTR";
import Link from 'next/link';


class allFarmTableComponent extends React.Component{

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.farmData;
      this.state ={farmId:props.farmId,allActivitiesObj:[]
    };
  }

  componentDidMount() {

  }
  handleDelete(id){
    let matchIndex;
      this.farmData.forEach((activity,index) =>{
     if (activity.id === id){
       matchIndex = index;
       return true;
     }
   });
      httpHelper.serverReq("farms/activities/"+id+"/delete","","POST").then( (result)=> {
        if (result.success){
          console.log("this was called")
          delete this.farmData[matchIndex];
          this.setState({activities:this.farmData});
          this.updateRow();
        }


      })

  }

  componentDidMount() {

    this.getFarmActivitiesData();
  }

  initDataTable(){
    jQuery('#bootstrap-data-table-export').DataTable({
      lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
      buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
    })
  }

  getFarmActivitiesData(){
    httpHelper.serverReq('farms/activities/all?farm_id[eql]='+this.state.farmId.toString()).then( (response)=> {
      if (response.success){
        this.farmData = response.success.data.activities;
        this.setState({activities:this.farmData});
        this.initDataTable();

      }
    })
  }



  render() {
    return(
      <table  id="bootstrap-data-table-export" className="table table-striped table-bordered">
        <thead>
        <tr className="text-center Col">
          <th scope="row">Date</th>
          <th>Activity</th>
          <th>Summary</th>
          <th>Information</th>
          <th>Week</th>
          <th>Stage</th>
        </tr>
        </thead>
        <tbody>

          {this.state.allActivitiesObj}
        </tbody>

      </table>
    )
  }
}

export default allFarmTableComponent;
