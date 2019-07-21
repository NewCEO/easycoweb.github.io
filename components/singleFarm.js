import React from 'react';



class singleFarm extends React.Component{

  constructor(props){
    super(props);

  }

  componentDidMount() {


  }


  render() {

    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="" alt="" className="img-responsive"/>
          <div className=" container-fluid caption text-center">
            <h2>COW FARM</h2>
            <a><i className="fa fa-heart right"><p>Follow</p></i><br/></a>
            <span className="badge badge-success badge-roundless" id="">Open</span>
            <hr/>
            <div className="row">
              <div className="col-md-6">
                <p>Price Per Unit</p>
                <p className="ptag">₦60000</p>
              </div>
              <div className="col-md-6">
                <p className="">Returns</p>
                <p className="ptag">50%</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>Duration</p>
                <p className="ptag">9 Months</p>
              </div>
              <div className="col-md-6">
                <p className="">Units Available</p>
                <p className="ptag">5000</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <a href="#" className="btn btn-primary" role="button">Fund</a>
              </div>
              <div className="col-md-6">
                <a href="details.html" className="btn btn-primary" role="button">Details <i
                  className="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default singleFarm;
