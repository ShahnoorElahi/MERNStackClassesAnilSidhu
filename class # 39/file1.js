const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/as"); 

  const ProductSchem = new mongoose.Schema({
      name: String,
      price: Number
  });


const main = async () => { 
  const ProductsModel = mongoose.model('aas', ProductSchem);

  let data = new ProductsModel({ name: "m100", price: 1001});
  let result = await data.save();

  console.log(result);
};

main();

// const findInDB = async () => {

//   const Product = mongoose.model('cbas', ProductSchem);

//   let data;
//   console.log("find",data);
//   console.log("find",await Product.find());

// };

// // findInDB();

// const updateInDB = async () => {
//   const Product = mongoose.model('cbas', ProductSchem);
//   let data = await Product.updateMany(
//     { name: "m100" },
//     {
//       $set: { price: 700, name:"abc" }
//     }
//   );
//   console.log(data);
// };

// // updateInDB();

// const deleteInDB = async () => {
//   const Product = mongoose.model('cbas', ProductSchem);
//   let data = await Product.deleteOne({ name: "abc" })
//   console.log(data);
// };

// // deleteInDB();