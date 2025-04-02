//req and res handle by http server
const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify({a:"h"}));
    res.end();
}).listen(4500);
console.log(process.argv[2],process.argv[3]);