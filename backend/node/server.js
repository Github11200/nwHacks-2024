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

// const { auth } = require("express-oauth2-jwt-bearer");
// const guard = require("express-jwt-permissions");

// const port = process.env.PORT || 8080;

// const jwtCheck = auth({
//     audience: "https://nodeapi.jinsei.tech/api",
//     issuerBaseURL: "https://dev-lacfvy66y7c52o7p.us.auth0.com/",
//     tokenSigningAlg: "RS256",
// });

// // enforce on all endpoints
// app.use(jwtCheck);

// app.get("/authorized", guard().check(["read:challenges"]), function (req, res) {
//     res.json({ test1: "test 1", test2: "test2" });
// });

// app.listen(port);

// console.log("Running on port ", port);
