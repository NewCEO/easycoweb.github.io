import React            from 'react';
import DashBoardLayOut  from '../../layouts/DashboardLayOut';
import httpHelper       from '../../helpers/httpHelper';
import moment           from 'moment';

class Dashboard extends React.Component{

  static async getInitialProps({ req }) {

    return {};
  }
  constructor(props){
    super(props);
    this.state = {summary:""};
  }
  componentDidMount() {
    this.getSummary();

  }

  getSummary(){

    httpHelper.serverReq('user/investor/summary').then((response)=>{
      if (response.success){
        this.setState({summary:response.success.data});
        this.counter();
      }
    })

  }


  counter(){
    (function ($) {
      $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
          // set options for current element
          var settings = $.extend({}, $.fn.countTo.defaults, {
            from:            $(this).data('from'),
            to:              $(this).data('to'),
            speed:           $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals:        $(this).data('decimals')
          }, options);

          // how many times to update the value, and how much to increment the value on each update
          var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;

          // references & variables that will change with each update
          var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};

          $self.data('countTo', data);

          // if an existing interval can be found, clear it first
          if (data.interval) {
            clearInterval(data.interval);
          }
          data.interval = setInterval(updateTimer, settings.refreshInterval);

          // initialize the element with the starting value
          render(value);

          function updateTimer() {
            value += increment;
            loopCount++;

            render(value);

            if (typeof(settings.onUpdate) == 'function') {
              settings.onUpdate.call(self, value);
            }

            if (loopCount >= loops) {
              // remove the interval
              $self.removeData('countTo');
              clearInterval(data.interval);
              value = settings.to;

              if (typeof(settings.onComplete) == 'function') {
                settings.onComplete.call(self, value);
              }
            }
          }

          function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue);
          }
        });
      };

      $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
      };

      function formatter(value, settings) {
        return value.toFixed(settings.decimals);
      }
    }(jQuery));

    jQuery(function ($) {
      // custom formatting example
      $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });

      // start all the timers
      $('.timer').each(count);

      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });
  }

  render() {
    let days = moment(Date.now()).diff(moment(new Date(this.state.summary.next_due_date)),'days')
    return(
      <DashBoardLayOut>
        <div className="content mt-3">
          <div className="row text-center count">
            <div className="col">
              <div className="counter">
                <i className="fa fa-folder-open fa-2x"></i>
                <h2 className="timer count-title count-number" data-to={this.state.summary.opened_investments} data-speed="1500"></h2>
                <p className="count-text ">Opened Investments</p>
              </div>
            </div>
            <div className="col">
              <div className="counter">
                <i className="fa fa-heart fa-2x"></i>
                <h2 className="timer count-title count-number" data-to={this.state.summary.followed_farms} data-speed="1500"></h2>
                <p className="count-text ">Farms you follow</p>
              </div>
            </div>
            <div className="col">
              <div className="counter">
                <i className="fa fa-money fa-2x"></i>
                <h2 className="timer count-title count-number" data-to={this.state.summary.next_due_payment} data-speed="1500"></h2>
                <p className="count-text ">Amount Invested(N)</p>
              </div>
            </div>
            <div className="col">
              <div className="counter">
                <i className="fa fa-clock-o fa-2x"></i>
                <h2 className="timer count-title count-number" data-to={days?days:0} data-speed="1500"></h2>
                <p className="count-text ">Payment Due (days)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content mt-3">
          <div className="animated fadeIn">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4>About your Returns</h4>
                  </div>
                  <div className="card-body">
                    <p className="text-muted m-b-15">You can pay with mobile money, bank or credit card. Transactions
                      are processed through PayStack's secure system. When its time to get paid, we send the money to
                      your bank account. Set up Banking details under the <a className="Col" href="profile.html">Profile
                        Page</a></p>
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

export default Dashboard;
