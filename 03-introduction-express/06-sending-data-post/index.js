
const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000; 

//ler o 'corpo' da requisição:
app.use( //middleware;
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json()); // toda requisição do body é transformada em um objeto javascript;


const basePath = path.join(__dirname, 'templates');

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

app.post('/users/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`Username: ${name} \nUser age: ${age}`)
    res.sendFile(`${basePath}/userform.html`);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    console.log(`Buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})


app.listen(port, ()=>{    
    console.log(`App rodando na porta: ${port}`);
})




