$(function() {

   $(document).on("scroll resize",(function () {
          let sectionAboutElem = $("#about");
          let sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
          let sectionArchitecture = $("#architecture");
          let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
          let sectionLandscape = $("#landscape");
          let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
          let scrollingStartDistance = $("#header").offset().top;
          let scrollTop = $(document).scrollTop();
          if(scrollTop > scrollingStartDistance){
          $(".menu").slideDown(1);
          $(".menu").css("display","flex");
        }

//Border bottom for anchor About Me
       if(scrollTop >= sectionAboutElemDistanceTop-1 && scrollTop<=sectionAboutElemDistanceTop+700){
       $(".menu").find("li").first().css({
         borderBottom : "4px solid #c19e7e"
       })}
     else if (scrollTop < sectionAboutElemDistanceTop){
       $(".menu").find("li").first().css("border-bottom","");
     }
     else if(scrollTop >= sectionAboutElemDistanceTop+700){
        $(".menu").find("li").first().css("border-bottom","");
     }
//Border bottom for anchor Architecture
     if(scrollTop >= sectionArchitectureElemDistanceTop-1 && scrollTop<=sectionArchitectureElemDistanceTop+660){
     $(".menu").find("li").eq(1).css({
       borderBottom : "4px solid #c19e7e"
     })}
   else if (scrollTop < sectionArchitectureElemDistanceTop){
     $(".menu").find("li").eq(1).css("border-bottom","");
   }
   else if(scrollTop >= sectionArchitectureElemDistanceTop+660){
      $(".menu").find("li").eq(1).css("border-bottom","");
   }
   //Border bottom for anchor Landscape
        if(scrollTop >= sectionLandscapeElemDistanceTop-1 && scrollTop<=sectionLandscapeElemDistanceTop+660){
        $(".menu").find("li").eq(2).css({
          borderBottom : "4px solid #c19e7e"
        })}
      else if (scrollTop < sectionLandscapeElemDistanceTop){
        $(".menu").find("li").eq(2).css("border-bottom","");
      }
      else if(scrollTop >= sectionLandscapeElemDistanceTop+660){
         $(".menu").find("li").eq(2).css("border-bottom","");
      }

}));
$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
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
