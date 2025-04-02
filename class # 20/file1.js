let express= require('express');
let app=express();

app.get('',(req,res)=>{
    res.send('<a href="/about">about</a>');
})

app.get('/about',(req,res)=>{
    res.send('<a href="/">home</a>');
})

app.listen(4500);