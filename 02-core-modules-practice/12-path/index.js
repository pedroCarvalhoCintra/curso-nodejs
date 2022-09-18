/* path
    - Core Module que permite extrair diversas informações sobre diretórios e arquivos;
*/
const path = require('path');

const customPath = '/relatorios/pedro/relatorio1.pdf';


console.log(path.dirname(customPath)); // nome do diretório;
console.log(path.basename(customPath)); // nome do arquivo;
console.log(path.extname(customPath)); // extensão do arquivo;