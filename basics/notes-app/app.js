// const fs = require('fs');
// const add = require('./utils');
const getNotes = require('./notes');

// console.log('App.js', add(10, 10));

const msg = getNotes();

console.log(msg);