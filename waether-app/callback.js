// Asynchronous Callback funtion

const geocode = (address, callback) => {
     setTimeout(() => {
          const data = {
               latitude: 0,
               longitude: 0
          };
          callback(data);
     }, 2000);
};
geocode('Irving', (data) => {
     console.log('Callback function triggered: ', data);
});

const add = (num1, num2, callback) => {
     setTimeout(() => {
          const sum = num1 + num2;
          callback(sum);
     }, 1000);
};

add(10, 20, (data) => {
     console.log('Sum of two numbers is: ', data);
});