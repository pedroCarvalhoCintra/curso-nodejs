/*
    Sistema de roteamento simples com Nodejs e seus Core Modules.
    - as rotas são, de maneira simplificada, as páginas que acessamos em um site;
*/

const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true);
    const fileName = q.pathname.substring(1) // nome do arquivo (a partir do segunda caracter para tirar o '/');
    
    if (fileName.includes('html')){ //apenas html;
        if ( fs.existsSync(fileName)){  // confere se o arquivo existe;
            fs.readFile(fileName, function (err, data) { 
                res.writeHead(200, {'Content-Type': 'text/html'}); 
                res.write(data);
                return res.end();
            })
        } else {
            fs.readFile('404.html', function (err, data) { 
                res.writeHead(404, {'Content-Type': 'text/html'}); 
                res.write(data);
                return res.end();
            })
        }
    } else {
        fs.readFile('404.html', function (err, data) { 
            res.writeHead(404, {'Content-Type': 'text/html'}); 
            res.write(data);
            return res.end();
        })
    }
})

 server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
 })