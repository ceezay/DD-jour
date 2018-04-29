$(document).ready(function() {

  $('.steps').waypoint(function(direction) {
     $('.steps').css('visibility', 'visible');
    $('.steps').addClass('animated fadeInUp');
  }, {
    offset: '70%'
  });

  $('.spec-left').waypoint(function(direction) {
     $('.spec-left').css('visibility', 'visible');
    $('.spec-left').addClass('animated fadeInLeft');
  }, {
    offset: '90%'
  });

  $('.spec-up').waypoint(function(direction) {
     $('.spec-up').css('visibility', 'visible');
    $('.spec-up').addClass('animated fadeInUp');
  }, {
    offset: '90%'
  });

  $('.spec-down').waypoint(function(direction) {
     $('.spec-down').css('visibility', 'visible');
    $('.spec-down').addClass('animated fadeInDown');
  }, {
    offset: '90%'
  });

  $('.spec-right').waypoint(function(direction) {
     $('.spec-right').css('visibility', 'visible');
    $('.spec-right').addClass('animated fadeInRight');
  }, {
    offset: '90%'
  });

});