const fs = require('fs');

let files = fs.readdirSync('lib');
files.forEach((file) => {
    fs.writeFileSync('dist/' + file, file);
});