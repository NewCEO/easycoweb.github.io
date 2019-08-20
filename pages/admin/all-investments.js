import React            from 'react';
import DashBoardLayOut  from '../../layouts/AdminDashboardLayout';
import httpHelper       from "../../helpers/httpHelper";
import PayInvestor      from "../../components/payInvestor"
import status           from "../../config/status";

class allInvestments extends React.Component{

  static async getInitialProps({ req }) {
    return {farmId:req.params.farmId};
  }
  constructor(props){
    super(props);
    this.state = {farmDet:"",confirmPayment:false}
    this.managePayment = this.managePayment.bind(this);
    this.onPaySuccess  = this.onPaySuccess.bind(this);
  }
  componentDidMount() {
    this.getInvestors();
  }

  managePayment(dom){
    this.setState({confirmPayment:dom})
  }

  onPaySuccess(investmentId){
     let newInvestments;
     this.state.investments.forEach( (investment,index)=> {
       if (investment.id === investmentId){
         newInvestments = this.state.investments;
         newInvestments[index].investment_status = "reimbursed";
         newInvestments[index].investment_status_id = status.ripe;
         this.setState({investments:newInvestments});
         this.updateRow();
       }
     })
  }

  updateRow(){
    let investmentRows =  this.state.investments.map((investment)=>{
      return <tr>
        <td>{investment.investor_name}</td>
        <td>{new Date(investment.invested_date).toDateString()}</td>
        <td>{this.calculateMonth(new Date(investment.funding_starts),new Date(investment.funding_ends))} Months</td>
        <td>{this.calculatePaymentDate(investment.invested_date,this.calculateMonth(new Date(investment.farm_starts),new Date(investment.farm_ends)))}</td>
        <td>{investment.quantity}</td>
        <td>{this.calculateInvestedAmount(investment.roi,investment.price_per_unit) }</td>
        <td>{this.calculateInvestedAmount(investment.roi,investment.price_per_unit) + investment.quantity}</td>
        <td>{investment.investment_status}</td>
        <td>{
          investment.investment_status_id === status.ripe?
          <PayInvestor investmentId={investment.id} onPaySuccess={this.onPaySuccess} onPay={this.managePayment}/>
          :""
        }
        </td>
      </tr>
    })
    this.setState({investmentRows:investmentRows});
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


  getInvestors(){
    httpHelper.serverReq("farms/"+this.props.farmId+"/investments").then( (response)=> {
      if (response.success){
        this.setState({farmDet:response.success.data.farm,investments:response.success.data.investments});
        this.updateRow();
        this.initDataTable();

      }
    })
  }

  calculateMonth(d1,d2){
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  calculatePaymentDate(investedDate,duration){

    let date = new Date(investedDate);
    date.setMonth(new Date(investedDate).getMonth() + duration);
    return  date.toDateString();

  }

  calculateInvestedAmount(roi,pricePerUnit){

   return (roi * pricePerUnit)/100;
  }

  render() {
    return(
      <DashBoardLayOut>
        {this.state.confirmPayment}

        <hr/>


        <br/>


        <table className="table table-bordered datatable" id="table-3">
          <thead>
          <tr className="replace-inputs">
            <th>Investor's Name</th>
            <th>Invested Date</th>
            <th>Investment Duration</th>
            <th>Due Date</th>
            <th>Total Units Bought</th>
            <th>Total Amount Paid</th>
            <th>Total Returnable Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>

          {this.state.investmentRows}
          </tbody>
          <tfoot>
          <tr>
            <th>Investor's Name</th>
            <th>Invested Date</th>
            <th>Due Date</th>
            <th>Total Units Bought</th>
            <th>Total Amount Paid</th>
            <th>Total Returnable Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          </tfoot>
        </table>


        <br/>
        <br/>
      </DashBoardLayOut>
    )
  }
}

export default allInvestments;
