// importing the file-system module
const fs = require('fs');
const path = require('path');


// Get the exact file path using path.join method
const filePath = path.join(__dirname, 'files', 'lorem.txt');
console.log(filePath);

const readStream = fs.createReadStream(filePath, { encoding: 'utf8'});
const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'new-lorem.txt'));

// Write stream to new file

// readStream.on('data', (dataChunk) => {
//     writeStream.write(dataChunk);
// });

// Better & optimized way for write stream
readStream.pipe(writeStream);



// exit while getting any uncaught error
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error ${err}`);
    process.exit(1);
})

