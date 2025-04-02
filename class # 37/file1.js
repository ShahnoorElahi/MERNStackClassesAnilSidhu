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
  res.send('<h1>please enter age</h1>');

  
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
  let result = data.updateMany(
      { name: req.params.name },
      { $set: req.body }
  );
  res.send({ result: "update" });
});

app.listen(5000); 