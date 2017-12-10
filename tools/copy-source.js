const fs = require('fs');

let files = fs.readdirSync('lib');
files.forEach((file) => {
    let resizable = fs.readFileSync('lib/' + file).toString();
    fs.writeFileSync('dist/' + file, resizable);
});