const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('book_management', 'root', 'akintola', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
