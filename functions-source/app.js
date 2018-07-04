
exports.handler = function(event, context, callback) {
    
	const request = require('request');
	var sha1 = require('sha1');

	request('https://api.darksky.net/forecast/b2609cc19093c1afb68f0d7124993c7d/41.2524,-95.9980', function (err, res, body) {
	  if (!err && res.statusCode == 200) {
		
		var weather = JSON.parse(body);
		var currentWeather = weather.currently;

		var iconText = currentWeather.icon.toLowerCase();
		var snow = '';
		
		if (iconText === 'snow') {
			snow = true;
			console.log('snow');
		} else {
			snow = false;
			console.log('fart');
		}
		
		callback(null, {
	        statusCode: 200,
	        body: JSON.stringify({
          		snowing: snow
       		})
	    })

	  }
	});
}