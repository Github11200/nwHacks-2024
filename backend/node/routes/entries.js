const { express, cors } = require("../exports");
const { v4: uuidv4 } = require("uuid");
const {
    addEntry,
    removeEntry,
    findEntry,
    getAllEntries,
} = require("../services/dbService");
const router = express.Router();

router.use(cors());

router.post("/addEntry", async (req, res) => {
    let testObject = {
        date: 12,
        title: "hi",
        text: "test",
        id: 123,
    };
    await addEntry({ ...testObject })
        .then(res.send(200))
        .catch((error) => {
            res.send(error);
        });
});

router.delete("/removeEntry", async (req, res) => {
    await removeEntry(req.body.id)
        .then(res.send(200))
        .catch((error) => res.send(error));
});

router.get("/findEntry", async (req, res) => {
    await findEntry(req.body.id)
        .then((entry) => res.send(entry))
        .catch((error) => res.send(error));
});

router.get("/getAllEntries", async (req, res) => {
    await getAllEntries()
        .then((entries) => res.send(entries))
        .catch((error) => res.send(error));
});

module.exports = router;
