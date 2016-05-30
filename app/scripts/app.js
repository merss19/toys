import svg4everybody from 'svg4everybody';
//import $ from 'jquery';

$(() => {
	svg4everybody();
});

$(document).ready(function(){

    //menu
    $('.top').on('click','.top-dropdown',function(){
        var $this = $(this);
            $this.siblings().removeClass('active');
        $this.addClass('active');
        console.log($this);

    });

    //карусель
    var slider =$(".slider-carousel__list");

    slider.owlCarousel({
        items: 1,
        pagination : true,
        singleItem:true
    });

    //catalog
    $('.catalog__btn').on('click',function(){

        var $this = $(this),
            list = $this.siblings('.catalog__list');
        list.addClass('catalog-open');
        $(document).on('click',function(e){
            if ($(e.target).closest(".catalog").length) return;
            list.removeClass('catalog-open');


        });

    });
    //tabs
    $('.index-tabs__list').on('click','.index-tabs__item',function(){
        var $this = $(this),
            parent = $this.closest('#tabs'),
            id = $this .attr('data-id'),
            content = parent.find('#'+id),
            contentsAll = parent.find('.index-tabs__content');

            contentsAll.removeClass('hide');
            content.removeClass('hide')
                    .addClass('show')
                    .siblings()
                    .removeClass('show')
                    .addClass('hide');
    });


});