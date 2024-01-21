const { express, cors } = require("../exports");
const { addEntry, removeEntry } = require("../services/dbService");
const router = express.Router();

router.use(cors());
router.get("/getEntries", async (req, res) => {
    await addEntry("date1", "title1", "goofy", 123);
    await addEntry("date2", "title2", "goofy2", 1266);
    await removeEntry(123);
    res.send("return");
});

module.exports = router;