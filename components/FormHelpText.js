import React from 'react';


class  FormHelpText extends React.Component{
  constructor(props){
    super(props);

  }

  render() {
    return (

     <span style={{color:this.props.type?'red':'green',font:12+'px'}}>{this.props.text}</span>

    );
  }
}
export  default FormHelpText;