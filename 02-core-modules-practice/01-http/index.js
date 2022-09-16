/* http
    - Módulo que permite criar servidores HTTP;
    - Recebe uma aquisição e envia um html como resposta;

*/


const http = require('http');

const port = 3000; //porta de acesso;

const server = http.createServer((req, res) => {
    res.write('Hello, HTTP');
    res.end();
})

// 'escutando' a porta: os parâmetros são a porta e uma função de callback;
 server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
 })