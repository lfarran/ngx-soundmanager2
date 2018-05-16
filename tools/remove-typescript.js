const del = require('del');

del(['dist/*.ts']).then(paths => {
    console.log('Typescript files that will be deleted:\n', paths.join('\n'));
});