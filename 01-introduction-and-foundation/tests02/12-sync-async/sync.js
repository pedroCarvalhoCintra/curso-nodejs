const fs = require('fs');

console.log('inicio');


fs.writeFileSync('arquivo-sync.txt', 'oi sync');

console.log('fim');