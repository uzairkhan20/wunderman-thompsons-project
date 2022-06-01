$(function() {


    //$(".fancybox").fancybox();


    $(window).on('load', function() {
        $('body').addClass('loaded');

        window.wow.init();


    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 50) {
            $('header').addClass('fixed-header');
        } else {
            $('header').removeClass('fixed-header');
        }
    });

    //menu btn
    // menu click event
    $('.navbar-toggler').on('click', function() {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.mainMenu').addClass('act');
        } else {
            $('.mainMenu').removeClass('act');
        }
    });


    //Map
    $('.object-label').on('click', function() {
        $('.object-label').not(this).find($('.object-info')).fadeOut(200);
        $(this).find('.object-info').fadeToggle(200);
    });

    //hero-slider 1
    if ($('.hero-slider').length > 0) {
        $('.hero-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            fade: true,
            cssEase: 'linear',
            autoplay: false,
            autoplaySpeed: 4000,
            adaptiveHeight: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });
    }

    //Location Carousel
    if ($('.location-carousel').length > 0) {
        $('.location-carousel').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            cssEase: 'linear'

        });
    }

    //testimonial Carousel
    if ($('.testimonial-carousel').length > 0) {
        $('.testimonial-carousel').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'linear'

        });
    }





});