const express = require("express"); // Importando o Express 
const app = express(); // app recebendo o express


app.get("/",function(req,res){
    res.send("<h1> Bem vindo a pagina Home</h1>") // resposta
});  //metodo get para criar rota (express.get)



app.get("/Compras",(req,res) => {
    res.send("Bem vindo ao Compras") // resposta
}) // criando rota com app.get (express.get)


//usando o metodo listen do express para criar porta e abrir o servidor
//abrindo servidor
app.listen(5000, function(erro){
   
    if(erro){
    
        console.log("Acoteceu um erro")
    } else {
        console.log("Servidor iniciado com sucesso")
    }
})