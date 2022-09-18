/* Modules.
    - Scripts reaproveitáveis;
    - Internos, Core Modules e Externos;
    Ex.: File System (fs) - > Core Module para trabalhar com diretórios e arquivos;
*/

const fs = require("fs");

fs.readFile('test-file-fsdaux.txt', 'utf-8', (err, data) => {
    if ( err ){
        console.log(err);
        return
    }
    console.log(data);
});
