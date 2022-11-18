const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());


app.post('/createproduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if (!name) {
        res.status(422).json({message: "o campo nome é obrigatório."})
        return;
    }

    console.log(name);
    console.log(price);

    res.status(201).json({message: `O produto ${name} foi enviado com sucesso.`})
})


app.get('/', (req, res) => {
    res.status(200).json({message: 'teste 123'});
})



app.listen(3000);