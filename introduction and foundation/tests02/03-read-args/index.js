

// node index.js nome=Pedro idade=19

// console.log(process.argv);

const args = process.argv.slice(2);
const nome = args[0].split('=')[1];
const idade = args[1].split('=')[1];

// console.log(nome);
// console.log(idade);

console.log(`Nome: ${nome} \nIdade: ${idade}`);