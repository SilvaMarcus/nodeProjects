const express = require("express"); // Importando o Express 
const app = express();


app.get("/",function(req,res){
    res.send("<h1> Bem vindo a pagina Home</h1>")
});

app.get("/Compras",(req,res) => {
    res.send("Bem vindo ao Compras")
})




app.listen(5000, function(erro){
   
    if(erro){
    
        console.log("Acoteceu um erro")
    } else {
        console.log("Servidor iniciado com sucesso")
    }
})