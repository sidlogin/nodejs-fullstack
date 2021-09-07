const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

const location = process.argv[2];

if (!location) {
     console.log(chalk.red.bold('Please provide an address'));
} else {
     geocode(location, (error, {latitude , longitude, location} = {}) => {
          if (error) {
               return console.log('GeoCode API Error', error)
          }
          if (latitude) {
               forecast(latitude , longitude, (error, forecastData) => {
                    if (error) {
                         return console.log('forecast API Error', error)
                    }
                    console.log('forecast Data: ', forecastData);
               });
          }
     });
}
