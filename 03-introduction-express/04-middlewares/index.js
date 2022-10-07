/* Middlewares
    - códigos executados entre uma ação e outra;
    - Método use no Express;
    - Ex.: verificar se o usuário está logado
*/

const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000; 

const basePath = path.join(__dirname, 'templates');

// checar autenticação:
const checkAuth = function(req, res, next) {
    
    req.authStatus = true;

    if ( req.authStatus ) {
        console.log('Está logado');
        next(); // próxima 'etapa', no caso o send file;
    } else {
        console.log('Não está logado');
        next();
    }
}

app.use(checkAuth); // toda requisição enviada ativará o middleware;

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})


app.listen(port, ()=>{    
    console.log(`App rodando na porta: ${port}`);
})
