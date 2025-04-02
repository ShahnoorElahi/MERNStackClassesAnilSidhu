//req and res handle by http server
const http=require('http');
http.createServer((req,res)=>{
    res.write('<h1>jgd</h1>');
    res.end();
}).listen(4500);

