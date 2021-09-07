const request = require('request');

const forecast = (latitude, longitude, callback) => {
     const url = 'http://api.weatherstack.com/current?access_key=f36e752d01de2f343e899f4e610d4d7c&query=' + latitude + ',' + longitude + '&units=f';
     
     request({ url: url, json: true }, (error, { body }) => {
          if (error) {
               callback('Unable to connect weather forecast service', undefined);
          } else if (body.error) {
               callback('Unable to find location. Try again.', undefined);
          } else {
               callback(undefined, {
                    temperature: body.current.temperature,
                    feelsLike: body.current.feelslike,
                    precip: body.current.precip
               });
          }
     });
};

module.exports = forecast;