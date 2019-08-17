import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import Farms from '../../components/allUserFarms';
import isUser from '../../middlewares/isUser';

class allFarms extends React.Component{

  constructor(props){
    super(props);
    isUser();
  }

  render() {

    return(
      <DashBoardLayOut>
        <Farms/>
      </DashBoardLayOut>
    )
  }
}

export default allFarms;
