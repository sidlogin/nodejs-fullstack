const fs = require('fs');

/**
 * Adding NodeJS FileSystem Module to create a new text file with content
 */

// fs.writeFileSync('notes.txt', 'My name is Siddharth!');

/**
 * Appending data in to text file using NodeJS FileSystem Append method
 */
fs.appendFileSync('notes.txt', '\nAppending new line in newly create text file');