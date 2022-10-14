const express = require('express');
const exphbs = require('express-handlebars');

const app = express();


const conn = require('./db/conn');

const User = require('./models/User');
const Address = require('./models/Address');

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json());

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
  res.render('adduser');
})

app.post('/users/create', async (req, res) => { 
  
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if ( newsletter == 'on' ){
    newsletter = true;
  } else {
    newsletter = false;
  }

  console.log(req.body);

  await User.create({name, occupation, newsletter});

  res.redirect('/');


})

app.get('/users/:id', async (req, res) => { 
  
  const id = req.params.id;

  const user = await User.findOne({raw: true, where: {id: id}}) 

  res.render('userview', {user});

})

app.post('/users/delete/:id', async (req, res) => { 

  const id = req.params.id;

  await User.destroy({where: {id: id}});

  req.redirect('/');

})


app.get('/users/edit/:id', async (req, res) => { 

  const id = req.params.id;
  
  // resgata o endereço do usuário, isso faz com que os registros associados também venham na seleção; 
  const user = await User.findOne({include: Address, where: {id: id}}); 

  req.redirect('useredit', {user: user.get({plain: true})});

})

app.post('/users/update', async (req, res) => {

  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  const newsletter = req.body.newsletter;

  if ( newsletter == 'on') {
    newsletter = true;
  }else {
    newsletter = false;
  }

  const userData = {
    id,
    name,
    occupation, 
    newsletter
  }

  await User.update(userData, {where: {id: id}});

  res.redirect('/');

})


app.get('/', async (req, res) => {
  
  const users = await User.findAll({raw: true});
  
  console.log(users);

  res.render('home', {users: users} );
})

app.post('/address/create', async (req, res) => {

  const UserId = req.body.UserId;
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;
  
  const address = {
    UserId,
    street,
    number,
    city
  }

  await Address.create(address);

  res.redirect(`users/edit/${UserId}`); 
})


conn
  .sync()
  //.sync({force: true}) 
  .then( ()=>{ 
    app.listen(3000)
  })
  .catch(err => console.log(err))
