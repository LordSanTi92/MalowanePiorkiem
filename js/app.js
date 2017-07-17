require("../sass/style.scss")

$(function() {
  if (!/Mobi/.test(navigator.userAgent)) {

    setTimeout(() => {
      $(".loader").fadeOut('slow');
    }, 5000)

    $(".fa-bars").on("click", function() {
      $(this).toggleClass('fa-bars');
      $(this).toggleClass('fa-times');
      $(".burgerList").find("li").toggle(200);
    })

    $(document).on("scroll resize", (function() {
      let sectionAboutElem = $("#about");
      let sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
      let sectionArchitecture = $("#architecture");
      let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      let sectionLandscape = $("#landscape");
      let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      let sectionContact = $(".parallax4");
      let sectionContactElemDistanceTop = parseInt(sectionContact.offset().top);
      let scrollingStartDistance = $("#header").offset().top;
      let scrollTop = $(document).scrollTop();
      if (scrollTop > scrollingStartDistance) {
        $(".menu").slideDown(1);
      }

      //Border bottom for anchor About Me
      if (scrollTop >= sectionAboutElemDistanceTop - 1 && scrollTop <= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionAboutElemDistanceTop) {
        $(".menu").find("li").first().css("border-bottom", "");
      } else if (scrollTop >= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css("border-bottom", "");
      }
      //Border bottom for anchor Architecture
      if (scrollTop >= sectionArchitectureElemDistanceTop - 1 && scrollTop <= sectionArchitectureElemDistanceTop + parseInt($("#architecture").css("height")) - 60) {
        $(".menu").find("li").eq(1).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionArchitectureElemDistanceTop) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      } else if (scrollTop >= sectionArchitectureElemDistanceTop + 660) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      }
      //Border bottom for anchor Landscape
      if (scrollTop >= sectionLandscapeElemDistanceTop - 1 && scrollTop <= sectionLandscapeElemDistanceTop + parseInt($("#landscape").css("height")) - 61) {
        $(".menu").find("li").eq(2).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionLandscapeElemDistanceTop) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      } else if (scrollTop >= sectionLandscapeElemDistanceTop + 660) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      }
      //Border bottom for anchor contact
      if (scrollTop >= sectionContactElemDistanceTop - 60) {
        $(".menu").find("li").eq(3).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionContactElemDistanceTop) {
        $(".menu").find("li").eq(3).css("border-bottom", "");
      }
    }));

    $(window).on("load resize", function() {
      if ($(window).outerWidth() >= 680) {
        $(".burgerList").addClass('menuList');
        $(".burgerList").removeClass('burgerList')
      } else if ($(window).outerWidth() < 680) {
        $(".menuList").addClass('burgerList');
        $(".menuList").removeClass('menuList')
      }

    })

    $('a').click(function() {
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

    let $animation_elements = $('.info').children();
    let $window = $(window);
    $window.on('scroll resize', check_if_in_view);
    $window.on('scroll resize', check_if_in_view2);
    function check_if_in_view() {
      let window_height = $window.height();
      let window_top_position = $window.scrollTop();
      let window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        }
      });
    }
    var aboutMeElem = $(".aboutMe");
    function check_if_in_view2() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each(aboutMeElem, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view2');
        }
      })
    }

    //Pop up gallery architecture

    let visibleImgArchitecture = $(".architecturePics").find("img");
    $.each(visibleImgArchitecture, function() {
      $(this).on("click", event => {
        let currentImg = $(event.target);
        let architecturePics = document.querySelector(".architecturePics");
        let srcImg = $(event.target).attr("src");
        let newDiv = document.createElement("div");
        let prevSpan = document.createElement("span");
        let nextSpan = document.createElement("span");
        let crossElem = document.createElement("span");
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
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(prevSpan);
        newDiv.appendChild(nextSpan);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        architecturePics.appendChild(newDiv);
        nextSpan.addEventListener("click", () => {
          if (currentImg.parent().next().children().attr("src") == null) {
            architecturePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        prevSpan.addEventListener("click", () => {

          if (currentImg.parent().prev().children().attr("src") == null) {
            architecturePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        crossElem.addEventListener("click", function() {
          architecturePics.removeChild(newDiv)
        })
      })
    })

    // Loading Images at Architecture section
    $(window).on("load resize", function() {
      if ($(window).outerWidth() > 910) {
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(9)').show();
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      } else if ($(window).outerWidth() <= 910){
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(4)').show();
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "700px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      }
    })
    $('.architecturePics li:lt(4)').show();
    $('.less').hide();
    let items2 = 36;
    if ($(window).outerWidth() <= 910) {
    let shown2 = 4;
  }
  else{
    let shown2 = 9;
  }
    $('.more').click(function() {
      $('.less').attr("style", "display:inline-block");
      shown2 = $('.architecturePics li:visible').length + 6;
      console.log(shown2);
      if (shown2 < items2) {
        $('.architecturePics li:lt(' + shown2 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350
          $("#architecture").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 660
          $("#architecture").css("height", heightOfSection + "px", "important")
        } else {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 450
          $("#architecture").css("height", heightOfSection + "px", "important")
        }

      } else {
        $('.architecturePics li:lt(' + items2 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 350
          $("#architecture").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 280
          $("#architecture").css("height", heightOfSection + "px", "important")
        } else {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 250
          $("#architecture").css("height", heightOfSection + "px", "important")
        }
      }
    });
    $('.less').click(function() {

      if ($(window).outerWidth() < 501) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "1100px";
        $("#architecture").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      } else if ($(window).outerWidth() <= 910) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "700px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      } else {
        $('.architecturePics li').not(':lt(9)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      }
    });

    //Popup gallery at landscape section

    let visibleImgLandscape = $(".landscapePics").find("img");
    $.each(visibleImgLandscape, function() {
      $(this).on("click", event => {
        let currentImg = $(event.target);
        let landscapePics = document.querySelector(".landscapePics");
        let srcImg = $(event.target).attr("src");
        let newDiv = document.createElement("div");
        let prevSpan = document.createElement("span");
        let nextSpan = document.createElement("span");
        let crossElem = document.createElement("span");
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
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(prevSpan);
        newDiv.appendChild(nextSpan);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        landscapePics.appendChild(newDiv);
        nextSpan.addEventListener("click", () => {
          if (currentImg.parent().next().children().attr("src") == null) {
            landscapePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        prevSpan.addEventListener("click", () => {

          if (currentImg.parent().prev().children().attr("src") == null) {
            landscapePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        crossElem.addEventListener("click", function() {
          landscapePics.removeChild(newDiv)
        })
      })
    })

    $('.landscapePics li:lt(9)').show();
    $('.landscapePics').find('.less').hide();
    var items = 27;
    var shown = 9;
    $('.landscapePics').find('.more').click(function() {
      $('.landscapePics').find('.less').show();
      shown = $('.landscapePics li:visible').length + 9;
      if (shown < items) {
        $('.landscapePics li:lt(' + shown + ')').show(300);
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = parseInt(heightOfSection) + 700
        $("#landscape").css("height", heightOfSection + "px")
      } else if (shown = items) {
        $('.landscapePics li:lt(' + shown + ')').show(300);
        $('.landscapePics').find('.more').hide();
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = parseInt(heightOfSection) + 700
        $("#landscape").css("height", heightOfSection + "px")
      } else {
        $('.landscapePics li:lt(' + items + ')').show(300);
        $('.landscapePics').find('.more').hide();
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = parseInt(heightOfSection) + 300
        $("#landscape").css("height", heightOfSection + "px")
      }
    });
    $('.landscapePics').find('.less').click(function() {
      $('.architecturePics li').not(':lt(9)').hide(10);
      let heightOfSection = $("#architecture").css("height");
      heightOfSection = "900px";
      $("#architecture").css("height", heightOfSection)
      $('.landscapePics').find('.more').show();
      $('.landscapePics').find('.less').hide();
    }//Mobile Tablet version of JS

    );

  } else {
    const isMobile = {
      getUserAgent: () => {
        return navigator.userAgent;
      },
      Android: function() {
        return /Android/i.test(isMobile.getUserAgent()) && !isMobile.Windows();
      },
      BlackBerry: function() {
        return /BlackBerry|BB10|PlayBook/i.test(isMobile.getUserAgent());;
      },
      iPhone: function() {
        return /iPhone/i.test(isMobile.getUserAgent()) && !isMobile.iPad() && !isMobile.Windows();
      },
      iPod: function() {
        return /iPod/i.test(isMobile.getUserAgent());
      },
      iPad: function() {
        return /iPad/i.test(isMobile.getUserAgent());
      },
      iOS: function() {
        return (isMobile.iPad() || isMobile.iPod() || isMobile.iPhone());
      },
      Opera: function() {
        return /Opera Mini/i.test(isMobile.getUserAgent());
      },
      Windows: function() {
        return /Windows Phone|IEMobile|WPDesktop/i.test(isMobile.getUserAgent());
      },
      KindleFire: function() {
        return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(isMobile.getUserAgent());
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };
    if (isMobile.iOS() || isMobile.iPhone() || isMobile.iPad()) {
      $(".parallax").css("background-attachment", "scroll", "important")
      $(".parallax2").css("background-attachment", "scroll", "important")
      $(".parallax3").css("background-attachment", "scroll", "important")
      $(".parallax4").css("background-attachment", "scroll", "important")
    }
    setTimeout(() => {
      $(".loader").fadeOut('slow');
    }, 5000)
    //Loading burger and menu border
    $(".fa-bars").on("click", function() {
      $(this).toggleClass('fa-bars');
      $(this).toggleClass('fa-times');
      $(".burgerList").find("li").toggle(200);
    })

    $(document).on("scroll resize", (function() {
      let sectionAboutElem = $("#about");
      let sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
      let sectionArchitecture = $("#architecture");
      let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      let sectionLandscape = $("#landscape");
      let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
      let sectionContact = $(".parallax4");
      let sectionContactElemDistanceTop = parseInt(sectionContact.offset().top);
      let scrollingStartDistance = $("#header").offset().top;
      let scrollTop = $(document).scrollTop();
      if (scrollTop > scrollingStartDistance) {
        $(".menu").slideDown(1);
        $(".menu").css("display", "flex");
      }

      //Border bottom for anchor About Me
      if (scrollTop >= sectionAboutElemDistanceTop - 1 && scrollTop <= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionAboutElemDistanceTop) {
        $(".menu").find("li").first().css("border-bottom", "");
      } else if (scrollTop >= sectionAboutElemDistanceTop + 700) {
        $(".menu").find("li").first().css("border-bottom", "");
      }
      //Border bottom for anchor Architecture
      if (scrollTop >= sectionArchitectureElemDistanceTop - 1 && scrollTop <= sectionArchitectureElemDistanceTop + parseInt($("#architecture").css("height")) - 60) {
        $(".menu").find("li").eq(1).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionArchitectureElemDistanceTop) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      } else if (scrollTop >= sectionArchitectureElemDistanceTop + 660) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      }
      //Border bottom for anchor Landscape
      if (scrollTop >= sectionLandscapeElemDistanceTop - 1 && scrollTop <= sectionLandscapeElemDistanceTop + parseInt($("#landscape").css("height")) - 61) {
        $(".menu").find("li").eq(2).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionLandscapeElemDistanceTop) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      } else if (scrollTop >= sectionLandscapeElemDistanceTop + 660) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      }
      //Border bottom for anchor contact
      if (scrollTop >= sectionContactElemDistanceTop - 60) {
        $(".menu").find("li").eq(3).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionContactElemDistanceTop) {
        $(".menu").find("li").eq(3).css("border-bottom", "");
      }
    }));

    $(window).on("load resize", function() {
      if ($(window).outerWidth() >= 680) {
        $(".burgerList").addClass('menuList');
        $(".burgerList").removeClass('burgerList')
      } else if ($(window).outerWidth() < 680) {
        $(".menuList").addClass('burgerList');
        $(".menuList").removeClass('menuList')
      }

    })

    $('a').click(function() {
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
    let $animation_elements = $('.info').children();
    let $window = $(window);
    $window.on('scroll resize', check_if_in_view);
    $window.on('scroll resize', check_if_in_view2);
    function check_if_in_view() {
      let window_height = $window.height();
      let window_top_position = $window.scrollTop();
      let window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        }
      });
    }
    var aboutMeElem = $(".aboutMe");
    function check_if_in_view2() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each(aboutMeElem, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view2');
        }
      })
    }
    // Popup gallery for Architecture
    let visibleImgArchitecture = $(".architecturePics").find("img");
    $.each(visibleImgArchitecture, function() {
      $(this).on("click", event => {
        let currentImg = $(event.target);
        let architecturePics = document.querySelector(".architecturePics");
        let srcImg = $(event.target).attr("src");
        let newDiv = document.createElement("div");
        let crossElem = document.createElement("span");
        newDiv.classList.add("big");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        architecturePics.appendChild(newDiv);
        $(".big").find("img").swipeleft(() => {
          if (currentImg.parent().next().children().attr("src") == null) {
            architecturePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        $(".big").find("img").swiperight(() => {

          if (currentImg.parent().prev().children().attr("src") == null) {
            architecturePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        crossElem.addEventListener("click", function() {
          architecturePics.removeChild(newDiv)
        })
      })
    })
    //Loading images for Architecture
    $(window).on("load resize", function() {
      if ($(window).outerWidth() > 910) {
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(9)').show();
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      } else if ($(window).outerWidth() <= 910){
        $('.architecturePics li').hide();
        $('.architecturePics li:lt(4)').show();
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "700px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
      }
    })
    $('.architecturePics li:lt(4)').show();
    $('.less').hide();
    let items2 = 36;
    if ($(window).outerWidth() <= 910) {
    let shown2 = 4;
  }
  else{
    let shown2 = 9;
  }
    $('.more').click(function() {
      $('.less').attr('style', 'display:inline-block');
      shown2 = $('.architecturePics li:visible').length + 6;
      console.log(shown2);
      if (shown2 < items2) {
        $('.architecturePics li:lt(' + shown2 + ')').show(300);
        if ($(window).outerWidth() < 501) {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 1350
          $("#architecture").attr("style", `height: ${heightOfSection}` + 'px' + ' !important')
        } else if ($(window).outerWidth() <= 910) {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 660
          $("#architecture").css("height", heightOfSection + "px", "important")
        } else {
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 450
          $("#architecture").css("height", heightOfSection + "px", "important")
        }
      } else {
        $('.architecturePics li:lt(' + items2 + ')').show(300);
        if ($(window).outerWidth()<501){
          $('.more').hide();
           let heightOfSection = $("#architecture").css("height");
           heightOfSection= parseInt(heightOfSection)+350
           $("#architecture").attr("style", `height: ${heightOfSection}`+'px'+' !important')
         }
        else if ($(window).outerWidth() <= 910) {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 280
          $("#architecture").css("height", heightOfSection + "px", "important")
        } else {
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection = parseInt(heightOfSection) + 250
          $("#architecture").css("height", heightOfSection + "px", "important")
        }
      }
    });
    $('.less').click(function() {
      if ($(window).outerWidth()<501){
         $('.architecturePics li').not(':lt(4)').hide(10);
         let heightOfSection = $("#architecture").css("height");
         heightOfSection = "700px";
        $("#architecture").attr("style", `height: ${heightOfSection}`+'px'+' !important')
         $('.more').show();
         $('.less').hide();
         let sectionArchitecture = $("#architecture");
         let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
         $('html, body').animate({
           scrollTop: sectionArchitectureElemDistanceTop
         }, 500);
       }
      if ($(window).outerWidth() <= 910) {
        $('.architecturePics li').not(':lt(4)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "700px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      } else {
        $('.architecturePics li').not(':lt(9)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height", heightOfSection)
        $('.more').show();
        $('.less').hide();
        let sectionArchitecture = $("#architecture");
        let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
        $('html, body').animate({
          scrollTop: sectionArchitectureElemDistanceTop
        }, 500);
      }
    });

    let visibleImgLandscape = $(".landscapePics").find("img");
    $.each(visibleImgLandscape, function() {
      $(this).on("click", event => {
        let currentImg = $(event.target);
        let landscapePics = document.querySelector(".landscapePics");
        let srcImg = $(event.target).attr("src");
        let newDiv = document.createElement("div");
        let crossElem = document.createElement("span");
        newDiv.classList.add("big");
        crossElem.classList.add("cross");
        crossElem.classList.add("fa");
        crossElem.classList.add("fa-times");
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcImg);
        newDiv.appendChild(newImg);
        newDiv.appendChild(crossElem);
        landscapePics.appendChild(newDiv);
        $(".big").find("img").swipeleft(() => {
          if (currentImg.parent().next().children().attr("src") == null) {
            landscapePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().next().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        $(".big").find("img").swiperight(() => {

          if (currentImg.parent().prev().children().attr("src") == null) {
            landscapePics.removeChild(newDiv)
          } else {
            currentImg = currentImg.parent().prev().children();
            srcImg = currentImg.attr("src");
            newImg.setAttribute("src", srcImg);
          }
        })
        crossElem.addEventListener("click", function() {
          landscapePics.removeChild(newDiv)
        })
      })
    })

    $('.landscapePics li:lt(9)').show();
    $('.landscapePics').find('.less').hide();
    var items = 27;
    var shown = 9;
    $('.landscapePics').find('.more').click(function() {
      $('.landscapePics').find('.less').show();
      shown = $('.landscapePics li:visible').length + 9;
      if (shown < items) {
        $('.landscapePics li:lt(' + shown + ')').show(300);
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = parseInt(heightOfSection) + 700
        $("#landscape").css("height", heightOfSection + "px", "important")
      } else if (shown = items) {
        $('.landscapePics li:lt(' + shown + ')').show(300);
        $('.landscapePics').find('.more').hide();
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = parseInt(heightOfSection) + 700
        $("#landscape").css("height", heightOfSection + "px", "important")
      } else {
        $('.landscapePics li:lt(' + items + ')').show(300);
        $('.landscapePics').find('.more').hide();
        let heightOfSection = $("#landscape").css("height");
        heightOfSection = parseInt(heightOfSection) + 300
        $("#landscape").css("height", heightOfSection + "px", "important")
      }
    });
    $('.landscapePics').find('.less').click(function() {
      $('.architecturePics li').not(':lt(9)').hide(10);
      let heightOfSection = $("#architecture").css("height");
      heightOfSection = "900px";
      $("#architecture").css("height", heightOfSection)
      $('.landscapePics').find('.more').show();
      $('.landscapePics').find('.less').hide();
    });

  }

})
