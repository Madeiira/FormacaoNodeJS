import express, { static } from 'express'
import { json, urlencoded } from 'body-parser'
import { authenticate } from './database/Database'

// controllers requires
import categoriesController from './categories/categoriesController'
import articlesController from './articles/articlesController'

const app = express()
const port = 8080

// view engine
app.set('view engine', 'ejs')

// Body Parser
app.use(json())
app.use(urlencoded({ extended: false }))

// Static Archives
// app.use(static('public'))

// Database authentication

authenticate()
  .then(() => {
    console.log('Conexão feita com sucesso')
  })
  .catch((error) => {
    console.log(error)
  })

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})

// Categories Routes
app.use('/', categoriesController)

// Articles Routes
app.use('/', articlesController)
