// importing the file-system module
const fs = require('fs');


// Check for directoty exist
if(!fs.existsSync('./newDir')) {
    
    // creating new directoty
    fs.mkdir('./newDir', (err) => {
        if (err) throw err;
        console.log('Directory Created');
    })
} else {
    console.log('Directory already exist');
    // creating new directoty
    fs.rmdir('./newDir', (err) => {
        if (err) throw err;
        console.log('Directory Removed');
    })
}


// exit while getting any uncaught error
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error ${err}`);
    process.exit(1);
})