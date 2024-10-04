const express    = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const questionModel = require("./database/Questions");

const app        = express();

//Database

connection.authenticate()
    .then(() =>{
        console.log("Conexão com o banco efetuada com sucesso!")
    })
    .catch((error)=>{
        console.log(error);
    });


app.set('view engine','ejs'); // Fazendo o Express utilizar a ferramenta EJS como View Engine
app.use(express.static('public')); // 

app.use(bodyParser.urlencoded({extended: false})); // resgatar dados enviados pelo formulario para decodificar em uma estrutura javascript
app.use(bodyParser.json());

app.get("/",(req,res) => {

    res.render("index")

}); 

app.get("/form",(req,res) => {

    res.render("questions")

}); 

app.post("/posts",(req,res) => {

    var title   = req.body.title;
    var question = req.body.question;


}); 

// app.get("/:nome?/:ling?",function(req,res){
//     var nome = req.params.nome;
//     var ling = req.params.ling;
    
//     var exibirMsg = false;
//     var perguntas  = [
//         {questao: "Qual seu nome?", resposta: "Gabriel", solicitante: "Jeferson" },
//         {questao: "Qual sua idade?",resposta: "22" ,solicitante: "João"}
//     ]; 
    
//     res.render("index",{
//         nome: nome,
//         ling: ling,
//         msg : exibirMsg,
//         perguntas: perguntas
 
//     });

// });

app.listen(8080,function(){
     console.log("App Executando")
});