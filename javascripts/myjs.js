$(document).ready(function () {
    var checkNav = 0;
    $('.navbar-top .navbar').click(function (e) {
        e.preventDefault();
        if (checkNav == 0) {
            $('.menu-top').addClass('menu-fixed');
            checkNav = 1;
        }
        else {
            $('.menu-top').removeClass('menu-fixed');
            checkNav = 0;
        }
    });
    var checkSearch = 0;
    $('.icon-search .fa-search').click(function (e) {
        e.preventDefault();
        if (checkSearch == 0) {
            $('.icon-search input').addClass('width-search');
            $('.header-icon .fa-search').addClass('active-search');
            checkSearch = 1;
        }
        else {
            $('.icon-search input').removeClass('width-search');
            $('.header-icon .fa-search').removeClass('active-search');
            checkSearch = 0;
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
        var swiper = new Swiper('.swiper-product', {
            slidesPerView: changeW,
            slidesPerGroup: 1,
            spaceBetween: changeSpace,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.cate5-product-next',
                prevEl: '.cate5-product-prev',
            },
        });
    });
});

