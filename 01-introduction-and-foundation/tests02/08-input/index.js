/* readline.
    - Core Module que permite a leitura de entrada de dados baseado no que o usuário digita; 
*/


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("what is your favorite programing language? ", (language) => {
    console.log(`Oh. ${language} is cool!`);
    readline.close();
})