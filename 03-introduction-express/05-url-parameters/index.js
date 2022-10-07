
const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000; 

const basePath = path.join(__dirname, 'templates');

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    //leitura da tabela de users buscando pelo id fornecido no banco de dados;
    console.log(`Buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})


app.listen(port, ()=>{    
    console.log(`App rodando na porta: ${port}`);
})
