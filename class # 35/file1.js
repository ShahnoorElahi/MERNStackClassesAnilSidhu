const dbConnect = require('./file2');
const express = require('express');
const app = express();

app.get('/', async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
  console.log(data);
});

app.listen(5000); 