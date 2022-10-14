const {DataTypes} = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})

User.hasMany(Address); // Um usuário pode ter vários endereços;
Address.belongsTo(User); // Um endereço pertence a um usuário (dentro da tabela Address tem uma coluna 'UserId');

module.exports = Address;