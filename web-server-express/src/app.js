const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

const PUBLIC_DIRECTORY_PATH = path.join(__dirname, '../public');
const VIEWS_PATH = path.join(__dirname, '../templates/views');
const PARTIALS_PATH = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', VIEWS_PATH);
hbs.registerPartials(PARTIALS_PATH);

// Setup static directory to setup
app.use(express.static(PUBLIC_DIRECTORY_PATH));

app.get('', (req, res) => {
     res.render('index', {
          title: 'Weather',
          name: 'Siddharth Gupta'
     });
});

app.get('/about', (req, res) => {
     res.render('about', {
          title: 'About',
          name: 'Siddharth Gupta'
     });
});

app.get('/help', (req, res) => {
     res.render('help', {
          title: 'Help',
          name: 'Siddharth Gupta'
     });
});

app.get('/weather', (req, res) => {
     if (!req.query.address) {
          return res.send({
               error: 'You must provide an address!!'
          });
     }
     
     geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
          if (error) {
               console.log('GeoCode API Error', error);
               return res.send({
                    error
               });
          }
          if (latitude) {
               forecast(latitude , longitude, (error, forecastData) => {
                    if (error) {
                         console.log('forecast API Error', error);
                         return res.send({
                              error
                         });
                    }
                    res.send({
                         forecast: forecastData,
                         location,
                         address: req.query.address
                    });
               });
          }
     });
});

app.get('/help/*', (req, res) => {
     res.render('404', {
          title: 'Article not found!',
          name: 'Siddharth Gupta',
          errorMessage: 'Help article does not exist.'
     })
});

app.get('*', (req, res) => {
     res.render('404', {
          title: 'Page not found!',
          name: 'Siddharth Gupta',
          errorMessage: 'Requested page is not available or exist - (404)'
     })
});

app.listen(3000, () => {
     console.log('Express Server started on http://localhost:3000');
})
