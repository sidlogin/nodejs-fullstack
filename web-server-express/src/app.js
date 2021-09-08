const path = require('path');
const express = require('express');

const app = express();

const PUBLIC_DIRECTORY_PATH = path.join(__dirname, '../public');
const VIEWS_PATH = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', VIEWS_PATH);

// Setup static directory to setup
app.use(express.static(PUBLIC_DIRECTORY_PATH));

app.get('/weathers', (req, res) => {
     res.render('index', {
          title: 'Weather App',
          name: 'Siddharth Gupta'
     });
});

app.get('/about', (req, res) => {
     res.render('about', {
          title: 'About ExpressJS App',
          name: 'Siddharth Gupta'
     });
});

app.get('/help', (req, res) => {
     res.render('about', {
          title: 'ExpressJS Help',
          name: 'Siddharth Gupta'
     });
});

app.get('/weather', (req, res) => {
     res.send({
          forecast: 'Rain is expected',
          location: 'Dallas'
     });
});

app.listen(3000, () => {
     console.log('Express Server started on http://localhost:3000');
})
