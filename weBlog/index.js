const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/Database');

//util functions
const truncateText = require('./utils/functionsUtil');

const app = express()
const port = 8080

//controllers requires
const categoriesController = require('./categories/categoriesController');
const articlesController = require('./articles/articlesController');

//models requires
const Article = require('./articles/Article');
const Category = require('./categories/Category');

//view engine
app.set('view engine', 'ejs');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//Static Archives
app.use(express.static('public'))

// Database authentication

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso")
    }).catch((error) =>{
        console.log(error)
    });


app.get("/",(req,res) =>{
    Article.findAll({
        include:[{model:Category}] // Join
    }).then(articles=>{

        res.render("index", {
            articles:articles,
            truncateText: truncateText
        });

    });
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});


//Categories Routes
app.use('/', categoriesController);

//Articles Routes
app.use('/', articlesController);