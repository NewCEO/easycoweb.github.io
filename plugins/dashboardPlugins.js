class DashboardPlugins extends React.Component {
  componentDidMount(){
  }

  initDatepicker(){
    $(this.refs.datepicker).datepicker(this.props);
  }

  render(){
    return (
      <input type='text' ref='datepicker'/>
    )
  }
}