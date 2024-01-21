// Import the required modules
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongodb = require("mongodb");

// Export all of these modules to be used elsewhere
module.exports = {
    express,
    app,
    dotenv,
    cors,
    mongodb
};