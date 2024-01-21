const { express, cors } = require("../exports");
const client = require("../services/dbService").client;
const router = express.Router();

router.use(cors());
router.get("/getEntries", (req, res) => {
    res.send("Hello world");
});

module.exports = router;