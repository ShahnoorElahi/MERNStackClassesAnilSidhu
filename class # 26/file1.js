let express= require('express');
let app=express();
let reqFilter = require('./file2');
let route=express.Router();

route.use(reqFilter);

app.get('',(req,res)=>{
    res.send("home pg");
    
})
route.get('/about',(req,res)=>{
    res.send("about pg");
    
})

app.use('/',route);
// http://localhost:4500/file.html
app.listen(4500);