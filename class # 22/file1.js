let path=require('path')
let express= require('express');
let app=express();

let newpath=path.join(__dirname,'html files');
console.log(newpath);

app.get('',(req,res)=>{
    res.sendFile(newpath+"/home.html");
})
app.get('/about',(req,res)=>{
    res.sendFile(newpath+"/about.html");
})
app.get('/contact',(req,res)=>{
    res.sendFile(newpath+"/contact.html");
})
app.get('/*',(req,res)=>{
    res.sendFile(newpath+"/404.html");
})
// http://localhost:4500/file.html
app.listen(4500);