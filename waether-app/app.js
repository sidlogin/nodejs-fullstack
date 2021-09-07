const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f36e752d01de2f343e899f4e610d4d7c&query=Irving&units=f';

request({ url: url, json: true }, (error, response) => {
     if (error) {
          console.log('Unable to connect weather service');
     } else if (response.body.error) {
          console.log('Unable to find location');
     } else {
          console.log(`it is currently ${response.body.current.temperature} degree out, It feels like ${response.body.current.feelslike} degree out.`);
     }
});

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/irving.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1Ijoic2lkbG9naW4iLCJhIjoiY2t0OWVidWVtMWI5eTJvcDQwdjBhbGNwciJ9.0BlIi6qMWfk6kc5ogJsMnQ';

request({ url: geoCodeURL, json: true }, (error, response) => {
     if (error) {
          console.log('Unable to connect geo service');
     } else if (response.body.message) {
          console.log('Unable to match address');
     } else {
          console.log(`Latitude is ${response.body.features[1].geometry.coordinates[0]}  and Longitude is ${response.body.features[0].geometry.coordinates[0]} .`);
     }
});