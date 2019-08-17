module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layouts_StaticLayOut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/StaticLayOut */ "./layouts/StaticLayOut.js");










var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_layouts_StaticLayOut__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        class: "main-slider slider-style-four"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "main-slider-carousel owl-carousel owl-theme slide-nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "slide",
        style: {
          "background-image": "url(images/main-slider/Newsletter-Image.jpg)"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "content con"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Funding One Farm ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Funds Multiple Lifes"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "donate-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        class: "donate-box-btn theme-btn"
      }, "Invest Now"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "slide",
        style: {
          "background-image": "url(images/main-slider/slider-Image-1.jpg)"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "content con"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Help Senior", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Citizens"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "qui officia deserunt mollit anim id est laborum. "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "donate-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        class: "donate-box-btn theme-btn"
      }, "Invest Now"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "slide",
        style: {
          "background-image": "url(images/main-slider/12.jpg)"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "content con"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Help Senior", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Citizens"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "qui officia deserunt mollit anim id est laborum. "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "donate-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        class: "donate-box-btn theme-btn"
      }, "Invest Now"))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "feature-style-two"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "feature-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "col-lg-3 col-md-6 col-sm-12 feature-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "feature-content-two",
        style: {
          "background-image": "url(images/resource/feature-4.jpg)"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "icon-box wow zoomIn",
        "data-wow-delay": "300ms",
        "data-wow-duration": "1500ms"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "flaticon-group"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Create an Account")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "CREATE AN ACCOUNT,IT'S FAST AND EASY."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "col-lg-3 col-md-6 col-sm-12 feature-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "feature-content-two",
        style: {
          "background-image": "url(images/resource/feature-5.jpg);"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "icon-box wow zoomIn",
        "data-wow-delay": "600ms",
        "data-wow-duration": "1500ms"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "flaticon-money-bag"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Fund a Farm")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "FUND A FARM FROM OUR RANCH."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "col-lg-3 col-md-6 col-sm-12 feature-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "feature-content-two",
        style: {
          "background-image": "url(images/resource/feature-6.jpg);"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "icon-box wow zoomIn",
        "data-wow-delay": "900ms",
        "data-wow-duration": "1500ms"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "flaticon-heart"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Get Farm Updates")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "TRACK YOUR INVESTMENTS THROUGH YOUR DASHBOARD."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "col-lg-3 col-md-6 col-sm-12 feature-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "feature-content-two",
        style: {
          "background-image": "url(images/resource/feature-7.jpg);"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "icon-box wow zoomIn",
        "data-wow-delay": "1200ms",
        "data-wow-duration": "1500ms"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "flaticon-money-bag"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Get Returns")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "GET PROFIT RETURNS PROMPTLY."))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        class: "cause-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "cause-top-content overlay-bg centred",
        style: {
          "background-image": "url(images/resource/slider-Image-2.jpg);"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "top-title"
      }, "Our Farms"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "cause-bottom-content overlay-style-one"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "cause-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "three-column-carousel"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "single-cause-content inner-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "image-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/resource/11.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "overlay-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "overlay-inner"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "lower-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "causes-details.html"
      }, "KURI CATTLE FARM"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "fa fa-heart right"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "Excepteur sint occaecat cupidatat non proident sunt."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "progress-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "progress",
        "data-value": "30"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "progress-bar",
        role: "progressbar",
        "aria-valuenow": "30",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "value-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        class: "value"
      }), "% of Total Units Bought")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        class: "price clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Price: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "\u20A610,000"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Return: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "30%")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        class: "price clearfix pos"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Duration:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "3 months")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "donate-box text-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        class: "donate-box-btn theme-btn-two"
      }, "Invest Now")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "single-cause-content inner-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "image-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/resource/11.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "overlay-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "overlay-inner"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "lower-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "causes-details.html"
      }, "KURI CATTLE FARM"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "fa fa-heart right"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "Excepteur sint occaecat cupidatat non proident sunt."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "progress-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "progress",
        "data-value": "90"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "progress-bar",
        role: "progressbar",
        "aria-valuenow": "90",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "value-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        class: "value"
      }), "% of Total Units Bought")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        class: "price clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Price: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "\u20A610,000"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Return: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "30%")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        class: "price clearfix pos"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Duration:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "3 months")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "donate-box text-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        class: "donate-box-btn theme-btn-two"
      }, "Invest Now")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "single-cause-content inner-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "image-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/resource/11.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "overlay-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "overlay-inner"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "lower-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "causes-details.html"
      }, "KURI CATTLE FARM"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "fa fa-heart right"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "Excepteur sint occaecat cupidatat non proident sunt."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "progress-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "progress",
        "data-value": "100"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "progress-bar",
        role: "progressbar",
        "aria-valuenow": "100",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "value-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        class: "value"
      }), "%-SOLD OUT")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        class: "price clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Price: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "\u20A610,000"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Return: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "30%")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        class: "price clearfix pos"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Duration:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "3 months")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "donate-box text-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        class: "donate-box-btn theme-btn-two"
      }, "Invest Now"))))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        class: "testimonial-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "testimonial-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "col-lg-9 col-md-12 col-sm-12 testimonial-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "top-content overlay-bg",
        style: {
          "background-image": "url(images/resource/6.jpg);"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "sec-title"
      }, "What Our", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Clients Say"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "title-text"
      }, "Lorem ipsum dolor sit amet consectetur."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "col-lg-7 col-md-12 col-sm-12 brand-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "brand-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "brand-carousel"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/brand/1.png",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/brand/2.png",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/brand/3.png",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/brand/4.png",
        alt: ""
      }))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "content-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "single-item-carousel"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia dese runt mollit anim est laborum sed ut perspiciatis unde omnis iste natus sit error voluptatem accusantium dolor emque laudatium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "author-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "author-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/resource/1.png",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, "Victoria Simpson"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "title"
      }, "Co Founder"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia dese runt mollit anim est laborum sed ut perspiciatis unde omnis iste natus sit error voluptatem accusantium dolor emque laudatium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "author-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "author-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/resource/1.png",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, "Victoria Simpson"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "title"
      }, "Co Founder"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "text"
      }, "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia dese runt mollit anim est laborum sed ut perspiciatis unde omnis iste natus sit error voluptatem accusantium dolor emque laudatium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "author-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        class: "author-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "images/resource/1.png",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, "Victoria Simpson"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "title"
      }, "Co Founder")))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        class: "subscribe-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "subscribe-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "col-lg-6 col-md-6 col-sm-12 column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "subscribe-title"
      }, "Subscribe To Our Newsletter")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "col-lg-6 col-md-6 col-sm-12 column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "subscribe-form"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        action: "#",
        method: "post"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "email",
        name: "email",
        placeholder: "Your Email",
        required: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        class: "theme-btn"
      }, "Subscribe"))))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        class: "scroll-top scroll-to-target",
        "data-target": "html"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        class: "fa fa-long-arrow-up"
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                return _context.abrupt("return", {});

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ACER\Desktop\my-work\easycoweb.github.io\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map