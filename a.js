// var fs=require('http');
// fs.createServer(function(request,response){
// response.write(`<h1>${request.url}</h1>`);console.log(request.url);
// response.end();
// }).listen(3000);

const express=require('express');
const app= express();

app.get('',(req,res)=>{
    res.send('home');
});

app.get('/a',(req,res)=>{
    res.send('a');
});

app.listen(5000);