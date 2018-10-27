const fs = require('fs');

// Synchronous
/*
let content
try{
    // Path is relative to execution location???
    content = fs.readFileSync('./README.md', 'utf-8');
} catch(ex){
    console.log(ex);
}
console.log(content);
*/
console.log('start reading a file...')
fs.readFile('./README.md', 'utf-8', function(err, content) {

    if(err){
        console.log('error happened during reading the file')
        return console.log(err);
    }

    console.log(content);
});
console.log('end of the file')