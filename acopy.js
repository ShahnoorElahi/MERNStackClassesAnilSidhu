const mongoose=require('mongoose');
mongoose.pluralize(null); 

const main = async () => { 
    await mongoose.connect("mongodb://localhost:27017/abc"); 

    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    });

    const ProductsModel = mongoose.model('abcCollection', ProductSchema);

    let data = new ProductsModel({ name: "m 10", price: 1000 });
    let result = await data.save();

    console.log(result);
};

main();