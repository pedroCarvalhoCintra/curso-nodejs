const express = require('express');
const path = require('path');
const router = express.Router();


const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

router.post('/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`Username: ${name} \nUser age: ${age}`)
    res.sendFile(`${basePath}/userform.html`);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    console.log(`Buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
})

module.exports = router;