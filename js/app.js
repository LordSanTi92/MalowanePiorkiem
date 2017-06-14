$(function() {
  let ulElem = $(".menu");
  let ulPos = ulElem.position().top
  let scrollingStartDistance = $(".menu").offset().top;
  let sectionAboutElem = $("#about");
  let sectionAboutElemPositionTop = parseInt(sectionAboutElem.position().top);
  let sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);


   $(document).scroll(function () {
       let scrollTop = $(document).scrollTop();
       $(".menu").toggleClass("sticky", scrollTop > scrollingStartDistance);
       if(scrollTop >= sectionAboutElemPositionTop-60 && scrollTop<=sectionAboutElemPositionTop+600){
       $(".menu").find("li").first().css("border-bottom","2px solid red");
     }
     else if (scrollTop < sectionAboutElemPositionTop-60){
       $(".menu").find("li").first().css("border-bottom","");
     }
     else if(scrollTop >= sectionAboutElemPositionTop+540){
        $(".menu").find("li").first().css("border-bottom","");
     }
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

    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
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

  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
    $element.addClass('in-view2');
  }
})
}



})
