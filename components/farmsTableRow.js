import React from 'react';
import Link from 'next/link';
import httpHelper from "../helpers/httpHelper";


class farmsTableRow extends React.Component{

  constructor(props){
    super(props);
    this.farmDet  = props.farmDetails;
    this.FarmId   = props.farmId;
    this.handleClick = this.handleClick.bind(this);
    this.state ={farmState:this.farmDet.status,
                  farmStateName:this.farmDet.status_name
    };

  }

  handleClick(e){
    e.preventDefault();
    e.stopPropagation();
    let url;
    console.log(this.state.farmState,'farm state');
    //if farm is active
    if (this.state.farmState === 1) {
      //Deactivate
       url = "/de-activate";
    }else if (this.state.farmState === 2) {
      //Activate
       url = "/activate";
    }

    httpHelper.serverReq(`http://localhost:3009/api/v1/farms/status/${this.farmDet.id}${url}`).then((result)=>{
      if (result.success){
        if (this.state.farmState === 1) {
          this.setState({farmState:2,farmStateName:'in-active'})

        }else if (this.state.farmState === 2) {
          //Activate
          this.setState({farmState:1,farmStateName:'active'})

        }
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

  render() {
    let farm = this.farmDet;
    return(
      <tr className="odd gradeX">
        <td>{farm.title}</td>
        <td>{this.calculateMonth( new Date(farm.farm_starts),new Date(farm.farm_ends))} Months</td>
        <td>{farm.price_per_unit}</td>
        <td className="center">{farm.roi}%</td>
        <td className="center">{farm.total_units}</td>
        <td className="center">{farm.sold_out||0}</td>
        <td className="center">{this.state.farmStateName}</td>
        <td>

          {

             this.state.farmState === 1? <button onClick={this.handleClick} type="button" className="btn btn-danger" >De-Activate</button>:this.state.farmState === 2? <button onClick={this.handleClick} type="button" className="btn btn-success">Activate</button>:''
          }






          <Link href= {"/admin/farms/edit/"+farm.id.toString()}>
            <button type="button" style={{marginLeft:'10px'}} className="btn btn-info">edit</button>
          </Link>

        </td>
      </tr>
    )
  }
}

export default farmsTableRow;
