const fs = require('fs');

console.log('inicio');


fs.writeFileSync('arquivo-sync.txt', 'oi sync'); // o código espera ser totalmente executado para prosseguir;

console.log('fim');