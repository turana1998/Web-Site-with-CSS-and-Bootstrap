$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
$(document).ready(function () {
    $(".submenu").click(function () {

        let x = jQuery(this).find(".choose-submenu2");
        if (jQuery(this).find(".choose-submenu2").hasClass("d-none")) {
            jQuery(this).find(".choose-submenu2").removeClass("d-none")

        } else {

            jQuery(this).find(".choose-submenu2").addClass("d-none");
        }
    });
    $(".trash_").click(function () {

        let x = jQuery(this).find(".trash-menu");
        if (jQuery(this).find(".trash-menu").hasClass("d-none")) {
            jQuery(this).find(".trash-menu").removeClass("d-none")

        } else {

            jQuery(this).find(".trash-menu").addClass("d-none");
        }
    });

    var say = 1;
    $(".count").attr('value', say);
    $(".inc").click(function () {

        $(".input input").attr('value', ++say);
        if ($(".input input").val() > 0) {
            $(".dec").attr("disabled", false);
        }
    });
    $(".dec").click(function () {
        $(".input input").attr('value', --say);
        if ($(".input input").val() <= 0) {
            $(".dec").attr("disabled", true);
        }

    });
    $(function () {
        $(".color-item").click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active")

            }
            else {
                $(this).addClass("active");
            }
        });
    });
    $(function () {
        $(".size-item").click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active")

            }
            else {
                $(this).addClass("active");
            }

        });
    });
    $("#section3 .regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        prevArrow: '<button class="prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="next"><i class="bi bi-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    infinite: true,
                    dots: true
                }

            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }

            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }

            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $("#section1 .regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img width=20 src="./image/prev.png"></button>',
        nextArrow: '<button class="next"><img width=20 src="./image/next.png"></button>'
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "",
        nextArrow: "",
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.slider-for',
        centerMode: true,
        prevArrow: '<button class="prev"><i class="bi bi-arrow-left"></i></button>',
        nextArrow: '<button class="next"><i class="bi bi-arrow-right"></i></button>',
        focusOnSelect: true
    });
    $(".choose").click(function () {
        console.log("aa")
        let x =  $(this).next(".choose-submenu").toggle();;
        console.log(x)
        if (x.hasClass("d-none")) {
            x.removeClass("d-none")

        } else {

            x.addClass("d-none");
        }
    });

   
});