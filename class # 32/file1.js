const dbConnect = require('./file2');

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: 'note 7',
      brand: 'vivo',
      price: 320,
      category: 'mobile'
    },
    {
      name: 'note 8',
      brand: 'vivo',
      price: 320,
      category: 'mobile'
    }

  ]);

  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();