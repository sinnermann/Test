$(function(){
    $('.slider').slick({
    	slidesToShow: 3,
    	slidesToScroll: 3,
    	arrows: false,
    	dots: true,
    	responsive: [
    	{
    	   breakpoint: 1175,
    	   settings: {
    	   	slidesToShow: 2,
    	    slidesToScroll: 2,
    	   }
    	}
    	

    	]
    });

//making hamburger menu to work ...
    $('.menu__btn').on('click', function(){
    	$('.menu__list').toggleClass('menu__list--active')
    });

});