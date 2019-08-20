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
    jQuery('#bootstrap-data-table-export').DataTable({
      lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
      buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
    })
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
      }

      this.initDataTable();
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

        <div className="card ground">
          <div className="card-header">
            <h4>My Investments</h4>
          </div>
          <div className="card-body" style={{background:"white"}}>
            <table  id="bootstrap-data-table-export" className="table table-striped table-bordered" >
              <thead >
              <tr  className="text-center Col">
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

            </table>
          </div>
        </div>


      </DashBoardLayOut>
    )
  }
}

export default investments;
