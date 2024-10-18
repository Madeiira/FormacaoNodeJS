const Sequelize = require("sequelize")

const connection = new Sequelize('weblog', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = connection;
