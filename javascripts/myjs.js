$(document).ready(function () {
    var checkNav = 0;
    $('.navbar-top .navbar').click(function (e) {
        e.preventDefault();
        if (checkNav == 0) {
            $('.menu-top').addClass('menu-fixed');
            $(this).addClass('active-bar');
            checkNav = 1;
        }
        else {
            $('.menu-top').removeClass('menu-fixed');
            $(this).removeClass('active-bar');
            checkNav = 0;
        }
    });
    var checkSearchNoOf = 0;
    $('.header-icon .btn-search-no-official').click(function (e) {
        e.preventDefault();
        if (checkSearchNoOf == 0) {
            $('.header-icon .form-search').addClass('animate_bounceSearch');
            $(this).addClass('active-search');
            checkSearchNoOf = 1;
        }
        else {
            $('.header-icon .form-search').removeClass('animate_bounceSearch');
            $(this).removeClass('active-search');
            checkSearchNoOf = 0;
        }
    });
    var checkUser = 0;
    $('.header-icon .icon-user').click(function (e) { 
        e.preventDefault();
        if (checkUser == 0) {
            $('.header-icon .menu-drop').addClass('active-menu-drop');
            checkUser = 1;
        }
        else {
            $('.header-icon .menu-drop').removeClass('active-menu-drop');
            checkUser = 0;
        }
    });
    var swiper = new Swiper('.swiper-banner', {
        pagination: {
            el: '.slide-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.slide-next',
            prevEl: '.slide-prev',
        },
    });
    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 200);
    });

    $(window).scroll(function () {
        var posHeader = $('.header-nav').position();
        var topHeader = posHeader.top;
        if ($(this).scrollTop() > topHeader) {
            $('.header-nav').addClass('header-fixed');
        }
        else {
            $('.header-nav').removeClass('header-fixed');
        }
    });

    var prodDetailLink = document.querySelectorAll('.categories-3 .detail-link');
    for (let i = 0; i < prodDetailLink.length; i++) {
        $(prodDetailLink[i]).click(function (e) {
            e.preventDefault();
            for (let j = 0; j < prodDetailLink.length; j++) {
                if (i != j) {
                    $(prodDetailLink[j]).removeClass('active');
                }
            }
            $(this).addClass('active');
        });
    }

    $(window).on('load resize scroll', function () {
        var reSizeW = $(this).width();
        var changeW = 0, changeSpace = 0;
        if (reSizeW <= 768) {
            changeW = 2;
            changeSpace = 10;
        }
        else if (reSizeW > 768 && reSizeW <= 992) {
            changeW = 4;
            changeSpace = 20;
        }
        else{
            changeW = 4;
            changeSpace = 30;
        }
        var swiper = new Swiper('.swiper-product-5', {
            slidesPerView: changeW,
            slidesPerGroup: 1,
            spaceBetween: changeSpace,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.cate5-product-next',
                prevEl: '.cate5-product-prev',
            },
        });
        var swiper = new Swiper('.swiper-product-6', {
            slidesPerView: changeW,
            slidesPerGroup: 1,
            spaceBetween: changeSpace,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.cate6-product-next',
                prevEl: '.cate6-product-prev',
            },
        });
        var swiper = new Swiper('.swiper-product-7', {
            slidesPerView: changeW,
            slidesPerGroup: 1,
            spaceBetween: changeSpace,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.cate7-product-next',
                prevEl: '.cate7-product-prev',
            },
        });
    });
});
new WOW().init();
