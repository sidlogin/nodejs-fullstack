const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');


const msg = getNotes();
const command = process.argv[2];

console.log(msg);
console.log(validator.isEmail('siddharth@gmail.com'));
console.log(chalk.red.inverse.bold('Success!'));

console.log('Commandline Arguments: ', process.argv);

if (command === 'add') {
     console.log('Adding Note!');
} else if (command === 'remove') {
     console.log('Deleting Note!');
}