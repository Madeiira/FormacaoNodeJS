const express = require("express");
const app     = express();

app.set('view engine','ejs'); // Fazendo o Express utilizar a ferramenta EJS como View Engine
app.use(express.static('public')); // 


app.get("/",(req,res) => {

    res.render("index")

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