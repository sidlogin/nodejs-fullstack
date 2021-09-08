const path = require('path');
const express = require('express');

const PUBLIC_DIRECTORY_PATH = path.join(__dirname, '../public');
const app = express();

app.use(express.static(PUBLIC_DIRECTORY_PATH));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

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
