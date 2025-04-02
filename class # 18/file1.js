let express= require('express');
let app=express();

app.get('',(req,res)=>{
    res.send('home pg'+req.query.name);
    console.log(req.query.name,req.query.class);
    //http://localhost:4500/?name=aliya&class=file
})

app.get('/about',(req,res)=>{
    res.send('about pg');
})

app.listen(4500);