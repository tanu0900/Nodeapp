const { MongoClient } = require('mongodb');

//const url = 'mongodb://localhost:27017';
const url='mongodb+srv://tanunew:Password123@cluster0.vxhev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client = new MongoClient(url);
const dbName = 'sample_mflix';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db;

}

module.exports={main}

