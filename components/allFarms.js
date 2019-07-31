import React from 'react';
import httpHelper from '../helpers/httpHelper';
import HelpBlock from '../components/HelpBlock';
import isAdmin from "../middlewares/isAdmin";
import FarmTR  from "../components/farmsTableRow";
import Link from 'next/link';


class allFarmTableComponent extends React.Component{

  constructor(props){
    super(props);

    this.state ={allFarms:[]
    };


  }

  componentDidMount() {
    isAdmin();
    this.getFarmsData();

  }
  calculateMonth(d1,d2){
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
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
  getFarmsData(){
    httpHelper.serverReq('http://localhost:3009/api/v1/farms/all').then( (data)=> {
      console.log(data);
      if (data.success){
        let farms = data.success.data.farms;
        let editedFarms =  farms.map(farm=>
         <FarmTR key={farm.id} farmDetails={farm} />
        );
        this.setState({allFarms : editedFarms});
        this.initDataTable();

      }
    })
  }
  
  render() {
    return(
      <table className="table table-bordered datatable" id="table-3">
        <thead>
        <tr className="replace-inputs">
          <th>Farm Name</th>
          <th>Duration</th>
          <th>Price</th>
          <th>Interest</th>
          <th>Total Units Available</th>
          <th>Total Units Bought</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>

        {this.state.allFarms}
        </tbody>
        <tfoot>
        <tr>
          <th>Farm Name</th>
          <th>Duration</th>
          <th>Price</th>
          <th>Interest</th>
          <th>Total Units Available</th>
          <th>Total Units Bought</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        </tfoot>
      </table>
    )
  }
}

export default allFarmTableComponent;
