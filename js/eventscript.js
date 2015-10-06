$(document).ready(function(){


	$('.events-container').slick({
		infinite: false,
  		focusOnSelect: false,
  		arrows: false,
  		slidesToShow: 4,
		slidesToScroll: 4,
  		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  ],
	});
	$('.arrow-left').click(function(e){
		$('.events-container').slick('slickPrev');
	});
	$('.arrow-right').click(function(e){
		$('.events-container').slick('slickNext');
	});
});