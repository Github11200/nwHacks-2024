const { MongoClient } = require("../exports").mongodb;
const uri = "mongodb+srv://admin:cheesy@main.zw4cc0s.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const addEntry = async () => {

}

const getAllEntries = async () => {
    try {
        // Connect to the Atlas cluster
        await client.connect();
        const db = client.db("test");
        // Reference the "people" collection in the specified database
        const col = db.collection("people");
        // Insert the document into the specified collection        
        await col.insertOne({
            "name": { "first": "Alan", "last": "Turing" },
            "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
            "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
            "contribs": [ "Turing machine", "Turing test", "Turingery" ],
            "views": 1250000
        });
        console.log("Document found:\n" + JSON.stringify(document));
    } catch {
        console.log("Could not connect");
    }
}

module.exports = {
    getAllEntries
}