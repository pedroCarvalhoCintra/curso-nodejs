
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true); // quando a requisição chegar chama o modulo url, analisa a string da url da req (dividi em partes) e retorna um objeto URL;
    const name = urlInfo.query.name; // busca parâmetro name na url;
     
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    
    if (!name){
        res.end('<h1>Preencha o seu nome: </h1> <form method="GET"> <input type="text" name="name" /><input type="submit" value="Enviar"></form> ')
    } else {
        res.end(`<h1>Seja bem-vindo, ${name}</h1>`);
    }

})

 server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
 })