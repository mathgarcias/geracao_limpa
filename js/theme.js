(function ($) {
    'use strict';
    //========================
    // Intialization
    //========================
    var tp = $(".tp-banner"),
            tp2 = $(".tp-banner2"),
            tch1 = $('#testcarohome1'),
            btt = $('#backToTop'),
            cc2 = $("#clientcar2"),
            fco = $('.filterCont'),
            apop = $('a.popUp'),
            tec2 = $("#test1car2"),
            rpoc = $('#relaportCaro'),
            tp3 = $('.tp-banner3');

//=========================
// Revolution Slider
//=========================
    if ($(".sliderSection").length > 0)
    {
        tp.revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 467,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "on",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "off",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "off",
            fullScreen: "off",
            navigationVOffset: 35

        });
    }
    if ($(".sliderSection").length > 0)
    {
        tp2.revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 467,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "on",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "off",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "off",
            fullScreen: "off",
            navigationVOffset: 35

        });
    }
    if ($(".sliderSection3").length > 0)
    {
        tp3.revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 467,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "on",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "off",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on",
            navigationVOffset: 30

        });
    }

    //=========================
    // Home1 Testmonial
    //=========================
    if (tch1.length > 0) {
        tch1.owlCarousel({
            items: 1,
            dots: true
        });
    }
    //===================================
    // Bootstrap collaps pluse minuse
    //===================================
    if ($('.collapse').length > 0) {
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).parent().find(".rt-plus3").removeClass("rt-plus3").addClass("rt-minus3");
        }).on('hidden.bs.collapse', function () {
            $(this).parent().find(".rt-minus3").removeClass("rt-minus3").addClass("rt-plus3");
        });
    }
    $('.panelHeading, .panelHeading2, .panelHeadingSer').on('click', function () {
        $('.panelHeading, .panelHeading2, .panelHeadingSer').removeClass('active');
        $(this).addClass('active');
    });


    //========================
    // Back To Top
    //========================
    if (btt.length) {
        var scrollTrigger = 140, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        btt.addClass('showit');
                    } else {
                        btt.removeClass('showit');
                    }
                };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        btt.on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }


    //=========================
    // Testmonial Carousel Home2
    //=========================
    if ($("#test1car").length > 0) {
        $("#test1car").owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    }
    //=========================
    //Client Carowsel2 Home2
    //=========================
    if (cc2.length > 0) {
        cc2.owlCarousel({
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }

        });
    }
    //=========================
    // Mixer
    //=========================
    if (fco.length > 0) {
        fco.themeWar();
    }
    //=======================================================
    // magnificPopup
    //=======================================================
    if (apop.length > 0) {
        apop.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    //=======================================================
    // Video Section
    //=======================================================
    var vid1 = document.getElementById("myVideo1");
    function playPause1() {
        if (vid1.paused) {
            vid1.play();
        } else {
            vid1.pause();
        }
    }
    if ($("#videoWrap1").length > 0)
    {
        $('#playVideos').on('click', function (e) {
            e.preventDefault();
            playPause1();
            if ($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                vid1.pause();
            } else
            {
                $(this).addClass('active');
                vid1.play();
            }
        });
    }
    ;


    //=======================================================
    // Google map
    //=======================================================
    if ($('#map').length > 0) {
        var map;
        map = new GMaps({
            el: '#map',
            lat: 53.967015,
            lng: -1.079608,
            scrollwheel: false,
            zoom: 16,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = '';
        map.addMarker({
            lat: 53.967015,
            lng: -1.079608,
            icon: 'images/marker.png',
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf'
        });



        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#fefefe"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#d3d3d3"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#e5e5e5"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2d2d2d"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#a3a3a3"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#2d2d2d"}
                ]
            }

        ];



        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

    //=======================================================
    // Payment Accourdion
    //=======================================================
    if ($(".wc_payment_methods").length > 0)
    {
        $(".wc_payment_methods li").each(function () {
            $('input[type="radio"]', this).on('click', function (e) {
                var ids = $(this).attr('id');
                if ($('div.' + ids).hasClass('visibales'))
                {

                } else
                {
                    $(".payment_box").removeClass('visibales');
                    $(".payment_box").slideUp('fast');
                    $('div.' + ids).slideDown('fast').addClass('visibales');
                }
            });
        });
    }
    //=======================================================
    // Cart Button
    //=======================================================
    if ($(".qtyBtn").length > 0)
    {
        $(".btnMinus").on('click', function () {
            var vals = parseInt($(this).next(".carqty").val(), 10);

            if (vals > 0)
            {
                vals -= 1;
                $(this).next(".carqty").val(vals);
            } else
            {
                $(this).next(".carqty").val(vals);
            }
            return false;
        });
        $(".btnPlus").on('click', function () {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals);
            return false;
        });
    }

    if ($("#slider-range").length > 0) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [10, 250],
            slide: function (event, ui) {
                $("#amount").html("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
        });
        $("#amount").html("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

    }


    //=========================
    // Related Portfolio Carousel
    //=========================
    if (tec2.length > 0) {
        tec2.owlCarousel({
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
        var owl = tec2.data('owlCarousel');
        $('.teamCaronav a.prev').on('click', function (e) {
            e.preventDefault();
            owl.prev();
        });
        $('.teamCaronav a.next').on('click', function (e) {
            e.preventDefault();
            owl.next();
        });
    }

    //========================================================
    // Fun Fact
    //========================================================
    var skl = true;
    $('.funfactbg, .funfactWrap').appear();
    $('.funfactbg, .funfactWrap').on('appear', function () {
        if (skl)
        {
            $('.count').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 6000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span>' + '$1' + '</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });

    //========================
    // COuntry Flug 
    //========================
    if ($('.language a').length > 0) {
        $('.language a').on('click', function () {
            $(this).toggleClass('active');
            $('.language > ul').slideToggle('slow');
        });
    }
    if ($('.language2 a').length > 0) {
        $('.language2 a').on('click', function () {
            $(this).toggleClass('active');
            $('.language2 > ul').slideToggle('slow');
        });
    }

    //========================
    // Mobile Menu
    //========================
    if ($('.mobileMenu').length > 0) {
        $('.mobileMenu').on('click', function () {
            $(this).toggleClass('active');
            $('.mainNav > ul').slideToggle('slow');
        });
        if ($(window).width() < 1000)
        {
            $(".mainNav li.has-menu-items > a, .mainNav li.has-menu-items  > a").on('click', function () {
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }

    }
    if ($('.mobileMenu2').length > 0) {
        $('.mobileMenu2').on('click', function () {
            $(this).toggleClass('active');
            $('.mainNav2 > .mainNav2in').slideToggle('slow');
        });
        if ($(window).width() < 1000)
        {
            $(".mainNav2in ul li.has-menu-items > a").on('click', function () {
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }
    }
    if ($('.mobileMenu3').length > 0) {
        $('.mobileMenu3').on('click', function () {
            $(this).toggleClass('active');
            $('.mainNav3 > ul').slideToggle('slow');
        });
        if ($(window).width() < 1000)
        {
            $(".mainNav3 ul li.has-menu-items > a").on('click', function () {
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }
    }


    //===================================
    // Fixed Header
    //===================================
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $(".header1, .header2, .header3").addClass('fixedHeader');
        } else
        {
            $(".header1, .header2, .header3").removeClass('fixedHeader');
        }
    });

    //========================
    // Loader 
    //========================
    if ($('.preloader').length > 0) {
        $(window).load(function () {
            if ($('.preloader').length > 0) {
                $('.preloader').delay(800).fadeOut('slow');
            }
        });
    }
    //========================
    // services Booking
    //========================
    if ($("#servicesForm").length > 0)
    {
        $("#servicesForm").on('submit', function (e) {
            e.preventDefault();
            $("#ser_submit").html('Processsing...');
            var ser_name = $("#ser_name").val();
            var ser_email = $("#ser_email").val();
            var ser_phone = $("#ser_phone").val();
            var ser_post = $("#ser_post").val();
            var ser_adds = $("#ser_adds").val();
            var ser_city = $("#ser_city").val();
            var ser_comment = $("#ser_comment").val();
            var ser_option = $("#ser_option").val();


            var required = 0;
            $(".required", this).each(function () {
                if ($(this).val() === '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'php/services_boking.php',
                    data: {
                        ser_name: ser_name,
                        ser_email: ser_email,
                        ser_phone: ser_phone,
                        ser_post: ser_post,
                        ser_adds: ser_adds,
                        ser_city: ser_city,
                        ser_comment: ser_comment,
                        ser_option: ser_option
                    },
                    success: function (data)
                    {
                        $("#ser_submit").html('Done!');
                        $("#servicesForm input, #servicesForm textarea, #servicesForm select").val('');
                    }
                });
            }
            else
            {
                $("#ser_submit").html('Failed!');
            }

        });

        $(".required").on('keyup', function () {
            $(this).removeClass('reqError');
        });
    }
    //========================
    // Contact
    //========================
    
    //========================
    // Wow Js
    //========================
    new WOW().init();

//=========================
    // Related Portfolio Carousel
    //=========================
    if (rpoc.length > 0) {
        rpoc.owlCarousel({
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 4
                }
            }
        });
        var owl = $("#relaportCaro").data('owlCarousel');
        $('a.prevProduct').on('click', function (e) {
            e.preventDefault();
            owl.prev();
        });
        $('a.nextProduct').on('click', function (e) {
            e.preventDefault();
            owl.next();
        });
    }
    ;



})(jQuery);
