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
			});
		}
	});

});
