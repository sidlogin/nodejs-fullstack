const request = require('request');

const geocode = (location, callback) => {
     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1Ijoic2lkbG9naW4iLCJhIjoiY2t0OWVidWVtMWI5eTJvcDQwdjBhbGNwciJ9.0BlIi6qMWfk6kc5ogJsMnQ';
     
     request({ url: url, json: true }, (error, { body }) => {
          if (error) {
               callback('Unable to connect geo service', undefined);
          } else if (body.features.length === 0) {
               callback('Unable to find location. Try another search.', undefined);
          } else {
               callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
               });
          }
     });
};

module.exports = geocode;