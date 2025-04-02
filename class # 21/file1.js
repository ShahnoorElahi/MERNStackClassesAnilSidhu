let path=require('path')
let express= require('express');
let app=express();

let newpath=path.join(__dirname,'html files');
console.log(newpath);
app.use(express.static(newpath));
// http://localhost:4500/file.html
app.listen(4500);