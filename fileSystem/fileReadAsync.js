const fsPromises = require('fs').promises;
const path = require('path');

// Get the exact file path using path.join method
const filePath = path.join(__dirname, 'files', '1-json.json');


// File read, write, append and rename operations using async-await method
const fileOperations = async () => {
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        console.log(data);
        await fsPromises.unlink(filePath, 'utf8');
        await fsPromises.writeFile(path.join(__dirname, 'files', '2.json.json'), ',{"title":"Update JSON File","author":"Sid Gupta", "id": "1"}');
        await fsPromises.appendFile(path.join(__dirname, 'files', '2.json.json'), ',{"title":"Update JSON File","author":"Sid Gupta", "id": "2"}');
        await fsPromises.rename(path.join(__dirname, 'files', '2.json.json'), path.join(__dirname, 'files', '2.1.json.json'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', '2.1.json.json'), 'utf8');
        console.log(newData);
    } catch {
        console.log('Error: ', err);
    }
}

fileOperations();


// exit while getting any uncaught error
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error ${err}`);
    process.exit(1);
})