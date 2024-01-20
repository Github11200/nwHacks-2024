const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const app = express();
const uri = process.env.CONNECTION_STRING;

const client = new MongoClient(uri);

dotenv.config();

app.get("/entries", (req, res) => {});
