/* File System:
    -  
*/

const fs = require("fs");

fs.readFile('test-file-fsdaux.txt', 'utf-8', (err, data) => {
    if ( err ){
        console.log(err);
        return
    }
    console.log(data);
});
