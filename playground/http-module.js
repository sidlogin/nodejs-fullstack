const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=f36e752d01de2f343e899f4e610d4d7c&query=45,-75&units=f';

const request = http.request(url, (response) => {
     let data = '';

     response.on('data', (chunk) => {
          // chunk returns data in buffer stream. Now converting buffer stream in to string
          data = data + chunk,toString();
     });

     response.on('end', () => {
          const body = JSON.parse(data);
          console.log(body);
     });
});

request.on('error', (error) => {
     console.log('An Error: ', error);
})

request.end();