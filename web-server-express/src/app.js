const express = require('express');

const app = express();

app.get('', (req, res) => {
     res.send('Hello Express!');
});

app.get('/help', (req, res) => {
     res.send('Ready to Help!');
});

app.get('/about', (req, res) => {
     res.send('About Express');
});

app.get('/weather', (req, res) => {
     res.send('How is the weather today?')
});

app.listen(3000, () => {
     console.log('Express Server started on http://localhost:3000');
})
