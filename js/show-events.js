var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

$(document).ready(function(){

	$.getJSON('json/events.json', function( data ) {
		$.each(data.events.upcoming_events, function(i, item) {
			var $month = item.date.month,
				$day = item.date.day,
				$year = item.date.year;
			var $time = "" + $month + " " + $day + ", " + $year,
				d = new Date($time);
				$time = "" + weekday[d.getDay()].substring(0,3) + ", " + $time; 

				$img = $('<img>', {src: item.img, class: 'event-image'}),
				$imgwrp = $('<div>', {class: 'event-image col-xs-12 col-sm-4'}).append($img),

				$title = $('<h2>', {class: 'event-title', text: item.title}),
				$date = $('<p>', {class: 'event-date', text: $time});
				$venue = $('<p>', {class: 'event-venue', text: item.venue}),
				$ticket = $('<a>', {class: 'event-ticket', text: 'Tickets', href: item.ticket.url, target:'_blank'}),

				$summary = $('<div>', {class: 'event-summary col-xs-12 col-sm-8'}),
				$row = $('<div>', {class: 'upcoming-events row', id: item.id}),

				$summary.append($title, $date, $venue, $ticket);

				$row.append($imgwrp, $summary);
				$('.upcoming').append($row);
		});

		$.each(data.events.past_events, function(i, item) {
			var $month = item.date.month,
				$day = item.date.day,
				$year = item.date.year;
			var $time = "" + $month + " " + $day + ", " + $year,
				d = new Date($time);
				$time = "" + weekday[d.getDay()].substring(0,3) + ", " + $time; 

				$img = $('<img>', {src: item.img, class: 'event-image'}),
				$imgwrp = $('<div>', {class: 'event-image col-xs-12 col-sm-4'}).append($img),

				$title = $('<h2>', {class: 'event-title', text: item.title}),
				$date = $('<p>', {class: 'event-date', text: $time});
				$venue = $('<p>', {class: 'event-venue', text: item.venue}),
				$ticket = $('<a>', {class: 'event-ticket', text: 'Tickets', href: item.ticket.url, target:'_blank'}),

				$summary = $('<div>', {class: 'event-summary col-xs-12 col-sm-8'}),
				$row = $('<div>', {class: 'upcoming-events row', id: item.id}),

				$summary.append($title, $date, $venue, $ticket);

				$row.append($imgwrp, $summary);
				$('.past').append($row);
		});
	});
});