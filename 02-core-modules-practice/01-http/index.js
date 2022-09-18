/* http
    - Módulo que permite criar servidores HTTP;
    - Recebe uma aquisição e permite o envio de um html como resposta;
*/


const http = require('http');

const port = 3000; //porta de acesso;

const server = http.createServer((req, res) => { // cria http server (requisition and response);
    res.write('Hello, HTTP');  // escreve um resposta para o usuário;
    res.end(); // finaliza a resposta;
})

// 'escutando' a porta: os parâmetros são a porta e uma função de callback;
 server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`); 
 })