const express = require('express');
const exphbs = require('express-handlebars');

const app = express(); // inicializar express;

// setup para instalar o handlebars no projeto;
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  res.render('home', { layout: false }); // renderizar a view home;
})

app.listen(3000, () => {
    console.log('app funcionando');
});
