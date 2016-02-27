window.addEventListener('load', function() {

	window.addEventListener('keyup', function(e) {
		if($('#city-input').focus()) {
			$.ajax({
				url: 'https://students.cs.byu.edu/~clement/CS360/ajax/getcity.cgi?q=' + $('#city-input').val(),
				dataType: 'json',
				success: function(data) {
					$('#suggestions').html('');
					for(var i = 0; i < data.length; i++) {
						var name = data[i].city;
						$('#suggestions').append('<li>' + name +'</li>');
					}
				},
				error: function() {
					$('#suggestions').html('');
				}
			});
		}
	});

	$('#submit-button').click(function(e) {
		e.preventDefault();
		$('#city-text-area').text($('#city-input').val());
		console.log('https://api.wunderground.com/api/5079f621cbe4f46e/geolookup/conditions/q/UT/' + $('#city-input').val() + '.json');
		$.ajax({
			url: 'https://api.wunderground.com/api/5079f621cbe4f46e/geolookup/conditions/q/UT/' + $('#city-input').val() + '.json',
			dataType: 'jsonp',
			success: function(data) {
				var obs = data.current_observation;
				var location = obs.observation_location.full;
				var weather = obs.weather;
				var temperature = obs.temperature_string;
				var feelsLike = obs.feelslike_string;
				$('#location').text(location);
				$('#weather').text(weather);
				$('#temperature').text(temperature);
				$('#feels-like').text(feelsLike);
			},
		});
	});
});
