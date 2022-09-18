const path = require('path');

console.log(path.resolve('arquivo.txt')); // caminho absoluto;

// formar path:
const midFolder = 'relatorios';
const fileName = 'pedro.txt';

const finalPath = path.join('/','arquivos', midFolder, fileName);
console.log(finalPath);
