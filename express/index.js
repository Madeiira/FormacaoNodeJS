const express = require("express") // Importando biblioteca do express
const app     = express();         // Iniciando Express

app.get("/",function(req,res){

    res.send("") // Enviando resposta a requisição 

}); // criando rota inicial de busca

app.get("/paramO/:nome",function(req,res){ // rota com parametro obrigatorio 

    var nome = req.params.nome;
    res.send("Olá " + nome + "");
});

app.get("/paramN/:nome?",function(req,res){ // rota com parametro Não obrigatorio 

    var nome = req.params.nome;
    if (nome){
        res.send("Olá " + nome + "");
    }else {
        res.send("Olá")
    }
});

app.get("/queryParam", function(req, res){
    var nome = req.query["nome"];

    if(nome){
        res.send(nome); 
    }else{
        res.send("Nenhum nome fornecido!");
    }
})



app.listen(4000,function(error){

    if (error){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }

})