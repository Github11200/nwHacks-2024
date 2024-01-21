const { MongoClient } = require("../exports").mongodb;
const uri =
    "mongodb+srv://admin:cheesy@main.k98k84m.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const databaseName = "entries";
const collectionName = "entriesCollection";

const addEntry = async (date, title, text, id) => {
    try {
        await client.connect();
        const db = await client.db(databaseName);
        const collection = await db.collection(collectionName);
        await collection.insertOne({
            date: date,
            title: title,
            text: text,
            id: id,
        });
        console.log("Entry was added to the database.");
    } catch {
        console.log("Could not add entry to the database.");
    }
};

const removeEntry = async (id) => {
    try {
        await client.connect();
        const db = await client.db(databaseName);
        const collection = await db.collection(collectionName);

        await collection.deleteOne({ id: id });
        console.log("Removed the entry from the database.");
    } catch {
        console.log("Could not remove entry to the database.");
    }
};

const findEntry = async (id) => {
    try {
        await client.connect();
        const db = await client.db(databaseName);
        const collection = await db.collection(collectionName);

        return await collection.findOne({ id: id });
    } catch {
        console.log("Could not find the entry from the database.");
    }
};

const getAllEntries = async () => {
    try {
        await client.connect();
        const db = await client.db(databaseName);
        const collection = await db.collection(collectionName);

        return await collection.find({}).toArray();
    } catch {
        console.log("Could not get all of the entries from the database.");
    }
};

module.exports = {
    addEntry,
    removeEntry,
    findEntry,
    getAllEntries,
};
