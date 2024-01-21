const { express, cors } = require("../exports");
const { getAllEntries } = require("../services/dbService");
const router = express.Router();

router.use(cors());
router.get("/getEntries", async (req, res) => {
    await getAllEntries();
    res.send("return");
});

module.exports = router;