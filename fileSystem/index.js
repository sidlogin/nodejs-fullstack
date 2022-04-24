// importing the file-system module
const fs = require('fs');
const path = require('path');

// Get the exact file path using path.join method
const filePath = path.join(__dirname, 'files', '1-json.json');

// ReadFile method to read file data from given path
fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) throw err;
    console.log('Data read successfully');
    
    // writeFile method to write data in to new file at given path
    fs.writeFile(path.join(__dirname, 'files', '2.json.json'), fileData, (err) => {
        if (err) throw err;
        console.log('Data written successfully');
    
        // appendFile method to append data in to new/old file at given path
        fs.appendFile(path.join(__dirname, 'files', '2.json.json'), '{"title":"Update JSON File","author":"Sid Gupta", "id": "1"}', (err) => {
            if (err) throw err;
            console.log('Data appended successfully');

            // rename method to rename the file at given path
            fs.rename(path.join(__dirname, 'files', '2.json.json'), path.join(__dirname, 'files', '2.1.json.json'), (err) => {
                if (err) throw err;
                console.log('Rename successfully');
            })
        })
        
    })
});


// exit while getting any uncaught error
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error ${err}`);
    process.exit(1);
})