/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  if (!/Mobi/.test(navigator.userAgent)) {
    var check_if_in_view = function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;

        if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
          $element.addClass('in-view');
        }
      });
    };

    var check_if_in_view2 = function check_if_in_view2() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each(aboutMeElem, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;
        if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
          $element.addClass('in-view2');
        }
      });
    };

    //Pop up gallery architecture

    setTimeout(function () {
      $(".loader").fadeOut('slow');
    }, 5000);

    $(".fa-bars").on("click", function () {
      $(this).toggleClass('fa-bars');
      $(this).toggleClass('fa-times');
      $(".burgerList").find("li").toggle(200);
    });

    $(document).on("scroll resize", function () {
      var sectionAboutElem = $("#about");
      var sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
      var sectionArchitecture = $("#architecture");
      var sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      var sectionLandscape = $("#landscape");
      var sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      var sectionContact = $(".parallax4");
      var sectionContactElemDistanceTop = parseInt(sectionContact.offset().top);
      var scrollingStartDistance = $("#header").offset().top;
      var scrollTop = $(document).scrollTop();
      if (scrollTop > scrollingStartDistance) {
        $(".menu").slideDown(1);
      }

      //Border bottom for anchor About Me
      if (scrollTop >= sectionAboutElemDistanceTop - 1 && scrollTop <= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css({ borderBottom: "4px solid #c19e7e" });
      } else if (scrollTop < sectionAboutElemDistanceTop) {
        $(".menu").find("li").first().css("border-bottom", "");
      } else if (scrollTop >= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css("border-bottom", "");
      }
      //Border bottom for anchor Architecture
      if (scrollTop >= sectionArchitectureElemDistanceTop - 1 && scrollTop <= sectionArchitectureElemDistanceTop + parseInt($("#architecture").css("height")) - 60) {
        $(".menu").find("li").eq(1).css({ borderBottom: "4px solid #c19e7e" });
      } else if (scrollTop < sectionArchitectureElemDistanceTop) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      } else if (scrollTop >= sectionArchitectureElemDistanceTop + 660) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      }
      //Border bottom for anchor Landscape
      if (scrollTop >= sectionLandscapeElemDistanceTop - 1 && scrollTop <= sectionLandscapeElemDistanceTop + parseInt($("#landscape").css("height")) - 61) {
        $(".menu").find("li").eq(2).css({ borderBottom: "4px solid #c19e7e" });
      } else if (scrollTop < sectionLandscapeElemDistanceTop) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      } else if (scrollTop >= sectionLandscapeElemDistanceTop + 660) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      }
      //Border bottom for anchor contact
      if (scrollTop >= sectionContactElemDistanceTop - 60) {
        $(".menu").find("li").eq(3).css({ borderBottom: "4px solid #c19e7e" });
      } else if (scrollTop < sectionContactElemDistanceTop) {
        $(".menu").find("li").eq(3).css("border-bottom", "");
      }
    });

    $(window).on("load resize", function () {
      if ($(window).outerWidth() >= 680) {
        $(".burgerList").addClass('menuList');
        $(".burgerList").removeClass('burgerList');
      } else if ($(window).outerWidth() < 680) {
        $(".menuList").addClass('burgerList');
        $(".menuList").removeClass('menuList');
      }
    });

    $('a').click(function () {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      if ($(".fa-times").css("display") == "block") {
        $(".burgerList").find("li").hide(200);
        $(".menu").find("i").toggleClass('fa-bars');
        $(".menu").find("i").toggleClass('fa-times');
      }
      return false;
    });

    var $animation_elements = $('.info').children();
    var $window = $(window);
    $window.on('scroll resize', check_if_in_view);
    $window.on('scroll resize', check_if_in_view2);

    var aboutMeElem = $(".aboutMe");
    var visibleImgArchitecture = $(".architecturePics").find("img");
    $.each(visibleImgArchitecture, function () {
      $(this).on("click", function (event) {
        var currentImg = $(event.target);
        var architecturePics = document.querySelector(".architecturePics");
        var srcImg = $(event.target).attr("src");
        var newDiv = document.createElement("div");
        var prevSpan = document.createElement("span");
        var nextSpan = document.createElement("span");
        var crossElem = document.createElement("span");
        newDiv.classList.add("big");
        prevSpan.classList.add("prev");
        nextSpan.classList.add("next");
        prevSpan.classList.add("fa-angle-left");
        nextSpan.classList.add("fa-angle-right");
        prevSpan.classList.add("fa");
        nextSpan.classList.add("fa");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        var newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(prevSpan);
        newDiv.appendChild(nextSpan);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        architecturePics.appendChild(newDiv);
        nextSpan.addEventListener("click", function () {
          if (currentImg.parent().next().children().attr("src") == null) {
            architecturePics.removeChild(newDiv);
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        });
        prevSpan.addEventListener("click", function () {

          if (currentImg.parent().prev().children().attr("src") == null) {
            architecturePics.removeChild(newDiv);
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        });
        crossElem.addEventListener("click", function () {
          architecturePics.removeChild(newDiv);
        });
      });
    });

    // Loading Images at Architecture section
    var shown2 = void 0;
    $(window).on("load resize", function () {
      if ($(window).outerWidth() > 910) {
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(9)').show();
        var heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection);
        $('.more').show();
        $('.less').hide();
        var sectionArchitecture = $("#architecture");
        var sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      } else if ($(window).outerWidth() <= 910) {
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(4)').show();
        var _heightOfSection = $("#architecture").css("height");
        _heightOfSection = "700px";
        $("#architecture").css("height", _heightOfSection);
        $('.more').show();
        $('.less').hide();
        var _sectionArchitecture = $("#architecture");
        var _sectionArchitectureElemDistanceTop = parseInt(_sectionArchitecture.offset().top);
      }
    });
    $('.architecturePics li:lt(4)').show();
    $('.less').hide();
    var items2 = 36;
    if ($(window).outerWidth() <= 910) {
      var _shown = 4;
    } else {
      var _shown2 = 9;
    }
    $('.more').click(function () {
      $('.less').attr("style", "display:inline-block");
      shown2 = $('.architecturePics li:visible').length + 6;
      console.log(shown2);
      if (shown2 < items2) {
        $('.architecturePics li:lt(' + shown2 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          var heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350;
          $("#architecture").attr("style", "height: " + heightOfSection + 'px' + ' !important');
        } else if ($(window).outerWidth() <= 910) {
          var _heightOfSection2 = $("#architecture").css("height");
          _heightOfSection2 = parseInt(_heightOfSection2) + 660;
          $("#architecture").css("height", _heightOfSection2 + "px", "important");
        } else {
          var _heightOfSection3 = $("#architecture").css("height");
          _heightOfSection3 = parseInt(_heightOfSection3) + 450;
          $("#architecture").css("height", _heightOfSection3 + "px", "important");
        }
      } else {
        $('.architecturePics li:lt(' + items2 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          $('.more').hide();
          var _heightOfSection4 = $("#architecture").css("height");
          _heightOfSection4 = parseInt(_heightOfSection4) + 350;
          $("#architecture").attr("style", "height: " + _heightOfSection4 + 'px' + ' !important');
        } else if ($(window).outerWidth() <= 910) {
          $('.more').hide();
          var _heightOfSection5 = $("#architecture").css("height");
          _heightOfSection5 = parseInt(_heightOfSection5) + 280;
          $("#architecture").css("height", _heightOfSection5 + "px", "important");
        } else {
          $('.more').hide();
          var _heightOfSection6 = $("#architecture").css("height");
          _heightOfSection6 = parseInt(_heightOfSection6) + 250;
          $("#architecture").css("height", _heightOfSection6 + "px", "important");
        }
      }
    });
    $('.less').click(function () {

      if ($(window).outerWidth() < 501) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        var heightOfSection = $("#architecture").css("height");
        heightOfSection = "1100px";
        $("#architecture").attr("style", "height: " + heightOfSection + 'px' + ' !important');
        $('.more').show();
        $('.less').hide();
        var sectionArchitecture = $("#architecture");
        var sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      } else if ($(window).outerWidth() <= 910) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        var _heightOfSection7 = $("#architecture").css("height");
        _heightOfSection7 = "700px";
        $("#architecture").css("height", _heightOfSection7);
        $('.more').show();
        $('.less').hide();
        var _sectionArchitecture2 = $("#architecture");
        var _sectionArchitectureElemDistanceTop2 = parseInt(_sectionArchitecture2.offset().top);
        $('html, body').animate({
          scrollTop: _sectionArchitectureElemDistanceTop2
        }, 500);
      } else {
        $('.architecturePics li').not(':lt(9)').hide(10);
        var _heightOfSection8 = $("#architecture").css("height");
        _heightOfSection8 = "900px";
        $("#architecture").css("height", _heightOfSection8);
        $('.more').show();
        $('.less').hide();
        var _sectionArchitecture3 = $("#architecture");
        var _sectionArchitectureElemDistanceTop3 = parseInt(_sectionArchitecture3.offset().top);
        $('html, body').animate({
          scrollTop: _sectionArchitectureElemDistanceTop3
        }, 500);
      }
    });

    //Popup gallery at landscape section

    var visibleImgLandscape = $(".landscapePics").find("img");
    $.each(visibleImgLandscape, function () {
      $(this).on("click", function (event) {
        var currentImg = $(event.target);
        var landscapePics = document.querySelector(".landscapePics");
        var srcImg = $(event.target).attr("src");
        var newDiv = document.createElement("div");
        var prevSpan = document.createElement("span");
        var nextSpan = document.createElement("span");
        var crossElem = document.createElement("span");
        newDiv.classList.add("big");
        prevSpan.classList.add("prev");
        nextSpan.classList.add("next");
        prevSpan.classList.add("fa-angle-left");
        nextSpan.classList.add("fa-angle-right");
        prevSpan.classList.add("fa");
        nextSpan.classList.add("fa");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        var newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(prevSpan);
        newDiv.appendChild(nextSpan);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        landscapePics.appendChild(newDiv);
        nextSpan.addEventListener("click", function () {
          if (currentImg.parent().next().children().attr("src") == null) {
            landscapePics.removeChild(newDiv);
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        });
        prevSpan.addEventListener("click", function () {

          if (currentImg.parent().prev().children().attr("src") == null) {
            landscapePics.removeChild(newDiv);
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        });
        crossElem.addEventListener("click", function () {
          landscapePics.removeChild(newDiv);
        });
      });
    });
    var shown = void 0;
    $(window).on("load resize", function () {
      if ($(window).outerWidth() > 910) {
        $('.landscapePics li').hide();
        $('.landscapePics li:lt(9)').show();
        var heightOfSection = $("#landscape").css("height");
        heightOfSection = "900px";
        $("#landscape").css("height", heightOfSection);
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        var sectionLandscape = $("#landscape");
        var sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      } else if ($(window).outerWidth() <= 910) {
        $('.landscapePics li').hide();
        $('.landscapePics li:lt(4)').show();
        var _heightOfSection9 = $("#landscape").css("height");
        _heightOfSection9 = "700px";
        $("#landscape").css("height", _heightOfSection9);
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        var _sectionLandscape = $("#landscape");
        var _sectionLandscapeElemDistanceTop = parseInt(_sectionLandscape.offset().top);
      }
    });
    $('.landscapePics li:lt(4)').show();
    $('.less2').hide();
    var items = 11;
    if ($(window).outerWidth() <= 910) {
      var _shown3 = 4;
    } else {
      var _shown4 = 9;
    }
    $('.more2').click(function () {
      $('.less2').attr("style", "display:inline-block");
      shown = $('.landscapePics li:visible').length + 6;
      console.log(shown);
      if (shown < items) {
        $('.landscapePics li:lt(' + shown + ')').show(300);
        if ($(window).outerWidth() < 501) {
          var heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350;
          $("#landscape").attr("style", "height: " + heightOfSection + 'px' + ' !important');
        } else if ($(window).outerWidth() <= 910) {
          var _heightOfSection10 = $("#landscape").css("height");
          _heightOfSection10 = parseInt(_heightOfSection10) + 660;
          $("#landscape").css("height", _heightOfSection10 + "px", "important");
        } else {
          var _heightOfSection11 = $("#landscape").css("height");
          _heightOfSection11 = parseInt(_heightOfSection11) + 450;
          $("#landscape").css("height", _heightOfSection11 + "px", "important");
        }
      } else {
        $('.landscapePics li:lt(' + items + ')').show(300);
        if ($(window).outerWidth() < 501) {
          $('.more2').hide();
          $('.less2').attr("style", "left: 13%" + ' !important');
          var _heightOfSection12 = $("#landscape").css("height");
          _heightOfSection12 = parseInt(_heightOfSection12) + 350;
          $("#landscape").attr("style", "height: " + _heightOfSection12 + 'px' + ' !important');
        } else if ($(window).outerWidth() <= 910) {
          $('.more2').hide();
          $('.less2').attr("style", "left: 13%" + ' !important');
          var _heightOfSection13 = $("#landscape").css("height");
          _heightOfSection13 = parseInt(_heightOfSection13) + 280;
          $("#landscape").css("height", _heightOfSection13 + "px", "important");
        } else {
          $('.more2').hide();
          $('.less2').attr("style", "left: 13%" + ' !important');
          var _heightOfSection14 = $("#landscape").css("height");
          _heightOfSection14 = parseInt(_heightOfSection14) + 250;
          $("#landscape").css("height", _heightOfSection14 + "px", "important");
        }
        console.log($('.less2').attr("left"));
      }
    });
    $('.less2').click(function () {

      if ($(window).outerWidth() < 501) {
        $('.landscapePics li').not(':lt(4)').hide(10);
        var heightOfSection = $("#landscape").css("height");
        heightOfSection = "1100px";
        $("#landscape").attr("style", "height: " + heightOfSection + 'px' + ' !important');
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        var sectionLandscape = $("#landscape");
        var sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
        $('html, body').animate({
          scrollTop: sectionLandscapeElemDistanceTop
        }, 500);
      } else if ($(window).outerWidth() <= 910) {
        $('.landscapePics li').not(':lt(4)').hide(10);
        var _heightOfSection15 = $("#landscape").css("height");
        _heightOfSection15 = "700px";
        $("#landscape").css("height", _heightOfSection15);
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        var _sectionLandscape2 = $("#landscape");
        var _sectionLandscapeElemDistanceTop2 = parseInt(_sectionLandscape2.offset().top);
        $('html, body').animate({
          scrollTop: _sectionLandscapeElemDistanceTop2
        }, 500);
      } else {
        $('.landscapePics li').not(':lt(9)').hide(10);
        var _heightOfSection16 = $("#landscape").css("height");
        _heightOfSection16 = "900px";
        $("#landscape").css("height", _heightOfSection16);
        $('.more2').show();
        $('.less2').hide();
        var _sectionLandscape3 = $("#landscape");
        var _sectionLandscapeElemDistanceTop3 = parseInt(_sectionLandscape3.offset().top);
        $('html, body').animate({
          scrollTop: _sectionLandscapeElemDistanceTop3
        }, 500);
      }
    });
  } else {
    var _check_if_in_view = function _check_if_in_view() {
      var window_height = _$window.height();
      var window_top_position = _$window.scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each(_$animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;

        if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
          $element.addClass('in-view');
        }
      });
    };

    var _check_if_in_view2 = function _check_if_in_view2() {
      var window_height = _$window.height();
      var window_top_position = _$window.scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each(aboutMeElem, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;
        if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
          $element.addClass('in-view2');
        }
      });
    };
    // Popup gallery for Architecture


    var isMobile = {
      getUserAgent: function getUserAgent() {
        return navigator.userAgent;
      },
      Android: function Android() {
        return (/Android/i.test(isMobile.getUserAgent()) && !isMobile.Windows()
        );
      },
      BlackBerry: function BlackBerry() {
        return (/BlackBerry|BB10|PlayBook/i.test(isMobile.getUserAgent())
        );;
      },
      iPhone: function iPhone() {
        return (/iPhone/i.test(isMobile.getUserAgent()) && !isMobile.iPad() && !isMobile.Windows()
        );
      },
      iPod: function iPod() {
        return (/iPod/i.test(isMobile.getUserAgent())
        );
      },
      iPad: function iPad() {
        return (/iPad/i.test(isMobile.getUserAgent())
        );
      },
      iOS: function iOS() {
        return isMobile.iPad() || isMobile.iPod() || isMobile.iPhone();
      },
      Opera: function Opera() {
        return (/Opera Mini/i.test(isMobile.getUserAgent())
        );
      },
      Windows: function Windows() {
        return (/Windows Phone|IEMobile|WPDesktop/i.test(isMobile.getUserAgent())
        );
      },
      KindleFire: function KindleFire() {
        return (/Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(isMobile.getUserAgent())
        );
      },
      any: function any() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      }
    };
    if (isMobile.iOS() || isMobile.iPhone() || isMobile.iPad()) {
      $(".parallax").css("background-attachment", "scroll", "important");
      $(".parallax2").css("background-attachment", "scroll", "important");
      $(".parallax3").css("background-attachment", "scroll", "important");
      $(".parallax4").css("background-attachment", "scroll", "important");
    }
    setTimeout(function () {
      $(".loader").fadeOut('slow');
    }, 5000);
    //Loading burger and menu border
    $(".fa-bars").on("click", function () {
      $(this).toggleClass('fa-bars');
      $(this).toggleClass('fa-times');
      $(".burgerList").find("li").toggle(200);
    });

    $(document).on("scroll resize", function () {
      var sectionAboutElem = $("#about");
      var sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
      var sectionArchitecture = $("#architecture");
      var sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      var sectionLandscape = $("#landscape");
      var sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      var sectionContact = $(".parallax4");
      var sectionContactElemDistanceTop = parseInt(sectionContact.offset().top);
      var scrollingStartDistance = $("#header").offset().top;
      var scrollTop = $(document).scrollTop();
      if (scrollTop > scrollingStartDistance) {
        $(".menu").slideDown(1);
        $(".menu").css("display", "flex");
      }

      //Border bottom for anchor About Me
      if (scrollTop >= sectionAboutElemDistanceTop - 1 && scrollTop <= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css({ borderBottom: "4px solid #c19e7e" });
      } else if (scrollTop < sectionAboutElemDistanceTop) {
        $(".menu").find("li").first().css("border-bottom", "");
      } else if (scrollTop >= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css("border-bottom", "");
      }
      //Border bottom for anchor Architecture
      if (scrollTop >= sectionArchitectureElemDistanceTop - 1 && scrollTop <= sectionArchitectureElemDistanceTop + parseInt($("#architecture").css("height")) - 60) {
        $(".menu").find("li").eq(1).css({ borderBottom: "4px solid #c19e7e" });
      } else if (scrollTop < sectionArchitectureElemDistanceTop) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      } else if (scrollTop >= sectionArchitectureElemDistanceTop + 660) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      }
      //Border bottom for anchor Landscape
      if (scrollTop >= sectionLandscapeElemDistanceTop - 1 && scrollTop <= sectionLandscapeElemDistanceTop + parseInt($("#landscape").css("height")) - 61) {
        $(".menu").find("li").eq(2).css({ borderBottom: "4px solid #c19e7e" });
      } else if (scrollTop < sectionLandscapeElemDistanceTop) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      } else if (scrollTop >= sectionLandscapeElemDistanceTop + 660) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      }
      //Border bottom for anchor contact
      if (scrollTop >= sectionContactElemDistanceTop - 60) {
        $(".menu").find("li").eq(3).css({ borderBottom: "4px solid #c19e7e" });
      } else if (scrollTop < sectionContactElemDistanceTop) {
        $(".menu").find("li").eq(3).css("border-bottom", "");
      }
    });

    $(window).on("load resize", function () {
      if ($(window).outerWidth() >= 680) {
        $(".burgerList").addClass('menuList');
        $(".burgerList").removeClass('burgerList');
      } else if ($(window).outerWidth() < 680) {
        $(".menuList").addClass('burgerList');
        $(".menuList").removeClass('menuList');
      }
    });

    $('a').click(function () {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      if ($(".fa-times").css("display") == "block") {
        $(".burgerList").find("li").hide(200);
        $(".menu").find("i").toggleClass('fa-bars');
        $(".menu").find("i").toggleClass('fa-times');
      }
      return false;
    });

    //About Me section Loading and scroll
    var _$animation_elements = $('.info').children();
    var _$window = $(window);
    _$window.on('scroll resize', _check_if_in_view);
    _$window.on('scroll resize', _check_if_in_view2);

    var aboutMeElem = $(".aboutMe");
    var _visibleImgArchitecture = $(".architecturePics").find("img");
    $.each(_visibleImgArchitecture, function () {
      $(this).on("click", function (event) {
        var currentImg = $(event.target);
        var architecturePics = document.querySelector(".architecturePics");
        var srcImg = $(event.target).attr("src");
        var newDiv = document.createElement("div");
        var crossElem = document.createElement("span");
        newDiv.classList.add("big");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        var newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        architecturePics.appendChild(newDiv);
        $(".big").find("img").swipeleft(function () {
          if (currentImg.parent().next().children().attr("src") == null) {
            architecturePics.removeChild(newDiv);
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        });
        $(".big").find("img").swiperight(function () {

          if (currentImg.parent().prev().children().attr("src") == null) {
            architecturePics.removeChild(newDiv);
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        });
        crossElem.addEventListener("click", function () {
          architecturePics.removeChild(newDiv);
        });
      });
    });
    //Loading images for Architecture
    var _shown5 = void 0;
    $(window).on("load resize", function () {
      if ($(window).outerWidth() > 910) {
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(9)').show();
        var heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection);
        $('.more').show();
        $('.less').hide();
        var sectionArchitecture = $("#architecture");
        var sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      } else if ($(window).outerWidth() <= 910) {
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(4)').show();
        var _heightOfSection17 = $("#architecture").css("height");
        _heightOfSection17 = "700px";
        $("#architecture").css("height", _heightOfSection17);
        $('.more').show();
        $('.less').hide();
        var _sectionArchitecture4 = $("#architecture");
        var _sectionArchitectureElemDistanceTop4 = parseInt(_sectionArchitecture4.offset().top);
      }
    });
    $('.architecturePics li:lt(4)').show();
    $('.less').hide();
    var _items = 36;
    if ($(window).outerWidth() <= 910) {
      var _shown7 = 4;
    } else {
      var _shown8 = 9;
    }
    $('.more').click(function () {
      $('.less').attr('style', 'display:inline-block');
      _shown5 = $('.architecturePics li:visible').length + 6;
      console.log(_shown5);
      if (_shown5 < _items) {
        $('.architecturePics li:lt(' + _shown5 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          var heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350;
          $("#architecture").attr("style", "height: " + heightOfSection + 'px' + ' !important');
        } else if ($(window).outerWidth() <= 910) {
          var _heightOfSection18 = $("#architecture").css("height");
          _heightOfSection18 = parseInt(_heightOfSection18) + 660;
          $("#architecture").css("height", _heightOfSection18 + "px", "important");
        } else {
          var _heightOfSection19 = $("#architecture").css("height");
          _heightOfSection19 = parseInt(_heightOfSection19) + 450;
          $("#architecture").css("height", _heightOfSection19 + "px", "important");
        }
      } else {
        $('.architecturePics li:lt(' + _items + ')').show(300);
        if ($(window).outerWidth() < 501) {
          $('.more').hide();
          var _heightOfSection20 = $("#architecture").css("height");
          _heightOfSection20 = parseInt(_heightOfSection20) + 350;
          $("#architecture").attr("style", "height: " + _heightOfSection20 + 'px' + ' !important');
        } else if ($(window).outerWidth() <= 910) {
          $('.more').hide();
          var _heightOfSection21 = $("#architecture").css("height");
          _heightOfSection21 = parseInt(_heightOfSection21) + 280;
          $("#architecture").css("height", _heightOfSection21 + "px", "important");
        } else {
          $('.more').hide();
          var _heightOfSection22 = $("#architecture").css("height");
          _heightOfSection22 = parseInt(_heightOfSection22) + 250;
          $("#architecture").css("height", _heightOfSection22 + "px", "important");
        }
      }
    });
    $('.less').click(function () {
      if ($(window).outerWidth() < 501) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        var heightOfSection = $("#architecture").css("height");
        heightOfSection = "700px";
        $("#architecture").attr("style", "height: " + heightOfSection + 'px' + ' !important');
        $('.more').show();
        $('.less').hide();
        var sectionArchitecture = $("#architecture");
        var sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      }
      if ($(window).outerWidth() <= 910) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        var _heightOfSection23 = $("#architecture").css("height");
        _heightOfSection23 = "700px";
        $("#architecture").css("height", _heightOfSection23);
        $('.more').show();
        $('.less').hide();
        var _sectionArchitecture5 = $("#architecture");
        var _sectionArchitectureElemDistanceTop5 = parseInt(_sectionArchitecture5.offset().top);
        $('html, body').animate({
          scrollTop: _sectionArchitectureElemDistanceTop5
        }, 500);
      } else {
        $('.architecturePics li').not(':lt(9)').hide(10);
        var _heightOfSection24 = $("#architecture").css("height");
        _heightOfSection24 = "900px";
        $("#architecture").css("height", _heightOfSection24);
        $('.more').show();
        $('.less').hide();
        var _sectionArchitecture6 = $("#architecture");
        var _sectionArchitectureElemDistanceTop6 = parseInt(_sectionArchitecture6.offset().top);
        $('html, body').animate({
          scrollTop: _sectionArchitectureElemDistanceTop6
        }, 500);
      }
    });
    var _shown6 = void 0;
    var _visibleImgLandscape = $(".landscapePics").find("img");
    $.each(_visibleImgLandscape, function () {
      $(this).on("click", function (event) {
        var currentImg = $(event.target);
        var landscapePics = document.querySelector(".landscapePics");
        var srcImg = $(event.target).attr("src");
        var newDiv = document.createElement("div");
        var crossElem = document.createElement("span");
        newDiv.classList.add("big");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        var newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        landscapePics.appendChild(newDiv);
        $(".big").find("img").swipeleft(function () {
          if (currentImg.parent().next().children().attr("src") == null) {
            landscapePics.removeChild(newDiv);
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        });
        $(".big").find("img").swiperight(function () {

          if (currentImg.parent().prev().children().attr("src") == null) {
            landscapePics.removeChild(newDiv);
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        });
        crossElem.addEventListener("click", function () {
          landscapePics.removeChild(newDiv);
        });
      });
    });

    $(window).on("load resize", function () {
      if ($(window).outerWidth() > 910) {
        $('.landscapePics li').hide();
        $('.landscapePics li:lt(9)').show();
        var heightOfSection = $("#landscape").css("height");
        heightOfSection = "900px";
        $("#landscape").css("height", heightOfSection);
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        var sectionLandscape = $("#landscape");
        var sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      } else if ($(window).outerWidth() <= 910) {
        $('.landscapePics li').hide();
        $('.landscapePics li:lt(4)').show();
        var _heightOfSection25 = $("#landscape").css("height");
        _heightOfSection25 = "700px";
        $("#landscape").css("height", _heightOfSection25);
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        var _sectionLandscape4 = $("#landscape");
        var _sectionLandscapeElemDistanceTop4 = parseInt(_sectionLandscape4.offset().top);
      }
    });
    $('.landscapePics li:lt(4)').show();
    $('.less2').hide();
    var _items2 = 11;
    if ($(window).outerWidth() <= 910) {
      var _shown9 = 4;
    } else {
      var _shown10 = 9;
    }
    $('.more2').click(function () {
      $('.less2').attr("style", "display:inline-block");
      _shown6 = $('.landscapePics li:visible').length + 6;
      console.log(_shown6);
      if (_shown6 < _items2) {
        $('.landscapePics li:lt(' + _shown6 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          var heightOfSection = $("#landscape").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350;
          $("#landscape").attr("style", "height: " + heightOfSection + 'px' + ' !important');
        } else if ($(window).outerWidth() <= 910) {
          var _heightOfSection26 = $("#landscape").css("height");
          _heightOfSection26 = parseInt(_heightOfSection26) + 660;
          $("#landscape").css("height", _heightOfSection26 + "px", "important");
        } else {
          var _heightOfSection27 = $("#landscape").css("height");
          _heightOfSection27 = parseInt(_heightOfSection27) + 450;
          $("#landscape").css("height", _heightOfSection27 + "px", "important");
        }
      } else {
        $('.landscapePics li:lt(' + _items2 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          $('.more2').hide();
          $('.less2').attr("left", "13%");
          var _heightOfSection28 = $("#landscape").css("height");
          _heightOfSection28 = parseInt(_heightOfSection28) + 350;
          $("#landscape").attr("style", "height: " + _heightOfSection28 + 'px' + ' !important');
        } else if ($(window).outerWidth() <= 910) {
          $('.more2').hide();
          $('.less2').attr("left", "13%");
          var _heightOfSection29 = $("#landscape").css("height");
          _heightOfSection29 = parseInt(_heightOfSection29) + 280;
          $("#landscape").css("height", _heightOfSection29 + "px", "important");
        } else {
          $('.more2').hide();
          var _heightOfSection30 = $("#landscape").css("height");
          _heightOfSection30 = parseInt(_heightOfSection30) + 250;
          $("#landscape").css("height", _heightOfSection30 + "px", "important");
        }
      }
    });
    $('.less2').click(function () {

      if ($(window).outerWidth() < 501) {
        $('.landscapePics li').not(':lt(4)').hide(10);
        var heightOfSection = $("#landscape").css("height");
        heightOfSection = "1100px";
        $("#landscape").attr("style", "height: " + heightOfSection + 'px' + ' !important');
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        var sectionLandscape = $("#landscape");
        var sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
        $('html, body').animate({
          scrollTop: sectionLandscapeElemDistanceTop
        }, 500);
      } else if ($(window).outerWidth() <= 910) {
        $('.landscapePics li').not(':lt(4)').hide(10);
        var _heightOfSection31 = $("#landscape").css("height");
        _heightOfSection31 = "700px";
        $("#landscape").css("height", _heightOfSection31);
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        var _sectionLandscape5 = $("#landscape");
        var _sectionLandscapeElemDistanceTop5 = parseInt(_sectionLandscape5.offset().top);
        $('html, body').animate({
          scrollTop: _sectionLandscapeElemDistanceTop5
        }, 500);
      } else {
        $('.landscapePics li').not(':lt(9)').hide(10);
        var _heightOfSection32 = $("#landscape").css("height");
        _heightOfSection32 = "900px";
        $("#landscape").css("height", _heightOfSection32);
        $('.more2').show();
        $('.more2').attr('style', 'display:inline-block');
        $('.less2').hide();
        var _sectionLandscape6 = $("#landscape");
        var _sectionLandscapeElemDistanceTop6 = parseInt(_sectionLandscape6.offset().top);
        $('html, body').animate({
          scrollTop: _sectionLandscapeElemDistanceTop6
        }, 500);
      }
    });
  }
});

/***/ })
/******/ ]);