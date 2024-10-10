const sequelize = require("sequelize")
const connection = require("../database/Database")

const categories = connection.define('categories',{
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    slug:{
         type: sequelize.STRING,
         allowNull: false
    }

});

module.exports = categories;