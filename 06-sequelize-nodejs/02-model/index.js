const express = require('express')
const exphbs = require('express-handlebars')

const app = express()


const conn = require('./db/conn')

const User = require('./models/User');

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

// cria as tabelas e roda a aplicação;
conn.sync().then( ()=>{
  app.listen(3000)
}).catch(err => console.log(err))
