const {MongoClient} = require('mongodb');
const url='mongodb://localhost:27017';
const database='as';
const client=new MongoClient(url);

async function getData() {
    let result=await client.connect();
    let db=result.db(database);
    return db.collection('aas');
}

module.exports=getData;