const express = require('express');
const exphbs = require('express-handlebars');

const app = express(); 

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  res.render('home');
})

app.listen(3000, () => {
    console.log('app funcionando');
});
