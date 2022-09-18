const fs = require('fs');

const previousName = 'arquivo.txt';
const newName = 'novo-arquivo.txt';

fs.rename(previousName, newName, function(err) { // renomeia um arquivo;
    if (err){
        console.log(err);
    }

    console.log(`file renamed from ${previousName} to ${newName}`);
})