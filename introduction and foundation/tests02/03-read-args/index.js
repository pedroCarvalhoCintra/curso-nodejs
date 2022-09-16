/* Args via linha de comando
    - O Node permite que passamos argumentos por linha de comando;
    - Argumentos ficam no array: process.argv;

    Ex.: comando : node index.js nome=Pedro idade=19

*/

// console.log(process.argv);

const args = process.argv.slice(2);
const nome = args[0].split('=')[1];
const idade = args[1].split('=')[1];

console.log(`Nome: ${nome} \nIdade: ${idade}`);