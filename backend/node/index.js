// Import the required modules
const { connect } = require("./services/dbService");
const { dotenv } = require("./exports");
const { app } = require("./exports");
const entries = require("./routes/entries");

dotenv.config();

app.use("/entries", entries);

app.listen(process.env.PORT, async () => {
    console.log(`Listening on port ${process.env.PORT}`);
});