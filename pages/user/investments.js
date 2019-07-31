import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import payStackConf from "../../config/paystack"
import httpHelper from '../../helpers/httpHelper';
import SingleFarm from '../../components/singleFarm';
import { useRouter } from 'next/router';
import $ from 'jquery';
import Router from "next/router";


class investments extends React.Component{

  constructor(props){
    super(props);

    this.state = {investmentsRows:[]};
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

  componentDidMount() {
    this.getTableData();

  }

  getTableData(){
    httpHelper.serverReq("http://localhost:3009/api/v1/user/investments").then((response)=>{
      if (response.success){
       let rows =  response.success.data.map((investment)=>{
         let interest = (investment.invested_amount * investment.roi)/100
          return <tr className="odd gradeX" key={investment.id}>
                  <td>{investment.title}</td>
                  <td>{new Date(investment.invested_date).toDateString()}</td>
                  <td>&#8358;{investment.invested_amount}</td>
                  <td>&#8358;{investment.roi}%</td>
                  <td>{this.calculateMonth( new Date(investment.farm_starts),new Date(investment.farm_ends))} Months</td>
                  <td>{this.calculatePaymentDate(investment.invested_date,this.calculateMonth(new Date(investment.farm_starts),new Date(investment.farm_ends)))}</td>
                  <td>&#8358;{interest}</td>
                  <td>&#8358;{interest+investment.invested_amount}</td>
                  <td>{investment.investment_status}</td>
          </tr>
        });
        this.setState({investmentsRows:rows});
        this.initDataTable();

      }
    })
  }

  calculatePaymentDate(investedDate,duration){

    let date = new Date(investedDate);
    date.setMonth(new Date(investedDate).getMonth() + duration);
    return  date.toDateString();

  }


  calculateMonth(d1,d2){
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }


  render() {
    return(
      <DashBoardLayOut>
        <h2 className="text-center" id="form-head">Investments</h2>
        <br/>
        <table className="table table-bordered datatable" id="table-3">
          <thead>
          <tr className="replace-inputs">
            <th>Farm Name</th>
            <th>Investment Date</th>
            <th>Invested Amount</th>

            <th>ROI</th>
            <th>Investment Duration</th>
            <th>Cashout Date</th>
            <th>Interest</th>
            <th>Amount Payable</th>
            <th>Investment Status</th>

          </tr>
          </thead>
          <tbody>
          {this.state.investmentsRows}
          </tbody>
          <tfoot>
          <tr>
            <th>Farm Name</th>
            <th>Investment Date</th>
            <th>Invested Amount</th>
            <th>ROI</th>
            <th>Investment Duration</th>
            <th>Cashout Date</th>
            <th>Interest</th>
            <th>Amount Payable</th>
            <th>Investment Status</th>

          </tr>
          </tfoot>
        </table>
      </DashBoardLayOut>
    )
  }
}

export default investments;
