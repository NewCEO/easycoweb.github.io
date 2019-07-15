import React from 'react';


class  HelpBlock extends React.Component{
  constructor(props){
    super(props);

  }

  render() {
    return (

      <div style={{'backgroundColor':this.props.type?'red':'green',font:12+'px',color:'white',width:'100%',padding:'8px'}} >{this.props.text}</div>

    );
  }
}
export  default HelpBlock;