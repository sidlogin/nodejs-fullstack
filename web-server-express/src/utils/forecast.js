const request = require('request');

const forecast = (latitude, longitude, callback) => {
     const url = 'http://api.weatherstack.com/current?access_key=f36e752d01de2f343e899f4e610d4d7c&query=' + latitude + ',' + longitude + '&units=f';
     
     request({ url: url, json: true }, (error, { body }) => {
          if (error) {
               callback('Unable to connect weather forecast service', undefined);
          } else if (body.error) {
               callback('Unable to find location. Try again.', undefined);
          } else {
               console.log('body', body);
               const forecastMessage = `It is currently ${body.current.temperature}\u00B0 temperature outside but it feels like ${body.current.feelslike}\u00B0 out. The chances of rain is ${body.current.precip}%.`;
               callback(undefined, forecastMessage);
          }
     });
};

module.exports = forecast;