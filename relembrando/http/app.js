var http = require("http");

http.createServer(function(req,res){
    res.end("<h1>Bem vindo!</h1>");
}).listen(3000); // criar um servidor http, caso hospedado seria possivel acessar essa aplicação.

console.log("Server iniado");