import svg4everybody from 'svg4everybody';
//import $ from 'jquery';

$(() => {
	svg4everybody();
});

$(document).ready(function(){
/*   let btn= $('.drop-btn'),
        list = $('.drop-menu');
        btn.on('click',function(){
            list.slideToggle('slow');
        });*/

    //карусель
    var slider =$(".slider-carousel__list");

    slider.owlCarousel({
        items: 1,
        pagination : false,
        singleItem:true
    });

    $(".next").click(function(){
        slider.trigger('owl.next');
    });
    $(".prev").click(function(){
        slider.trigger('owl.prev');
    });
});