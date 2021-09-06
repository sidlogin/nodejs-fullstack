const getUser = require('./src/getUser');

getUser(1, (user) => {
     console.log(user)
});

getUser(2, (user) => {
     console.log(user)
});

const sum = 1 + 22;
console.log(sum);