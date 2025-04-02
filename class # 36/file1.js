const dbConnect = require('./file2');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
  let data = await dbConnect();
  data = await data.find({name:'m5'}).toArray();
  resp.send(data);
  console.log(data);
});

app.post('/',async (req,res)=>{
  let data = await dbConnect();
  data = await data.insertOne(req.body);
  res.send(data);
})


app.listen(5000); 