$(function() {
  var ulElem = $(".menu");
  var ulPos = ulElem.position().top
  var scrollingStartDistance = $(".menu").offset().top;

   $(document).scroll(function () {
       var scrollTop = $(document).scrollTop();
       $(".menu").toggleClass("sticky", scrollTop > scrollingStartDistance);
   });
})
