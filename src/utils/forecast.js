const request = require('request');


forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=af4df0f73b675bc7ab16422a5ecdd04f&query=' + latitude + ',' + longitude +'&units=f';

    request({
        url,
        json: true
    }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (body.error) {
            callback('Unable to find location!');
        } else {
            const weatherDescription = body.current.weather_descriptions[0];
            const currentTemperature = body.current.temperature;
            const feelsLike = body.current.feelslike;
            callback(undefined, weatherDescription + '. It is currently ' + currentTemperature + '. It feels like ' + feelsLike + '.');
        }
    })
}

module.exports = forecast;