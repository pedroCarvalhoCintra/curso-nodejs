const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

const conn = mysql.createConnection({ // cria conexão com o banco de dados (ainda não está sendo executada)
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
})

conn.connect(function (err) { // estabelecer conexão a cada interação com a aplicação
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})