// Import the required modules
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongodb = require("mongodb");

// Export all of these modules to be used elsewhere
exports.express = express;
exports.app = app;
exports.dotenv = dotenv;
exports.cors = cors;
exports.mongodb = mongodb;