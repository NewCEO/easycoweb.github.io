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
    isAdmin();

  }
  handleDelete(id){
    let matchIndex;
      this.farmData.forEach((activity,index) =>{
     if (activity.id === id){
       matchIndex = index;
       return true;
     }
   });
      httpHelper.serverReq("http://localhost:3009/api/v1/farms/activities/"+id+"/delete","","POST").then( (result)=> {
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
    jQuery(document).ready(function($) {
      var $table3 = jQuery("#table-3");

      var table3 = $table3.DataTable({
        "aLengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ]
      });

      // Initalize Select Dropdown after DataTables is created
      $table3.closest('.dataTables_wrapper').find('select').select2({
        minimumResultsForSearch: -1
      });

      // Setup - add a text input to each footer cell
      $('#table-3 tfoot th').each(function() {
        var title = $('#table-3 thead th').eq($(this).index()).text();
        $(this).html('<input type="text" class="form-control" placeholder="Search ' + title + '" />');
      });

      // Apply the search
      table3.columns().every(function() {
        var that = this;

        $('input', this.footer()).on('keyup change', function() {
          if (that.search() !== this.value) {
            that
              .search(this.value)
              .draw();
          }
        });
      });
    });
  }

  getFarmActivitiesData(){
    httpHelper.serverReq('http://localhost:3009/api/v1/farms/activities/all?farm_id[eql]='+this.state.farmId.toString()).then( (response)=> {
      if (response.success){
        this.farmData = response.success.data.activities;
        this.setState({activities:this.farmData});
        this.updateRow();
        this.initDataTable();

      }
    })
  }

  updateRow(){
    let allActivitiesObj =  this.state.activities.map(activity=>
      <TR key={activity.id} onDelete={this.handleDelete} data={activity} />
    );
    this.setState({allActivitiesObj:allActivitiesObj});
  }

  render() {
    return(
      <table className="table table-bordered datatable" id="table-3">
        <thead>
        <tr className="replace-inputs">
          <th>Date</th>
          <th>Activity</th>
          <th>Summary</th>
          <th>Information</th>
          <th>Week</th>
          <th>Stage</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>

          {this.state.allActivitiesObj}
        </tbody>
        <tfoot>
        <tr>
          <th>Date</th>
          <th>Activity</th>
          <th>Summary</th>
          <th>Information</th>
          <th>Week</th>
          <th>Stage</th>
          <th>Actions</th>
        </tr>
        </tfoot>
      </table>
    )
  }
}

export default allFarmTableComponent;
