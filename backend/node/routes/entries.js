const { express, cors } = require("../exports");
const {
    addEntry,
    removeEntry,
    findEntry,
    getAllEntries,
} = require("../services/dbService");
const router = express.Router();

router.use(cors());
router.get("/getEntries", async (req, res) => {
    await addEntry("date1", "title1", "goofy", 123);
    await addEntry("date2", "title2", "goofy2", 1266);
    await addEntry("date3", "title3", "goof3", 1234444);
    await removeEntry(123);
    console.log(await findEntry(1266));
    console.log(await getAllEntries());
    res.send("return");
});

module.exports = router;
