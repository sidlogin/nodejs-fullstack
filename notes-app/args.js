const yargs = require('yargs');
const notes = require('./notes');

/**
 * Read Command line parameters in Node JS
 * Use NPM Package YARGS to create customize commands
 */



const command = process.argv[2];
// console.log('NPM Reading Commandline Arguments: ', process.argv);
// if (command === 'add') {
//      console.log('Adding Note!');
// } else if (command === 'remove') {
//      console.log('Deleting Note!');
// }

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
     builder: {
          title: {
               describe: 'Note Title',
               demnadOption: true,
               type: 'string'
          },
          body: {
               describe: 'Note Body',
               demnadOption: true,
               type: 'string'
          }
     },
     handler: (argv) => {
          notes.addNote(argv.title, argv.body);
     }
});

/** yargs remove command */
yargs.command({
     command: 'remove',
     describe: 'Removing a note',
     builder: {
          title: {
               describe: 'Note Title',
               demnadOption: true,
               type: 'string'
          },
          body: {
               describe: 'Note Body',
               demnadOption: true,
               type: 'string'
          }
     },
     handler(argv) {
          notes.removeNote(argv.title);
     }
});

/** yargs list command */
yargs.command({
     command: 'list',
     describe: 'Listing all notes',
     handler: function() {
          notes.listNotes();
     }
});

/** yargs read command */
yargs.command({
     command: 'read',
     describe: 'Read a note',
     builder: {
          title: {
               describe: 'Note Title',
               demnadOption: true,
               type: 'string'
          }
     },
     handler: function(argv) {
          notes.readNotes(argv.title);
     }
});

yargs.parse();
// console.log('NPM YARGS for Commandline Arguments: ', yargs.argv);
