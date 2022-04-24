
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');


// Get the exact file path using path.join method
const filePath = path.join(__dirname, 'logs');

const logEvents = async (message) => {
    const dateTime = format(new Date(), 'yyyymmdd\tHH:mm:ss');
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        if(!fs.existsSync(filePath)) {
            await fsPromises.mkdir(filePath)
        }
        
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
        
    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;