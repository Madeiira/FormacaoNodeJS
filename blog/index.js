const express    = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const questionModel = require("./database/Questions");
const awnserModel = require("./database/Awnsers");

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
    questionModel.findAll({raw: true, order:[['id','DESC']]
    }).then(questions=>{ //raw: true trazer apenas os dados salvos no banco
        res.render("index",{
            questions: questions
        })
    })

}); 

app.get("/form",(req,res) => {

    res.render("questions")

}); 

app.post("/questions",(req,res) => {

    var title   = req.body.title;
    var question = req.body.question;

    questionModel.create({
        title: title,
        question: question
    }).then(() =>{
        console.log("Pergunta cadastrada com sucesso");
        res.redirect("/")
    }).catch((error)=>{
        console.log(error);
        res.redirect("/")
    })
}); 

app.post("/awnsers",(req,res) => {

    var awnser   = req.body.awnser;
    var questionId = req.body.questionId;

    awnserModel.create({
        awnser: awnser,
        questionId: questionId
    }).then(() =>{
        console.log("Resposta cadastrada com sucesso");
        res.redirect("/")
    }).catch((error)=>{
        console.log(error);
        res.redirect("/")
    })
}); 

app.get("/question/:id",(req,res) =>{
    var id = req.params.id;

    questionModel.findOne({
        where: {id: id}
    }).then(question=>{
        if(question != undefined){

            awnserModel.findAll({
                where:{questionId:question.id},raw: true, order:[['id','DESC']]
            }).then(awnsers =>{

                res.render("questionAwnser",{
                    question: question,
                    awnsers: awnsers
                });

            });

        }else{
            res.redirect("/")
        }
    });
})

app.listen(8080,function(){
     console.log("App Executando")
});