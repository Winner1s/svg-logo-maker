const fs = require('fs');

fs.readFile('data.csv', 'utf8', (error, data) =>
error ? console.error(error) : console.log(data)
);