const dbConnect = require('./file2');


const main = async () => {
    let data = await dbConnect();
    data = await data.find({name:'m6'}).toArray();
    console.warn(data);
  };
  
  main();