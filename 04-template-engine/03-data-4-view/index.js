const express = require('express');
const exphbs = require('express-handlebars');

const app = express(); 

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {

  const user = {
    name: "Pedro",
    surname: "Carvalho",
    age: 30
  };

  const palavra = "test";

  res.render('home', {user: user, palavra}); // enviando variáveis do back para o front;
})

app.listen(3000, () => {
    console.log('app funcionando');
});
