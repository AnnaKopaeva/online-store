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

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});

var minValue = 0;
var maxValue = 1000;

 $( function() {
  $( "#slider" ).slider({
      range: true,
      step: 100,
      min: minValue,
      max: maxValue,
      values: [ minValue, maxValue ],
      change: function( event, ui ) {
        
        var values = $( "#slider" ).slider( "values" );
        $('.start').val(values[0]);
        $('.end').val(values[1]);
      }
    });
    $('.start').val(minValue);
    $('.end').val(maxValue);
    var range = $( "#slider" ).slider( "option", "range" );  
  });