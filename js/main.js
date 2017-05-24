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
    arrows: true,
    centerMode: true,
    focusOnSelect: true
  });
});

//number of units
var plusElement = $('.plus');
var minusElement = $('.minus');
var numberElement = $('.choose-quantity').find('.number');


plusElement.click(function(){
  var sVal = numberElement.text();
  var iNum = parseInt(sVal);

  var iValue = iNum + 1;
  numberElement.text(iValue);
});

minusElement.click(function(){
  var sVal = numberElement.text();
  var iNum = parseInt(sVal);

  var iValue = iNum - 1;
  numberElement.text(iValue);
});

//choose size
var size = $('.size');

size.click(function(){
  size.removeClass("active");
  $(this).addClass("active");
});

//slider
var minValue = 0;
var maxValue = 1000;

 $( function() {
  $( ".radio" ).checkboxradio();

  $( "#slider" ).slider({
      range: true,
      step: 100,
      min: minValue,
      max: maxValue,
      values: [ minValue, maxValue ],
      change: function( event, ui ) {
        
        var values = $( "#slider" ).slider("values");
        $('.start').val(values[0]);
        $('.end').val(values[1]);
      }
    });
    $('.start').val(minValue);
    $('.end').val(maxValue);
    var range = $( "#slider" ).slider( "option", "range" );  
  });