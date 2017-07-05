
require("../sass/style.scss")




$(function() {
  $(document).on("scroll resize", (function() {
    let sectionAboutElem = $("#about");
    let sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
    let sectionArchitecture = $("#architecture");
    let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
    let sectionLandscape = $("#landscape");
    let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
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
    if (scrollTop >= sectionArchitectureElemDistanceTop - 1 && scrollTop <= sectionArchitectureElemDistanceTop + parseInt($("#architecture").css("height"))-60) {
      $(".menu").find("li").eq(1).css({borderBottom: "4px solid #c19e7e"})
    } else if (scrollTop < sectionArchitectureElemDistanceTop) {
      $(".menu").find("li").eq(1).css("border-bottom", "");
    } else if (scrollTop >= sectionArchitectureElemDistanceTop + 660) {
      $(".menu").find("li").eq(1).css("border-bottom", "");
    }
    //Border bottom for anchor Landscape
    if (scrollTop >= sectionLandscapeElemDistanceTop - 1 && scrollTop <= sectionLandscapeElemDistanceTop + parseInt($("#architecture").css("height"))) {
      $(".menu").find("li").eq(2).css({borderBottom: "4px solid #c19e7e"})
    } else if (scrollTop < sectionLandscapeElemDistanceTop) {
      $(".menu").find("li").eq(2).css("border-bottom", "");
    } else if (scrollTop >= sectionLandscapeElemDistanceTop + 660) {
      $(".menu").find("li").eq(2).css("border-bottom", "");
    }

  }));
  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
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
  //Pop up gallery
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
      prevSpan.classList.add("fa-caret-left");
      nextSpan.classList.add("fa-caret-right");
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
var checkWidth;
    $(window).on("load resize",function(){
    if($(window).outerWidth()>910){
      $('.architecturePics li:lt(9)').show();
      $("#architecture").css("height","900px")
    }
    else
    {
      $('.architecturePics li:lt(9)').hide();
      $('.architecturePics li:lt(4)').show();
      $("#architecture").css("height","700px")
    }


    // if ($(window).outerWidth()<910) {
    //     $(".more").addClass('more2');
    //     $(".less").addClass('less2');
    //     $(".more").removeClass('more');
    //     $(".less").removeClass('less');
    //     $('.architecturePics li:lt(9)').hide();
    //     $('.architecturePics li:lt(4)').show();
    //     $('.less').hide();
    //     let items2 =  27;
    //     let shown2 =  4;
    //     $('.more2').click(function () {
    //         $('.less2').show();
    //         shown2 = $('.architecturePics li:visible').length+4;
    //         console.log(shown2);
    //         if(shown2 < items2) {$('.architecturePics li:lt('+shown2+')').show(300);
    //          let heightOfSection = $("#architecture").css("height");
    //          heightOfSection= parseInt(heightOfSection)+650
    //          $("#architecture").css("height",heightOfSection+"px")
    //       }
    //         else {$('.architecturePics li:lt('+items2+')').show(300);
    //              $('.more2').hide();
    //              let heightOfSection = $("#architecture").css("height");
    //              heightOfSection= parseInt(heightOfSection)+650
    //              $("#architecture").css("height",heightOfSection+"px")
    //              }
    //     });
    //     $('.less2').click(function () {
    //         $('.architecturePics li').not(':lt(9)').hide(10);
    //         let heightOfSection = $("#architecture").css("height");
    //         heightOfSection = "900px";
    //         $("#architecture").css("height",heightOfSection)
    //         $('.more2').show();
    //         $('.less2').hide();
    //     });
    // }
    // else if ($(window).outerWidth()>910){
    //   $(".more2").addClass('more');
    //   $(".less2").addClass('less');
    //   $(".more2").removeClass('more2');
    //   $(".less2").removeClass('less2');
    //   $('.architecturePics li:lt(9)').show();
    //   $('.less').hide();
    // }
  })
  $('.architecturePics li:lt(4)').show();
  $('.less').hide();
  let items2 =  27;
  let shown2 =  4;
  $('.more').click(function () {
      $('.less').show();
      shown2 = $('.architecturePics li:visible').length+6;
      console.log(shown2);
      if(shown2 < items2) {$('.architecturePics li:lt('+shown2+')').show(300);
          if ($(window).outerWidth()<910) {
            let heightOfSection = $("#architecture").css("height");
            heightOfSection= parseInt(heightOfSection)+650
            $("#architecture").css("height",heightOfSection+"px")
          }
          else {
       let heightOfSection = $("#architecture").css("height");
       heightOfSection= parseInt(heightOfSection)+450
       $("#architecture").css("height",heightOfSection+"px")
     }
    }
      else {$('.architecturePics li:lt('+items2+')').show(300);
        if ($(window).outerWidth()<910) {
           $('.more').hide();
           let heightOfSection = $("#architecture").css("height");
           heightOfSection= parseInt(heightOfSection)+650
           $("#architecture").css("height",heightOfSection+"px")
           }
         else{
          $('.more').hide();
          let heightOfSection = $("#architecture").css("height");
          heightOfSection= parseInt(heightOfSection)+450
          $("#architecture").css("height",heightOfSection+"px")
         }
  }
});
  $('.less').click(function () {
      if ($(window).outerWidth()<910){
      $('.architecturePics li').not(':lt(4)').hide(10);
      let heightOfSection = $("#architecture").css("height");
      heightOfSection = "700px";
      $("#architecture").css("height",heightOfSection)
      $('.more').show();
      $('.less').hide();
    }
    else {
      $('.architecturePics li').not(':lt(9)').hide(10);
      let heightOfSection = $("#architecture").css("height");
      heightOfSection = "900px";
      $("#architecture").css("height",heightOfSection)
      $('.more').show();
      $('.less').hide();
    }
  });


//
//   $('.architecturePics li:lt(9)').show();
//   $('.less').hide();
//   let items =  27;
//   let shown =  9;
//   $('.more').click(function () {
//       $('.less').show();
//       shown = $('.architecturePics li:visible').length+9;
//       if(shown < items) {$('.architecturePics li:lt('+shown+')').show(300);
//        let heightOfSection = $("#architecture").css("height");
//        heightOfSection= parseInt(heightOfSection)+650
//        $("#architecture").css("height",heightOfSection+"px")
//     }
//       else {$('.architecturePics li:lt('+items+')').show(300);
//            $('.more').hide();
//            let heightOfSection = $("#architecture").css("height");
//            heightOfSection= parseInt(heightOfSection)+650
//            $("#architecture").css("height",heightOfSection+"px")
//            }
//   });
//   $('.less').click(function () {
//       $('.architecturePics li').not(':lt(9)').hide(10);
//       let heightOfSection = $("#architecture").css("height");
//       heightOfSection = "900px";
//       $("#architecture").css("height",heightOfSection)
//       $('.more').show();
//       $('.less').hide();
//   });
// }



//landscape section

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
    prevSpan.classList.add("fa-caret-left");
    nextSpan.classList.add("fa-caret-right");
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
  //   if($(".big").length > 0){
  //   $.each($(".menuList").find("a"),function(){
  //     $(this).on("click",function(){
  //       architecturePics.removeChild(newDiv)
  //     })
  //   })
  // }
  // else{
  //   $.each($(".menuList").find("a"),function(){
  //   $(this).removeAttr('onclick')
  // })

  // }
  })
})

     $('.landscapePics li:lt(9)').show();
        $('.landscapePics').find('.less').hide();
        var items =  27;
        var shown =  9;
        $('.landscapePics').find('.more').click(function () {
            $('.landscapePics').find('.less').show();
            shown = $('.landscapePics li:visible').length+9;
            if(shown< items) {$('.landscapePics li:lt('+shown+')').show(300);
             let heightOfSection = $("#landscape").css("height");
             heightOfSection= parseInt(heightOfSection)+700
             $("#landscape").css("height",heightOfSection+"px")
          }
          else if(shown = items) {$('.landscapePics li:lt('+shown+')').show(300);
           $('.landscapePics').find('.more').hide();
           let heightOfSection = $("#landscape").css("height");
           heightOfSection= parseInt(heightOfSection)+700
           $("#landscape").css("height",heightOfSection+"px")
        }
            else {$('.landscapePics li:lt('+items+')').show(300);
                 $('.landscapePics').find('.more').hide();
                 let heightOfSection = $("#landscape").css("height");
                 heightOfSection= parseInt(heightOfSection)+300
                 $("#landscape").css("height",heightOfSection+"px")
                 }
        });
        $('.landscapePics').find('.less').click(function () {
            $('.architecturePics li').not(':lt(9)').hide(10);
            let heightOfSection = $("#architecture").css("height");
            heightOfSection = "900px";
            $("#architecture").css("height",heightOfSection)
            $('.landscapePics').find('.more').show();
            $('.landscapePics').find('.less').hide();
        });


})
