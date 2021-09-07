const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const PUBLIC_DIRECTORY_PATH = path.join(__dirname, '../public');
const App = express();

App.use(express.static(PUBLIC_DIRECTORY_PATH))

App.get('/weather', (req, res) => {
     res.send({
          forecast: 'Rain is expected',
          location: 'Dallas'
     });
});

App.listen(3000, () => {
     console.log('Express Server started on http://localhost:3000');
})
