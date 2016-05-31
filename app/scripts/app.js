import svg4everybody from 'svg4everybody';
//import $ from 'jquery';

$(() => {
	svg4everybody();
});

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


    //удаление товаров в коризне

    $('.cart').on('click','.select-product__close',function() {
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

        var $this = $(this),
            list = $this.siblings('.catalog__list');
        if(!list.hasClass('active')){
            list.addClass('active');
        }else{
            list.removeClass('active');
        }

        $(document).on('click',function(e){
            if ($(e.target).closest(".catalog").length) return;
            list.removeClass('active');


        });

    });

    //tabs
    $('.index-tabs__list').on('click','.index-tabs__item',function(){
        var $this = $(this),
            parent = $this.closest('#tabs'),
            id = $this .attr('data-id'),
            content = parent.find('#'+id),
            contentsAll = parent.find('.index-tabs__content'),
            arrow = $this.offset().left + 127;

            $this.addClass('active')
                    .siblings()
                    .removeClass('active');

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
        })
    });
});
