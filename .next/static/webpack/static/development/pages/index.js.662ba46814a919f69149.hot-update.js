webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./layouts/StaticLayOut.js":
/*!*********************************!*\
  !*** ./layouts/StaticLayOut.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var StaticLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StaticLayout, _React$Component);

  function StaticLayout(prop) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StaticLayout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StaticLayout).call(this));
    _this.prop = prop;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StaticLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ($('.wow').length) {
        var wow = new WOW({
          mobile: false
        });
        wow.init();
      } //three-column-carousel


      if ($('.three-column-carousel').length) {
        $('.three-column-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          smartSpeed: 3000,
          autoplay: 4000,
          navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>'],
          responsive: {
            0: {
              items: 1
            },
            480: {
              items: 1
            },
            600: {
              items: 1
            },
            800: {
              items: 2
            },
            1024: {
              items: 3
            }
          }
        });
      } //three-column-carousel


      if ($('.related-event-carousel').length) {
        $('.related-event-carousel').owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          smartSpeed: 3000,
          autoplay: 4000,
          navText: ['<span class="flaticon-back"></span>', '<span class="flaticon-right-arrow-angle"></span>'],
          responsive: {
            0: {
              items: 1
            },
            480: {
              items: 1
            },
            600: {
              items: 2
            },
            800: {
              items: 2
            },
            1024: {
              items: 3
            }
          }
        });
      } // single-item-carousel


      if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          smartSpeed: 3000,
          autoplay: 4000,
          navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            600: {
              items: 1
            },
            800: {
              items: 1
            },
            1200: {
              items: 1
            }
          }
        });
      } // brand-carousel


      if ($('.brand-carousel').length) {
        $('.brand-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          smartSpeed: 3000,
          autoplay: 4000,
          navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            600: {
              items: 3
            },
            800: {
              items: 4
            },
            1200: {
              items: 4
            }
          }
        });
      } // brand-carousel


      if ($('.five-item-carousel').length) {
        $('.five-item-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          smartSpeed: 3000,
          autoplay: 4000,
          navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            600: {
              items: 3
            },
            800: {
              items: 4
            },
            1200: {
              items: 5
            }
          }
        });
      } //Main Slider Carousel


      if ($('.main-slider-carousel').length) {
        $('.main-slider-carousel').owlCarousel({
          loop: true,
          margin: 0,
          nav: true,
          animateOut: 'slideOutDown',
          animateIn: 'fadeIn',
          active: true,
          smartSpeed: 1000,
          autoplay: 5000,
          navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>'],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1200: {
              items: 1
            }
          }
        });
      } //Search Box Toggle


      if ($('.search-toggle').length) {
        //Dropdown Button
        $('.search-toggle').on('click', function () {
          $(this).toggleClass('active');
          $(this).next('.search-box').toggleClass('now-visible');
        });
      } //Custom Seclect Box


      if ($('.custom-select-box').length) {
        $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
      }

      var progressBar = $('.progress');

      if (progressBar.length) {
        progressBar.each(function () {
          var Self = $(this);
          Self.appear(function () {
            var progressValue = Self.data('value');
            Self.find('.progress-bar').animate({
              width: progressValue + '%'
            }, 100);
            Self.find('span.value').countTo({
              from: 0,
              to: progressValue,
              speed: 100
            });
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("html", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        charset: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, "CowFunding By Selema Farms"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/jquery.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/bootstrap.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/owl.carousel.min.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/wow.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/validation.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/jquery.fancybox.pack.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        type: "text/javascript",
        src: "/js/SmoothScroll.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBZQiiFTOGpm2qHVZmZY1s-aEnmHDhqKgk"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/html5lightbox/html5lightbox.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/gmaps.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/map-helper.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/isotope.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/jquery-ui.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/jquery.appear.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/jquery.countTo.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "/js/script.js"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        href: "/css/style.css",
        rel: "stylesheet"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        href: "/css/custom.css",
        rel: "stylesheet"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        href: "/css/responsive.css",
        rel: "stylesheet"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        href: "images/favicon.ico",
        type: "image/x-icon"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        href: "/css/font-awesome.css",
        rel: "stylesheet"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("body", {
        class: "boxed_wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "preloader"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        class: "main-header header-style-three header-style-four"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "header-upper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "container clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("figure", {
        class: "logo-box"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "index-2.html"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "images/logo-white.png",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "upper-right clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "upper-column info-box"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "icon-box"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        class: "flaticon-phone-call"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "880 1723801729"), "info@cowfunding.com.ng"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "upper-column info-box"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "icon-box"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        class: "flaticon-placeholder"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "Goldsmith Hall,"), " Bulls Stadium, California")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "header-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "menu-box"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "nav-outer clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "menu-area pull-left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        class: "main-menu navbar-expand-lg"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "navbar-header"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        class: "navbar-toggle",
        "data-toggle": "collapse",
        "data-target": ".navbar-collapse"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        class: "icon-bar"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        class: "icon-bar"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        class: "icon-bar"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "navbar-collapse collapse clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        class: "navigation clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "index-7.html"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "about.html"
      }, "About Us")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "causes-grid.html"
      }, "Our Farms")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "team.html"
      }, "Our Gallery")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, "Our Thoughts")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "contact.html"
      }, "Contact Us")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        class: "nav-right pull-right"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "upper-column info-box donate-box"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        class: "donate-box-btn theme-btn"
      }, "Login"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "sticky-header"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-4 col-md-12 col-sm-12 column"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("figure", {
        class: "logo-box"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "index-7.html"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "",
        alt: ""
      }), "CowFunding"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-8 col-md-12 col-sm-12 menu-column"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "menu-area"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        class: "main-menu navbar-expand-lg"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "navbar-header"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        class: "navbar-toggle",
        "data-toggle": "collapse",
        "data-target": ".navbar-collapse"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        class: "icon-bar"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        class: "icon-bar"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        class: "icon-bar"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "navbar-collapse collapse clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        class: "navigation clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "index-7.html"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "about.html"
      }, "About Us")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "causes-grid.html"
      }, "Our Ranch")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "team.html"
      }, "Our Team")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, "Our Thoughts")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "contact.html"
      }, "Contact Us"))))))))))), this.prop.children, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("footer", {
        class: "main-footer"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "footer-content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-4 col-md-6 col-sm-12 footer-column"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "logo-widget footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("figure", {
        class: "logo-box"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "index-6.html"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "images/footer-logo.png",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "text"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        class: "footer-social"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        class: "fa fa-facebook"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        class: "fa fa-twitter"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        class: "fa fa-vimeo"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        class: "fa fa-google-plus"
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "service-widget footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "footer-title"
      }, "Links"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        class: "list"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "index-7.html"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "about.html"
      }, "About Us")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "causes-grid.html"
      }, "Our Farms")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "team.html"
      }, "Our Team")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, "Our Thoughts")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "contact.html"
      }, "Contact Us"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-3 col-md-6 col-sm-12 footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "contact-widget footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "footer-title"
      }, "Contacts"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "text"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Flat 20, Reynolds Neck, North Helenaville, FV77"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "+2(305) 587-3407"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "info@example.com")))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "footer-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-6 col-md-6 col-sm-12 column"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "copyright"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, "CowFunding By Selema Farms"), " \xA92019 All Right Reserved")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-6 col-md-6 col-sm-12 column"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        class: "footer-nav"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, "Terms of Service")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, "Privacy Policy"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "donate-popup",
        class: "donate-popup"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "close-donate"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        class: "fa fa-close"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "popup-inner"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "donate-form-area"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        class: "text-center"
      }, "Fill this form to login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "#",
        class: "donate-form default-form me"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "form-bg"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "row clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-12 col-md-6 col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Your Name*"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "name",
        placeholder: ""
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-12 col-md-6 col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Email*"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "email",
        placeholder: ""
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "center text-center me"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        class: "theme-btn",
        type: "submit"
      }, "Login"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "donate-form-area"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Register"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        class: "text-center"
      }, "Fill this form to Register"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "#",
        class: "donate-form default-form me"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "form-bg"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "row clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-12 col-md-12 col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Your Name*"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "name",
        placeholder: ""
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-lg-12 col-md-12 col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Email*"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "email",
        placeholder: ""
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "center text-center me"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        class: "theme-btn",
        type: "submit"
      }, "Register")))))))))));
    }
  }]);

  return StaticLayout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StaticLayout);

/***/ })

})
//# sourceMappingURL=index.js.662ba46814a919f69149.hot-update.js.map