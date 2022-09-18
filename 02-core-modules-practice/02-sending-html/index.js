
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; // indica que a requisição bem sucedida;
    res.setHeader('Contenty-Type', 'text/html'); // alterando o tipo de conteúdo para text/html;
    res.end('<h1> Hello, html. <h1>'); // envia o último 'bloco de dados' e finaliza a resposta;
})

 server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
 })