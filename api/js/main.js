$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
  	arrows: false
  });
  $('.arrivals-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4
});
});