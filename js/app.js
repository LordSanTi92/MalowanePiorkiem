require('../sass/style.scss')
// DOMCONTENTLOADED
$(function() {
  //TEST IF USER IS USING MOBILE OR TABLET
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

    //TIMEOUT FOR LOADING SCREEN
    window.addEventListener('load',()=>{
      $(".loader").fadeOut('slow');
    })
    


    //OPENING MENU ON BURGER AND CHANGING ICON OF BURGER TO CROSS AND CROSS TO BURGER VIA TOGGLE
    $(".fa-bars").on("click", function() {
      $(this).toggleClass('fa-bars');
      $(this).toggleClass('fa-times');
      $(".burgerList").find("li").toggle(200);
    })

    //CHECKING DISTANCE FROM TOP FOR EVERY SECTION
    $(document).on("scroll resize", (function() {
      let sectionAboutElem = $("#about");
      let sectionAboutElemDistanceFromTop = parseInt(sectionAboutElem.offset().top);
      let sectionArchitecture = $("#architecture");
      let sectionArchitectureElemDistanceFromTop = parseInt(sectionArchitecture.offset().top);
      let sectionLandscape = $("#landscape");
      let sectionLandscapeElemDistanceFromTop = parseInt(sectionLandscape.offset().top);
      let sectionContact = $("#contact");
      let sectionContactElemDistanceFromTop = parseInt(sectionContact.offset().top);
      let parallax2DistanceFromTop = parseInt($('.parallax2').offset().top);
      let parallax3DistanceFromTop = parseInt($('.parallax3').offset().top);
      let parallax4DistanceFromTop = parseInt($('.parallax4').offset().top);
      let scrollingStartDistance = $("#header").offset().top;
      let scrollTop = $(document).scrollTop();
      if (scrollTop > scrollingStartDistance) {
        $(".menu").slideDown(1);
      }

      //Border bottom for anchor About Me
      if (scrollTop >= sectionAboutElemDistanceFromTop - 1 && scrollTop <= parallax2DistanceFromTop-60) {
        $(".menu").find("li").first().css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionAboutElemDistanceFromTop) {
        $(".menu").find("li").first().css("border-bottom", "");
      } else if (scrollTop >= parallax2DistanceFromTop-60) {
        $(".menu").find("li").first().css("border-bottom", "");
      }
      //Border bottom for anchor Architecture
      if (scrollTop >= sectionArchitectureElemDistanceFromTop - 1 && scrollTop <=  parallax3DistanceFromTop-60){
        $(".menu").find("li").eq(1).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionArchitectureElemDistanceFromTop) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      } else if (scrollTop >= parallax3DistanceFromTop-60) {
        $(".menu").find("li").eq(1).css("border-bottom", "");
      }
      //Border bottom for anchor Landscape
      if (scrollTop >= sectionLandscapeElemDistanceFromTop - 1 && scrollTop <= parallax4DistanceFromTop-60 ) {
        $(".menu").find("li").eq(2).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionLandscapeElemDistanceFromTop) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      } else if (scrollTop >= parallax4DistanceFromTop -60 ) {
        $(".menu").find("li").eq(2).css("border-bottom", "");
      }
      //Border bottom for anchor contact
      if (scrollTop >= parallax4DistanceFromTop - 20) {
        $(".menu").find("li").eq(3).css({borderBottom: "4px solid #c19e7e"})
      } else if (scrollTop < sectionContactElemDistanceFromTop) {
        $(".menu").find("li").eq(3).css("border-bottom", "");
      }
    }));

    //FUNCTION WHICH WILL CHANGE MENU TO BURGER AND BURGER TO MENU
    $(window).on("load resize", function() {
      if ($(window).outerWidth() >= 680) {
        $(".burgerList").addClass('menuList');
        $(".burgerList").removeClass('burgerList')
      } else if ($(window).outerWidth() < 680) {
        $(".menuList").addClass('burgerList');
        $(".menuList").removeClass('menuList')
      }
    })

    //FUNCTION WITH SMOOTH SCROLL TO SECTION
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
})
