/* try catch
    - uma forma de evidenciar algo de errado em um bloco de código e exibir uma mensagem de erro;
*/

const x = 10;

try {
    x = 2;
} catch(err){
    console.log(`Erro : ${err}`);
}

console.log('continua programa');