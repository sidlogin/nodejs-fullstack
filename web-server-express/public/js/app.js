console.log('Client sided javascript file is loaded successfully!')

const weatherForm = document.querySelector('form');
const searchField = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
     document.querySelector('#message1').textContent = 'Loading...';
     document.querySelector('#message2').textContent = '';
     document.querySelector('#error').textContent = '';
     e.preventDefault();
     const searchField = document.querySelector('input');
     console.log('Form Submitted!', searchField.value);

     fetch('http://localhost:3000/weather?address=' + searchField.value).then((response) => {
          response.json().then((data) => {
               if (data.error) {
                    document.querySelector('#message1').textContent = '';
                    document.querySelector('#error').textContent = data.error;
                    console.log(data.error);
               } else {
                    document.querySelector('#message1').textContent = data.location;
                    document.querySelector('#message2').textContent = data.forecast;
                    searchField.value = '';
               }
          })
     });
});