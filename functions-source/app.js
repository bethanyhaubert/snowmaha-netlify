
exports.handler = function(event, context, callback) {
    
	const request = require('request');
	var sha1 = require('sha1');
	var key = process.env.DARK_SKY;

	request('https://api.darksky.net/forecast/' + key + '/41.2524,-95.9980', function (err, res, body) {
	  if (!err && res.statusCode == 200) {
		
		var weather = JSON.parse(body);
		var currentWeather = weather.currently;

		var iconText = currentWeather.icon.toLowerCase();
		var snow = false;
		
		if (iconText === 'snow') {
			snow = true;
		};
		
		callback(null, {
	        statusCode: 200,
	        body: JSON.stringify({
          		snowing: snow
       		})
	    })

	  }
	});
}