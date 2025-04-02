const dbConnect = require('./file2');

const update= async () => {
  const db = await dbConnect();
  // const result = await db.updateOne(
  const result = await db.updateMany(
    { name: 'm1' },
    { $set: { name: 'max 5', price: 50 } }
  );

  if (result.acknowledged) {
    console.log("data inserted");
  }
};

update();