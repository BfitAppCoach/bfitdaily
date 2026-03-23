$(document).ready(function(){
	$('.slider-for').slick({
	   slidesToShow: 1,
	   arrows: false,
	   fade: true,
	   asNavFor: '.slider-nav'
	 });
	 $('.slider-nav').slick({
	   slidesToShow: 4,
	   slidesToScroll: 1,
	   asNavFor: '.slider-for',
	   dots: false,
	   focusOnSelect: true,
	   responsive: [
		{
		  breakpoint: 1279,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 1023,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	 });
});