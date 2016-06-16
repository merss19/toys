/*
import svg4everybody from 'svg4everybody';
//import $ from 'jquery';

$(() => {
	svg4everybody();
});
*/

$(document).ready(function(){

    //дропдаун меню, поиск и корзина
    $('.top-dropdown').on('click',function(e){
        var $this = $(this),
            target = $(e.target),
            close = $this.find('.menu-drop__close');
            $this.siblings().removeClass('active');

        if(!target.hasClass('menu-drop__close')){
            $this.addClass('active');
        }
        close.on('click',function() {
                $this.removeClass('active');
        });
    });


    //корзина
    // удаление товаров в коризне

    $('.menu-drop__cart').on('click','.select-product__close',function() {
        var $this = $(this),
            list = $this.closest('.list-products'),
            items = list.find('.list-products__item'),
            item = $this.closest('.list-products__item');

            item.remove();

            if(items.length==1){
                $('.cart').addClass('hide');
                $('.cart-empty').addClass('show')
                                .removeClass('hide');
            }

        })
        .on('click','.cart__btn',function() {
            $('.cart__products').addClass('hide');
            $('.cart-two').addClass('show')
                          .removeClass('hide');
            $('.timeline__step-two,.timeline__step-two .timeline__value').addClass('active')
        })
        .on('click','.cart-two__btn .btn-main',function() {
            console.log(123);
            $('.cart-two').addClass('hide')
                          .removeClass('show');
            $('.cart-three').addClass('show')
                            .removeClass('hide');
            $('.timeline__step-three,.timeline__step-three .timeline__value').addClass('active')
            $('.menu-drop__print').addClass('show')
                                  .removeClass('hide');
        });


        // полет в корзину
    $(".btn-fly").click(function(){
        var cart = $('.top__cart'),
            parent = $(this).closest('.fly-root'),
            img = parent.find('.fly-img');
        if(img){
            var imgclone = img.clone()
                .offset({
                    top: img.offset().top,
                    left: img.offset().left
                })
                .css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '1000'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 30,
                    'left': cart.offset().left + 44,
                    'width': 75,
                    'height': 75
                }, 1500)
                .animate({
                    'width': 0,
                    'height': 0
                }, function () {
                    $(this).detach()
                });

        }

    });




    //карусель
    var slider =$(".slider-carousel__list");

    slider.owlCarousel({
        items: 1,
        pagination : true,
        singleItem:true
    });

    //каталог, боковое меню
    $('.catalog__btn').on('click',function(){
        console.log(123);
        var $this = $(this),
            list = $this.siblings('.catalog__list'),
            parent = $this.closest('.catalog');
        if(!parent.hasClass('active')){
            parent.addClass('active');
        }else{
            parent.removeClass('active');
        }

        $(document).on('click',function(e){
            if ($(e.target).closest(".catalog").length) return;
            parent.removeClass('active');

        });

        function catalogScroll(){
            var windowHeight = $(window).height(),
                topHeader = 108,
                dif = windowHeight-topHeader-catalogHeight,
                catalogHeightNew = windowHeight-topHeader;

            if(dif < 0){
                $('.catalog__list').outerHeight(catalogHeightNew);
            }else{
                $('.catalog__list').outerHeight(catalogHeight);
            }

        }

        var catalogHeight = $('.catalog__list').outerHeight();
        catalogScroll();

        $(window).resize(function() {
            catalogScroll();
        });

        document.querySelector('.catalog__list').onmouseover = function(event) {

            $('.catalog__list').css('width','600');
        };

        document.querySelector('.catalog__list').onmouseout = function(event) {

            $('.catalog__list').css('width','auto');
        };
    });

    //tabs
    $('.index-tabs__list').on('click','.index-tabs__item-wrapper',function(e){
        console.log(e.target);
        if($(e.target).hasClass('btn-fly')) return;
        var $this = $(this),
            wrapper = $(this).find('.index-tabs__item-wrapper'),
            item = $this.closest('.index-tabs__item'),
            half = $this.closest('.index-tabs__item-half'),
            parent = $this.closest('#tabs'),
            id = $this .attr('data-id'),
            content = parent.find('#'+id),
            contentsAll = parent.find('.index-tabs__content'),
            arrow = $this.offset().left + 127;

            $this.addClass('active');
            item.siblings().find('.index-tabs__item-wrapper')
                           .removeClass('active');

            if(half){
                half.siblings().find('.index-tabs__item-wrapper')
                               .removeClass('active');
            }

            contentsAll.removeClass('hide');

            content.removeClass('hide')
                    .addClass('show')
                    .siblings('.index-tabs__content-item')
                    .removeClass('show')
                    .addClass('hide');

                $('.index-tabs__content-arrow').css({
                    'left':  arrow
                });

        $('.index-tabs__content-close').on('click',function(){
            var parent = $(this).closest('.index-tabs__content');
                parent.addClass('hide');

            $this.removeClass('active');
        });
                // галерея


        $('.index-tabs__content').on('click','.product__img',function(){
           var gallery = $('.gallery-modal'),
                img = $(this).find('img'),
                src = img.attr('src');

            gallery.find('img').attr('src',src);
               gallery.removeClass('hide').addClass('show');
            console.log(gallery.find('img').attr('src'));

            $(gallery).on('click',function(e) {
                var target = $(e.target);
            if (target.hasClass('gallery-modal__wrapper') || target.hasClass('gallery-modal__img')){
                return;
            }
            gallery.removeClass('show').addClass('hide');

            });

        });



    });

    $('.index-tabs__picture').on('click',function(e){
        e.preventDefault();
    });

    //блок инфо
    $('.content-info__offer-link').on('click',function(){
        var $this = $(this);
        console.log($this);
            $this.closest('.content-info__wrapper').addClass('active-off');
    });
    $(".catalog__list").mCustomScrollbar({

    });

});





