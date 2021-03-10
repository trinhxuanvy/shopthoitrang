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
    $('.header-icon .icon-user-click').click(function (e) {
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
        $('html, body').animate({ scrollTop: 0 }, 'slow');
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

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    var data = [
        {
            id: '1',
            image: '25_510x600.jpg',
            name: 'áo sơ mi 1',
            price: '250,000 VNĐ',
            sale: '',
            link: 'test'
        },
        {
            id: '2',
            image: '25_510x600.jpg',
            name: 'áo sơ mi 2',
            price: '200,000 VNĐ',
            sale: '300,000 VNĐ',
            link: 'test'
        },
        {
            id: '3',
            image: '27_510x600.jpg',
            name: 'áo sơ mi 3',
            price: '250,000 VNĐ',
            sale: '',
            link: 'test'
        },
        {
            id: '4',
            image: '22_510x600.jpg',
            name: 'áo sơ mi 4',
            price: '250,000 VNĐ',
            sale: '',
            link: 'test'
        },
        {
            id: '5',
            image: '20_510x600.jpg',
            name: 'áo sơ mi 5',
            price: '250,000 VNĐ',
            sale: '',
            link: 'test'
        },
    ]
    var numItems = data.length;
    var perPage = 2;            

    $(function () {
        (function (name) {
            var container = $('#pagination-' + name);
            var sources = function () {
                var result = [];

                for (var i = 0; i < numItems; i++) {
                    result.push(data[i]);
                }
                return result;
            }();

            var options = {
                dataSource: sources,
                pageSize: 8,
                callback: function (sources, pagination) {
                    window.console;

                    var dataHtml = '';

                    $.each(sources, function (index, item) {
                        dataHtml += `<div class="item wow fadeInUp">
                        <div class="product-image">
                            <a href=""><img src="images/${item.image}" alt=""></a>
                        </div>
                        <p class="product-name">${item.name}</p>
                        <p class="product-price">${item.price} <span class="product-price-sale"><del>${item.sale}</del></span></p>
                        <div class="product-detail">
                            <a href=""><i class="fa fa-eye" aria-hidden="true"></i></a>
                            <a href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
                        </div>
                        </div>`;
                    });

                    container.prev().html(dataHtml);
                }
            };
            

            //$.pagination(container, options);

            container.addHook('beforeInit', function () {
                window.console;
            });
            container.pagination(options);

            container.addHook('beforePageOnClick', function () {
                window.console;
                //return false
            });
        })('product');


    })

    
    $(function(){
        var filterCheck = 0;
        $('.all-product .header-item').click(function (e) { 
            e.preventDefault();
            var hClass = $('.box-filter').hasClass('box-filter-active');
            if(hClass){
                $('.box-filter').removeClass('box-filter-active');
                $(window).lockscroll(false);
            }
            else{
                $('.box-filter').addClass('box-filter-active');
                $(window).lockscroll(true);
            }
        });
        $('.all-product .btn-cancel').click(function (e) { 
            e.preventDefault();
            var hClass = $('.box-filter').hasClass('box-filter-active');
            if(hClass){
                $('.box-filter').removeClass('box-filter-active');
                $(window).lockscroll(false);
            }
        });
    })

    $(function(){
        $('.header-nav .fa-search-active').click(function (e) { 
            e.preventDefault();
            var hClass = $('.header-nav .box-search-menu').hasClass('box-search-menu-active');
            if(!hClass){
                $('.header-nav .box-search-menu').addClass('box-search-menu-active');
            }
            else{
                $('.header-nav .box-search-menu').removeClass('box-search-menu-active');
            }
        });
    })

    $(function(){
        $('.header-nav .fa-user').click(function (e) { 
            e.preventDefault();
            var hClass = $('.header-nav .box-user-login').hasClass('box-user-login-active');
            if(!hClass){
                $('.header-nav .box-user-login').addClass('box-user-login-active');
            }
            else{
                $('.header-nav .box-user-login').removeClass('box-user-login-active');
            }
        });
    })

    // change image
    

    // hover zoom image
    const img = document.querySelector('.xzoom');
    const imgZoom = document.querySelector('.xzoom-lagre');

    const imgChange = document.querySelectorAll('.image-no-official .item img');
    imgChange.forEach(item => {
        $(item).click(function (e) { 
            e.preventDefault();
            $(img).attr('src', `${item.src}`);
            $(imgZoom).css('background-image', "url('" + `${item.src}` + "')");
        });
    });

    img.addEventListener('mousemove', function(e){
        let width = img.offsetWidth;
        let height = img.offsetHeight;
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        
        let bgPosX = (mouseX / width * 100);
        let bgPosY = (mouseY / height * 100);

        imgZoom.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    })
});
new WOW().init();
