const sequelize = require("sequelize");
const connection = require("../database/Database");
const Category = require("../categories/Category"); 

const Article = connection.define('articles', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false
    },
    body: {
        type: sequelize.TEXT,
        allowNull: false
    },
    categoryId: {  // Adicionando a coluna categoryId
        type: sequelize.INTEGER,
        references: {
            model: Category, // Referência ao modelo Category
            key: 'id'        // Chave primária na tabela categories
        },
        allowNull: false // Se desejar que a categoria seja obrigatória
    }
});

// Definindo o relacionamento
Article.belongsTo(Category, { foreignKey: 'categoryId' }); // Um artigo pertence a uma categoria
Category.hasMany(Article, { foreignKey: 'categoryId' }); // Uma categoria pode ter muitos artigos

// Sincronize o modelo com o banco de dados
// Article.sync({force: true})

module.exports = Article;