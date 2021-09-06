const yargs = require('yargs');

const command = process.argv[2];
// console.log('NPM Reading Commandline Arguments: ', process.argv);
if (command === 'add') {
     console.log('Adding Note!');
} else if (command === 'remove') {
     console.log('Deleting Note!');
}

/* 
     NPM Yargs Package Uses
     Command-1: node app.js add 
     Output: { _: [ 'add' ], '$0': 'app.js' }

     Command-2: node app.js add --title='My Arguments'
     Output: { _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
*/

/** Customize yargs version */
yargs.version('1.1.0');

/** yargs add command */
yargs.command({
     command: 'add',
     describe: 'Adding a new note',
     handler: function() {
          console.log('Adding a new note!')
     }
});

/** yargs remove command */
yargs.command({
     command: 'remove',
     describe: 'Removing a note',
     handler: function() {
          console.log('Removing a note!')
     }
});

/** yargs list command */
yargs.command({
     command: 'list',
     describe: 'Listing all notes',
     handler: function() {
          console.log('Note listing!')
     }
});

/** yargs read command */
yargs.command({
     command: 'read',
     describe: 'Read a note',
     handler: function() {
          console.log('Read a note!')
     }
});

console.log('NPM YARGS for Commandline Arguments: ', yargs.argv);
