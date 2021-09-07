const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON  = dataBuffer.toString();
const data = JSON.parse(dataJSON)

data.title = 'Update JSON File';
data.author = 'Sid Gupta';

const updatedJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', updatedJSON);

console.log(data);




