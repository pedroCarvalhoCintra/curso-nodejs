const {Sequelize} = require('sequelize'); 

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('Conectado ao MySql.');
} catch (error) {
    console.log(`Não foi possível concetar: ${error}`); 
}

module.exports = sequelize;
