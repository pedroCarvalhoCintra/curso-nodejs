const express = require('express');
const exphbs = require('express-handlebars');

const app = express(); 

const hbs = exphbs.create({ // configurando o diretório dos partials
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);
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

app.get('/blog', (req, res) => {

  const posts = [
    {
      title: 'Learn Node.js',
      category: 'JavaScript',
      body: 'This article is about how we can learn Node.js with ...',
      comments: 4
    },
    {
      title: 'Learn PHP',
      category: 'PHP',
      body: 'This article is about how we can learn PHP with ...',
      comments: 10
    },
    {
      title: 'Learn Python',
      category: 'Python',
      body: 'This article is about how we can learn Python with ...',
      comments: 44
    }
  ]

  res.render('blog', {posts});

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
