const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');


const msg = getNotes();

/* NPM Validator Package Uses */
console.log('NPM Validator Package Use: ', validator.isEmail('siddharth@gmail.com'));

/* NPM Chalk Package Uses */
console.log('NPM Chalk Package Use: ', chalk.red.inverse.bold('Success!'));

