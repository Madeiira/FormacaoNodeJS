import Sequelize from 'sequelize'

const connection = new Sequelize('weblog', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
})

export default connection
