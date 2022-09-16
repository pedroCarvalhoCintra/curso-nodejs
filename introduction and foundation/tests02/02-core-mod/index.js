/* Core Modules
    - Módulos naturais do Node;
    Ex.: Path - > verificar extensões de arquivos;

*/

const path = require('path');

console.log(path.extname('arquivo.pdf'));
console.log(path.extname('arquivo.php'));
console.log(path.extname('arquivo.c'));
