$(document).ready(function () {
    var checkNav = 0;
    $('.navbar-top .navbar').click(function (e) { 
        e.preventDefault();
        if(checkNav == 0){
            $('.menu-top').addClass('menu-fixed');
            checkNav = 1;
        }
        else{
            $('.menu-top').removeClass('menu-fixed');
            checkNav = 0;
        }
    });
    var checkSearch = 0;
    $('.icon-search .fa-search').click(function (e) { 
        e.preventDefault();
        if(checkSearch == 0){
            $('.icon-search input').addClass('width-search');
            $('.header-icon .fa-search').addClass('active-search');
            checkSearch = 1;
        }
        else{
            $('.icon-search input').removeClass('width-search');
            $('.header-icon .fa-search').removeClass('active-search');
            checkSearch = 0;
        }
    });
    var swiperH = new Swiper('.swiper-container', {
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $('.btn-top').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 200);
    });
    
    $(window).scroll(function () { 
        var posHeader = $('.header-nav').position();
        var topHeader = posHeader.top;
        if($(this).scrollTop() > topHeader){
            $('.header-nav').addClass('header-fixed');
        }
        else{
            $('.header-nav').removeClass('header-fixed');
        }
    });

    var prodDetailLink = document.querySelectorAll('.categories-3 .detail-link');
    for(let i = 0; i < prodDetailLink.length; i++){
        $(prodDetailLink[i]).click(function (e) {
            e.preventDefault();
            for(let j = 0; j < prodDetailLink.length; j++){
                if(i != j){
                    $(prodDetailLink[j]).removeClass('active');
                }
            }
            $(this).addClass('active');
        });
    }
    var swiper = new Swiper('.swiper-product', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});

