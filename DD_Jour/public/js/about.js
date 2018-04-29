$(document).ready(function() {

  $('.profile').waypoint(function(direction) {
     $('.profile').css('visibility', 'visible');
    $('.profile').addClass('animated fadeInUp');
  }, {
    offset: '40%'
  });
});