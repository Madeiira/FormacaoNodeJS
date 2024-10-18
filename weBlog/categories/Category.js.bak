import { STRING } from 'sequelize'
import { define } from '../database/Database'

const Category = define('categories', {
  title: {
    type: STRING,
    allowNull: false,
  },
  slug: {
    type: STRING,
    allowNull: false,
  },
})

// Category.sync({force: true})

export default Category

// RELACIONAMENTO CATEGORIA E ARTIGOS
// 1 Artigo pertence a 1 categoria 1-1
// N Artigos pertencem a 1 categoria 1-N
