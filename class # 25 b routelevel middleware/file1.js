let express= require('express');
let app=express();

const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send('please enter age')
    }
    else if(req.query.age < 18){
        res.send('your age is small')
    }
    else{
        next();
    }
};

// app.use(reqFilter);

app.get('',(req,res)=>{
    res.send("home pg");
    
})
app.get('/about',reqFilter,(req,res)=>{
    res.send("about pg");
    
})

// http://localhost:4500/file.html
app.listen(4500);