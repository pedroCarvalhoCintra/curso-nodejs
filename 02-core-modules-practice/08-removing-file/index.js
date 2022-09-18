const fs = require('fs');

fs.unlink('arquivo.txt', function (err) { // remove um arquivo;
    if (err) {
        console.log(err);
        return;
    }

    console.log('removed file.');
})