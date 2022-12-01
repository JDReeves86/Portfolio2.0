const router = require("express").Router();
const path = require("path");
const contactMe = require("./contactRoute");

router.use('/', contactMe);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
