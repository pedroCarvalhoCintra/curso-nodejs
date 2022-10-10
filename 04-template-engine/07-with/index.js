const express = require('express');
const exphbs = require('express-handlebars');

const app = express(); 

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

  const items = ["item a", "item b", "item c"];


  res.render('dashboard', {items});
})

app.get('/post', (req, res) => {
  const post = {
    title: 'Learn Node.js',
    category: 'JavaScript',
    body: 'This article is about how we can learn Node.js with ...',
    comments: 4
  }

  res.render('blogpost', {post})
})

app.get('/', function (req, res) {

  const user = {
    name: "Pedro",
    surname: "Carvalho",
    age: 30
  };

  const palavra = "test";

  const auth = true;

  const approved = false;

  res.render('home', {user: user, palavra, auth, approved});
})

app.listen(3000, () => {
    console.log('app funcionando');
});
