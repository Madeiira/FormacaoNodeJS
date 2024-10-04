const sequelize = require("sequelize");

const connection = new sequelize('projeto_blog','root','root',{
    host: 'localhost', // servidor aonde está rodando o banco
    dialect: 'mysql'   // tipo do banco
});

module.exports = connection; // exportando para poder ser utilizado em outras conexões