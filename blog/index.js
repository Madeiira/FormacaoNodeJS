const express = require("express");
const app     = express();

app.set('view engine','ejs'); // Fazendo o Express utilizar a ferramenta EJS como View Engine

app.get("/",function(req,res){

    res.send("Bem vindo ao Blog!");

});

app.listen(8080,function(){
     console.log("App Executando")
});