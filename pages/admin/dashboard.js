import React from 'react';
import DashBoardLayOut from '../../layouts/AdminDashboardLayout';
import isAdmin from  '../../middlewares/isAdmin';
import httpHelper from "../../helpers/httpHelper";
import $ from 'jquery';

class Dashboard extends React.Component{

  static async getInitialProps({ req }) {
    return {};
  }

  constructor(props){
   super(props);
   this.state = {farms:"",activeFarms:"",soldOut:"",users:""};
  }

  componentDidMount() {
    isAdmin();
    this.getSummary();

  }

  initTile(){
    $(".tile-stats").each(function(i, el)
    {
      var $this = $(el),
        $num = $this.find('.num'),

        start = attrDefault($num, 'start', 0),
        end = attrDefault($num, 'end', 0),
        prefix = attrDefault($num, 'prefix', ''),
        postfix = attrDefault($num, 'postfix', ''),
        duration = attrDefault($num, 'duration', 1000),
        delay = attrDefault($num, 'delay', 1000),
        format = attrDefault($num, 'format', false);

      if(start < end)
      {
        if(typeof scrollMonitor == 'undefined')
        {
          $num.html(prefix + end + postfix);
        }
        else
        {
          var tile_stats = scrollMonitor.create( el );

          tile_stats.fullyEnterViewport(function(){

            var o = {curr: start};

            TweenLite.to(o, duration/1000, {curr: end, ease: Power1.easeInOut, delay: delay/1000, onUpdate: function()
              {
                $num.html(prefix + (format ? numberWithCommas( Math.round(o.curr) ) : Math.round(o.curr)) + postfix);
              }
            });

            tile_stats.destroy()
          });
        }
      }
    });

  }

  getSummary(){
    httpHelper.httpReq("http://localhost:3009/api/v1/user/summary").then((response)=>{
      if (response.success){
        let summary = response.success.data;
        this.setState({farms:summary.farms,activeFarms:summary.active_farms,soldOut:summary.soldout_farms,users:summary.users})
        this.initTile();
      }
    })
  }


  render() {
    return(
      <DashBoardLayOut>
        <div className="row">

          <div className="col-sm-3 col-xs-6" id="pad">

            <div className="tile-stats tile-green">
              <div className="icon"><i className="entypo-chart-bar"></i></div>
              <div className="num" data-start="0" data-end={this.state.farms} data-postfix="" data-duration="1500"
                   data-delay="600">0
              </div>

              <h3>All farms</h3>
              <p></p>
            </div>

          </div>

          <div className="col-sm-3 col-xs-6" id="pad">

            <div className="tile-stats tile-red">
              <div className="icon"><i className="entypo-users"></i></div>
              <div className="num" data-start="0" data-end={this.state.users} data-postfix="" data-duration="1500" data-delay="0">0
              </div>

              <h3>Total Users</h3>
              <p></p>
            </div>

          </div>


          <div className="clear visible-xs"></div>

          <div className="col-sm-3 col-xs-6" id="pad">

            <div className="tile-stats tile-aqua">
              <div className="icon"><i className="entypo-mail"></i></div>
              <div className="num" data-start="0" data-end={this.state.activeFarms} data-postfix="" data-duration="1500"
                   data-delay="1200">0
              </div>

              <h3>Active farms</h3>
              <p></p>
            </div>

          </div>


          <div className="col-sm-3 col-xs-6" id="pad">
            <div className="tile-stats tile-blue">
              <div className="icon"><i className="entypo-rss"></i></div>
              <div className="num" data-start="0" data-end={this.state.soldOut} data-postfix="" data-duration="1500"
                   data-delay="1800">0
              </div>
              <h3>Soldout Farms</h3>
              <p></p>
            </div>
          </div>


        </div>
      </DashBoardLayOut>
    )
  }
}

export default Dashboard;
