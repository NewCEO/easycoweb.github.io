import React from 'react';
import Router from 'next/router';
import httpHelper from '../helpers/httpHelper';



class AboutUs extends React.Component{

  static async getInitialProps({ req }) {
    return { };
  }

  componentDidMount() {
    httpHelper.httpReq("logout","","POST").then(function () {
      Router.push('/');
    })
  }

  render() {
    return(
     <h4>Logging you out...</h4>
    )
  }
}

export default AboutUs;
