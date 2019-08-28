import React from 'react';
import httpHelper from '../helpers/httpHelper';
import InfiniteScroll from 'react-infinite-scroll-component';
import SingleFarm from "../components/singleFarm";
import status from  "../config/status";


class allFarmTableComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {nextPage:1,isLastpage:false,hasMore:true,farmsUI:[],followedHasMore:true,followedFarmsUI:[],followedNextPage:1};
    this.loadMoreFarms = this.loadMoreFarms.bind(this);
    this.handleFollowedTab = this.handleFollowedTab.bind(this);
  }

  handleFollowedTab(e){

    httpHelper.serverReq(`farms/user/followed?paginate=true${this.state.followedHasMore?"&page="+this.state.followedNextPage:""}&status[eql]=${status.active}`).then( (data)=> {
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

    httpHelper.serverReq(`farms/all?paginate=true${this.state.hasMore?"&page="+this.state.nextPage:""}&status=${status.active}`).then( (data)=> {
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




      <div class="card ground">
        <div class="card-header">
          <h4>All Farms</h4>
        </div>
        <div class="card-body">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item col-sm-6">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">All Farms</a>
            </li>
            <li class="nav-item col-sm-6"  onClick={this.handleFollowedTab}>
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Followed</a>
            </li>
          </ul>
          <div class="tab-content pl-3 p-1" id="myTabContent">

            <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              {this.state.followedFarmsUI}
            </div>

          </div>
        </div>
      </div>




  )
  }
}

export default allFarmTableComponent;
