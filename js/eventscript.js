$(document).ready(function(){

	$.getJSON('json/events.json', function( data ) {
		$.each(data.events.event, function(i, item) {
			var $month = $('<span>', {class: "event-date-month", text: item.date.month.substring(0,3)}),
				$day = $('<span>', {class: "event-date-day", text: item.date.day}),
				$imgwrp = $('<div>', {class: "img-wrapper"}),
				$img = $('<img>', {src: item.img, class: "event-image"}),
				$date = $('<div>', {class: "event-date"}).append($month, "</br>", $day);
				$summary = $('<div>', {class: "event-summary"}),
				$title = $('<h2>', {class: "event-title", text: item.title}),
				$ticket = $('<a>', {class: "event-ticket", text: "Tickets", href: item.ticket.url}),
				$show = $('<div>', {id: item.id, class: "event-show"});
				$summary.append($title, $ticket);
				$imgwrp.append($img, $date);
				$show.append($imgwrp, $summary);
				$('.events-container').append($show);
		});

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
});