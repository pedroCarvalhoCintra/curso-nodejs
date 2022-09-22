// console.

const x = 19;
const nome = "pedro";
const lista = [1,2,3];

console.log(x, nome, lista);
console.log("Nome: %s", nome);

//contagem
console.count(`valor de x: ${x}, contagem:`);
console.count(`valor de x: ${x}, contagem:`);
console.count(`valor de x: ${x}, contagem:`);

//clear
setTimeout(() => {
    console.clear();
}, 3000);