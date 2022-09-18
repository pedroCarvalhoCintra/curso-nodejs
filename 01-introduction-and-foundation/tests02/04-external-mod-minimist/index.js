/* Módulos Externos.
    - podem ser instalados via npm ;
    - é necessário inicializar o npm no projeto (npm init), para que os módulos fiem mapeados;
    - são salvos na pasta node_modules;

    Ex.: minimist => auxilia na leitura de args pela linha de comando;

    comando : node index.js --nome=Pedro --idade=19
*/

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const nome = args['nome'];
const idade = args['idade'];

console.log(`Nome: ${nome} \nIdade: ${idade}`);