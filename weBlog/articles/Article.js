import { STRING, TEXT, INTEGER } from 'sequelize'
import { define } from '../database/Database'
import Category, { hasMany } from '../categories/Category'

const Article = define('articles', {
  title: {
    type: STRING,
    allowNull: false,
  },
  slug: {
    type: STRING,
    allowNull: false,
  },
  body: {
    type: TEXT,
    allowNull: false,
  },
  categoryId: {
    // Adicionando a coluna categoryId
    type: INTEGER,
    references: {
      model: Category, // Referência ao modelo Category
      key: 'id', // Chave primária na tabela categories
    },
    allowNull: false, // Se desejar que a categoria seja obrigatória
  },
})

// Definindo o relacionamento
Article.belongsTo(Category, { foreignKey: 'categoryId' }) // Um artigo pertence a uma categoria
hasMany(Article, { foreignKey: 'categoryId' }) // Uma categoria pode ter muitos artigos

// Sincronize o modelo com o banco de dados
// Article.sync({force: true})

export default Article
