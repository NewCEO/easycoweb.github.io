import React from 'react';
import Link from 'next/link';
import httpHelper from "../helpers/httpHelper";


class farmsTableRow extends React.Component{

  constructor(props){
    super(props);
    this.activity = props.activity
    this.handleDelete = this.handleDelete.bind(this);
    this.props = props
  }

  handleDelete(e){
    e.preventDefault();
    this.props.onDelete(this.props.data.id);
  }

  render() {
    let activity = this.props.data;
    return(
      <tr key={activity.id}>
        <td>{new Date(activity.date).toDateString()}</td>
        <td>{activity.activity}</td>
        <td>{activity.summary}</td>
        <td>{activity.information}</td>
        <td>{activity.weeks}</td>
        <td>{activity.stage}</td>
        <td><button className="btn btn-danger" onClick={this.handleDelete}>Delete</button></td>
      </tr>
    )
  }
}

export default farmsTableRow;
