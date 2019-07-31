import React from 'react';
import httpHelper from '../helpers/httpHelper';
import ActionButton from '../components/userStatusButton';
import isAdmin from "../middlewares/isAdmin";
import FarmTR  from "../components/farmsTableRow";
import Link from 'next/link';


class allFarmTableComponent extends React.Component{

  constructor(props){
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.state ={allFarms:[]
    };


  }

  componentDidMount() {
    isAdmin();
    this.usersData();

  }

  handleStatusChange(id,status){
    let users = this.state.users;
    users.forEach( (user,index)=> {
      if (user.id === id){
        if (status){

          users[index].user_status_name = "active";
        } else{
          users[index].user_status_name = "in-active";

        }
      }
    })
    this.setState({users:users});
    this.updateRow();
  }
  updateRow(){
    let userDom =  this.state.users.map( (user)=> {
      return <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.user_type_name}</td>
        <td>{user.user_status_name}</td>
        <td><ActionButton user={user} onStatusBtn={this.handleStatusChange} /></td>
      </tr>
    });
    this.setState({dom:userDom});
  }
  usersData(){
    httpHelper.httpReq("http://localhost:3009/api/v1/users").then( (response) =>{
      if (response.success){
        this.setState({users:response.success.data.users});
        this.updateRow();
        this.initDataTable();
      }
    })
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

  render() {
    return(
      <table className="table table-bordered datatable" id="table-3">
        <thead>
        <tr className="replace-inputs">
          <th> Name</th>
          <th>Email</th>
          <th>Access Level</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>

        {this.state.dom}
        </tbody>
        <tfoot>
        <tr>
          <th> Name</th>
          <th>Email</th>
          <th>Access Level</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        </tfoot>
      </table>
    )
  }
}

export default allFarmTableComponent;
