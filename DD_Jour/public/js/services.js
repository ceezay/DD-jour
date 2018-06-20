$(document).ready(function() {

  $('.steps').waypoint(function(direction) {
     $('.steps').css('visibility', 'visible');
    $('.steps').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

});