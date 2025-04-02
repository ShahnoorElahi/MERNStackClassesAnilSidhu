const dbConnect = require('./file2');
const mongodb=require('mongodb');
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

// app.put("/", async (req, res) => {
//   let data = await dbConnect();
//   let result = data.updateOne(
//       { name: req.body.name },
//       { $set: req.body }
//   );
//   res.send({ result: "update" });
// });

app.put("/:name", async (req, res) => {
  let data = await dbConnect();
  let result = data.updateOne(
      { name: req.params.name },
      { $set: req.body }
  );
  res.send({ result: "update" });
});

app.delete('/:id',async (req,res)=>{
  let data = await dbConnect();
  data = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
  res.send(data);
})



app.listen(5000); 