const dbConnect = require('./file2');

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({ name: 'm3' });
  console.warn(result);

  if (result.acknowledged) {
    console.log("data deleted");
  }
};

deleteData();
