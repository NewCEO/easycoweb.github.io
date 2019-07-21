import React from 'react';
import DashBoardLayOut from '../../layouts/DashboardLayOut';
import httpHelper from '../../helpers/httpHelper';
import SingleFarm from '../../components/singleFarm';
import InfiniteScroll from 'react-infinite-scroll-component';
import $ from 'jquery';

class allFarms extends React.Component{

  constructor(props){
    super(props);
    this.state = {nextPage:false,isLastpage:false,hasMore:true,farmsUI:[]};
    this.loadMoreFarms = this.loadMoreFarms.bind(this);
  }

  static async getInitialProps({ req }) {

    return {};
  }
  componentDidMount() {
    this.loadMoreFarms();
  }

  loadMoreFarms(){
    httpHelper.serverReq(`http://localhost:3009/api/v1/farms/all?paginate=true${this.state.nextPage?"&page="+this.state.nextPage:""}`).then( (data)=> {
      if(data.success){
        if (data.success.data.nextPage){
          
          this.setState({nextPage:data.success.nextPage,hasMore:true});
          
        }else{
          this.setState({nextPage:false,hasMore:false});

        }
        
        let farmsUI = data.success.data.map(function (farm) {
         return  <SingleFarm key={farm.id} details={farm} />;
        });
        this.setState({farmsUI:farmsUI});
      }
    })
  }


  render() {

    console.log(this.state.hasMore)
    return(
      <DashBoardLayOut>
        <div className="col-md-12">
          <div className="row">
            <ul className="nav nav-tabs bordered col-md-12 text-center">
              <li className="active col-sm-6">
                <a href="#open" data-toggle="tab">
                  <span className="visible-xs"><i className="entypo-home"></i></span>
                  <span className="hidden-xs"><h3>All Farms</h3></span>
                </a>
              </li>
              <li className="col-sm-6">
                <a href="#follow" data-toggle="tab">
                  <span className="visible-xs"><i className="entypo-user"></i></span>
                  <span className="hidden-xs"><h3>Followed</h3></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div className="tab-pane active" id="open">
              <div className="row">
                <InfiniteScroll
                  dataLength={this.state.farmsUI.length}
                  next={this.loadMoreFarms}
                  hasMore={this.state.hasMore}
                  scrollThreshold={1}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{textAlign: 'center'}}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >
                  {this.state.farmsUI}
                </InfiniteScroll>
              </div>

            </div>

            <div className="tab-pane" id="follow">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <img src="./assets/images/jarren-simmons-35780-unsplash.jpg" alt="..."/>
                      <div className="caption">
                        <h2>Goat Farm</h2>
                        <p>...</p>
                        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"
                                                                                               className="btn btn-default"
                                                                                               role="button">Button</a>
                        </p>
                      </div>
                  </div>
                </div>



              </div>

            </div>

          </div>
        </div>
      </DashBoardLayOut>
    )
  }
}

export default allFarms;
