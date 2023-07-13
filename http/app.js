var http = require("http")

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo ao servidor</h1> <br/> <p> Servidor fera mano </p>")
}).listen(8181)