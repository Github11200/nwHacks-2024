const { MongoClient } = require("../exports").mongodb;
const uri = "mongodb+srv://admin:cheesy@main.zw4cc0s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

module.exports = async function connect() {
    try {
        await client.connect();
        console.log("Connected");
    } catch {
        console.log("Could not connect");
    }
}

exports.client = client;