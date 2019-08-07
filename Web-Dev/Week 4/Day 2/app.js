const express = require('express');
const app = express();


app.get('/hello/world', function(req,res){
    console.log("got request for '/hello/world'");
    res.status(200).send(`hello world`);
})

app.get(`/ale`, function(req,res){
    res.status(200).send(`Apple or Ale`)
})

app.get(`/apple`, function(req,res){
    res.status(200).send(`Apple or Ale`)
})

app.get(`/who+a`, function(req,res){
    res.status(200).send(`I know right`)
})


app.get(`/:word`, function(req,res){
    let split = req.params.word.split("");
    let reverse = split.reverse();
    let joined = reverse.join("");    
    res.status(200).send(joined);
})

app.get(`/:first/:last`, function(req,res){
    res.status(200).send(`hi ${req.params.first + " " +req.params.last}`)
})

app.get('/hello/:name', function(req,res){
    console.log("got request for '/hello/world'");
    res.status(200).send(`asdiasjdisa ${req.params.name}!`);
})

app.get('*', function(req,res){
    res.status(200).send("page not found");
})
app.listen(3001,function (){
    console.log("example app listening");
})