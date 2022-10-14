 
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', { // conectar sequelize com o banco de dados 'nodesequelize'
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate();
  console.log('Banco de dados conectado com o Sequelize!')
} catch(error) {
  console.log('Não foi possível conectar', error);
}

module.exports = sequelize
