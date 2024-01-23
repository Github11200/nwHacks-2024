const { express, cors, app } = require("../exports");
const {
    addEntry,
    removeEntry,
    findEntry,
    getAllEntries,
} = require("../services/dbService");
const router = express.Router();

router.use(cors());
app.use(express.json());

router.post("/addEntry", async (req, res) => {
    await addEntry(req.body.date, req.body.title, req.body.text)
        .then(res.sendStatus(200))
        .catch((error) => {
            res.sendStatus(error);
        });
});

router.delete("/removeEntry", async (req, res) => {
    await removeEntry(123456)
        .then(res.send(200))
        .catch((error) => res.sendStatus(error));
});

router.get("/findEntry", async (req, res) => {
    await findEntry(123456)
        .then((entry) => res.send(entry))
        .catch((error) => res.sendStatus(error));
});

router.get("/getAllEntries", async (req, res) => {
    await getAllEntries()
        .then((entries) => res.send(entries))
        .catch((error) => res.sendStatus(error));
});

module.exports = router;
