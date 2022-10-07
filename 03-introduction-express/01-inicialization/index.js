
const express = require('express');
const app = express(); // inicialiação;
const port = 3000; // porta variável do ambiente


app.get('/', (req, res) => {
    res.send('Hello!'); // enviando uma resposta ao usuário;
    
})


app.listen(port, ()=>{ // escutando a porta;   
    console.log(`App rodando na porta: ${port}`);
})