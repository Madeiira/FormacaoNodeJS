const express = require("express") // Importando biblioteca do express
const app     = express();         // Iniciando Express

app.get("/",function(req,res){

    res.send("") // Enviando resposta a requisição 

}); // criando rota inicial de busca


app.listen(4000,function(error){

    if (error){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }

})