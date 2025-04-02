const getData=require('./mongodbConnection');

const main = async ()=> {
    let data = await getData();
    data = await data.insertOne({name:"m3",brand:"b3",price:300});
    console.log(data);
}

main();

const find = async ()=> {
    let data = await getData();
    data = await data.find({}).toArray();
    console.log(data);
}

// find();


