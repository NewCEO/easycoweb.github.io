import React from 'react';
import httpHelper from "../helpers/httpHelper";
import SingleFarm from "../components/singleFarmHomePage";
import status from '../config/status';


class allFarmTableComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      farms:"Loading..."
    }

    this.state = {

      userType:false
    };

    this.state = {
      userIn:false,
    };
  }

  initWowSlider(){

    if($('.wow').length){
      var wow = new WOW({
        mobile:       false
      });
      wow.init();
    }

    //three-column-carousel
    if ($('.three-column-carousel').length) {
      $('.three-column-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        smartSpeed: 3000,
        autoplay: 4000,
        navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
          0:{
            items:1
          },
          480:{
            items:1
          },
          600:{
            items:1
          },
          800:{
            items:2
          },
          1024:{
            items:3
          }
        }
      });
    }

    //three-column-carousel
    if ($('.related-event-carousel').length) {
      $('.related-event-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        smartSpeed: 3000,
        autoplay: 4000,
        navText: [ '<span class="flaticon-back"></span>', '<span class="flaticon-right-arrow-angle"></span>' ],
        responsive:{
          0:{
            items:1
          },
          480:{
            items:1
          },
          600:{
            items:2
          },
          800:{
            items:2
          },
          1024:{
            items:3
          }
        }
      });
    }


    // single-item-carousel
    if ($('.single-item-carousel').length) {
      $('.single-item-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        smartSpeed: 3000,
        autoplay: 4000,
        navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
          0:{
            items:1
          },
          400:{
            items:1
          },
          600:{
            items:1
          },
          800:{
            items:1
          },
          1200:{
            items:1
          }
        }
      });
    }

    // brand-carousel
    if ($('.brand-carousel').length) {
      $('.brand-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        smartSpeed: 3000,
        autoplay: 4000,
        navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
          0:{
            items:1
          },
          400:{
            items:2
          },
          600:{
            items:3
          },
          800:{
            items:4
          },
          1200:{
            items:4
          }
        }
      });
    }


    // brand-carousel
    if ($('.five-item-carousel').length) {
      $('.five-item-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        smartSpeed: 3000,
        autoplay: 4000,
        navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
          0:{
            items:1
          },
          400:{
            items:2
          },
          600:{
            items:3
          },
          800:{
            items:4
          },
          1200:{
            items:5
          }
        }
      });
    }



    //Main Slider Carousel
    if ($('.main-slider-carousel').length) {
      $('.main-slider-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 5000,
        navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1200:{
            items:1
          }
        }
      });
    }

  }

  initCounter(){
    var progressBar = $('.progress');
    if(progressBar.length) {
      progressBar.each(function () {
        var Self = $(this);
        Self.appear(function () {
          var progressValue = Self.data('value');

          Self.find('.progress-bar').animate({
            width:progressValue+'%'
          }, 100);

          Self.find('span.value').countTo({
            from: 0,
            to: progressValue,
            speed: 100
          });
        });
      })
    }
  }

  getFarms(){
    httpHelper.httpReq(`farms/all?paginate=true&page=1&status[eql]=${status.active}&status[eql]=${status.soldout}`).then( (response)=> {
      if (response.success){


        let ui =   response.success.data.farms.map( (farm)=> {
          return <SingleFarm key={farm.farm_id} details={farm} isLoggedIn={this.state.userIn}/>
        });

        this.setState({farms:ui});
        this.initWowSlider();
        this.initCounter();
      }
    })
  }

  getLoggedInUserDetails(){
    httpHelper.httpReq('user').then((response)=>{
      //Check if the user is logged in before getting the farms to determine how to display the "invest now button"
      this.getFarms();
      if (response.success){
        this.setState({userType:response.success.data.user_type,userIn:true});

      }else{
        this.setState({userIn:false})

      }
    }).catch(()=>{
      this.setState({userIn:false})
    })
  }

  componentDidMount() {
    this.getLoggedInUserDetails();
  }

  render() {
    return(
      <div className="three-column-carousel">
        {this.state.farms}
      </div>
    )
  }
}

export default allFarmTableComponent;
