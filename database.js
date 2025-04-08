const {MongoClient} = require('mongodb');
require('dotenv');
const uri = process.env.MONGO_URL;
console.log("Mongo URI: ", uri);
const client = new MongoClient(uri);
const db = client.db(process.env.DB_NAME || "defaultDB");  

module.exports = {
    db: db,
    client: client
};