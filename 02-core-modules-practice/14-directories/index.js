const fs = require('fs');

if ( !fs.existsSync('./minha-pasta')) { // confere se um diretório existe;
    console.log('does not exist.')
    fs.mkdirSync('minha-pasta'); // cria um diretorio;
}



if ( fs.existsSync('./minha-pasta')){
    console.log('exist.');
}
