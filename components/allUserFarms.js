import React from 'react';
import httpHelper from '../helpers/httpHelper';
import InfiniteScroll from 'react-infinite-scroll-component';
import SingleFarm from "../components/singleFarm"


class allFarmTableComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {nextPage:1,isLastpage:false,hasMore:true,farmsUI:[],followedHasMore:true,followedFarmsUI:[],followedNextPage:1};
    this.loadMoreFarms = this.loadMoreFarms.bind(this);
    this.handleFollowedTab = this.handleFollowedTab.bind(this);
  }

  handleFollowedTab(e){

    httpHelper.serverReq(`http://localhost:3009/api/v1/farms/user/followed?paginate=true${this.state.followedHasMore?"&page="+this.state.followedNextPage:""}`).then( (data)=> {
      if(data.success){
        if (data.success.data.followedNextPage){

          this.setState({followedNextPage:data.success.data.nextPage,followedHasMore:true});

        }else{
          this.setState({followedNextPage:false,followedHasMore:false});

        }
        if (data.success.data.farms.length < 1){
          this.setState({followedNextPage:false,followedHasMore:false});
        }

        let farmsUI = data.success.data.farms.map(function (farm) {
          return  <SingleFarm key={farm.farm_id} details={farm} />;
        });

        let updateUI = [];

        this.setState({followedFarmsUI:updateUI.concat(farmsUI)});
      }
    })
  }

  loadMoreFarms(){

    httpHelper.serverReq(`http://localhost:3009/api/v1/farms/all?paginate=true${this.state.hasMore?"&page="+this.state.nextPage:""}`).then( (data)=> {
      if(data.success){
        if (data.success.data.nextPage){

          this.setState({nextPage:data.success.data.nextPage,hasMore:true});

        }else{
          this.setState({nextPage:false,hasMore:false});

        }
        if (data.success.data.farms.length < 1){
          this.setState({nextPage:false,hasMore:false});
        }

        let farmsUI = data.success.data.farms.map(function (farm) {
          return  <SingleFarm key={farm.farm_id} details={farm} />;
        });

        let updateUI = this.state.farmsUI;

        this.setState({farmsUI:updateUI.concat(farmsUI)});
      }
    })
  }

  componentDidMount() {
    this.loadMoreFarms();
  }

  render() {
    return(
      <div className="col-md-12">
        <div className="row">
          <ul className="nav nav-tabs bordered col-md-12 text-center" style={{marginBottom:"10px"}}>
            <li className="active col-sm-6">
              <a href="#open" data-toggle="tab">
                <span className="visible-xs"><i className="entypo-home"></i></span>
                <span className="hidden-xs"><h3>All Farms</h3></span>
              </a>
            </li>
            <li className="col-sm-6" onClick={this.handleFollowedTab}>
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
                scrollThreshold={0.8}
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
              <InfiniteScroll
                dataLength={this.state.followedFarmsUI.length}
                next={this.loadMoreFarms}
                hasMore={this.state.followedHasMore}
                scrollThreshold={0.8}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >

                {this.state.followedFarmsUI}
              </InfiniteScroll>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default allFarmTableComponent;
