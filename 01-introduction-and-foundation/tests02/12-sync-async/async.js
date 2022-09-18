const fs = require('fs');

console.log('inicio');

fs.writeFile('arquivo-async.txt', 'oi async', function(err) { // o código continua progredindo e, em um ponto futuro, obtém a resposta da execução;
    setTimeout(function(){
        console.log('arquivo criado');
    }, 1000)
})

console.log('fim')