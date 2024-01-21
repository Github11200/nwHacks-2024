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
