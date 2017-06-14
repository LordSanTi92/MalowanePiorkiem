$(function() {
      let menuElem = $(".menu");
      let ulPos = menuElem.position().top
       let sectionAboutElem = $("#about");
       let sectionAboutElemPositionTop = parseInt(sectionAboutElem.position().top);
       let sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
       let scrollingStartDistance = $("#header").offset().top;

   $(document).on("scroll resize",(function () {
          let scrollingStartDistance = $("#header").offset().top;
          let scrollTop = $(document).scrollTop();
          console.log(scrollTop);
          console.log(scrollingStartDistance);
          $(".menu").slideDown();
          $(".menu").toggleClass("sticky",scrollTop > scrollingStartDistance);


       if(scrollTop >= sectionAboutElemDistanceTop && scrollTop<=sectionAboutElemDistanceTop+640){
       $(".menu").find("li").first().css({
         borderBottom : "4px solid #c19e7e"
       })}
    //  $(".menu").find("li").find("a").first().css("color","#4a3821")}
     else if (scrollTop < sectionAboutElemDistanceTop){
       $(".menu").find("li").first().css("border-bottom","");
     }
     else if(scrollTop >= sectionAboutElemDistanceTop+640){
        $(".menu").find("li").first().css("border-bottom","");
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
