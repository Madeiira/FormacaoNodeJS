const sequelize = require("sequelize")
const connection = require("../database/Database")

const Category = connection.define('categories',{
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    slug:{
         type: sequelize.STRING,
         allowNull: false
    }

});

// Category.sync({force: true})


module.exports = Category;

//RELACIONAMENTO CATEGORIA E ARTIGOS
// 1 Artigo pertence a 1 categoria 1-1
// N Artigos pertencem a 1 categoria 1-N