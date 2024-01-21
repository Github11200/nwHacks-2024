// Import the required modules
const { dotenv, cors } = require("./exports");
const { app } = require("./exports");
const entries = require("./routes/entries");

dotenv.config();

app.use(cors());
app.use("/entries", entries);

app.listen(process.env.PORT, async () => {
    console.log(`Listening on port ${process.env.PORT}`);
});

const express = require("express");
const { join } = require("path");
// const app = express();

// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));

// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
    res.sendFile(join(__dirname, "auth_config.json"));
});

// Serve the index page for all other requests
app.get("/*", (_, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

// Listen on port 3000
app.listen(8080, () => console.log("Application running on port 8080"));

let auth0Client = null;

const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();

    auth0Client = await auth0.createAuth0Client({
        domain: config.domain,
        clientId: config.clientId,
    });
};
