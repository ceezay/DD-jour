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


    $('.testimonial-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        centerMode: true,
        centerPadding: '60px',
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        autoplaySpeed: 2000,
        focusOnSelect: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


});