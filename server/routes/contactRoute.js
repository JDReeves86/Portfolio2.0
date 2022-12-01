const router = require("express").Router();
const { contactMe } = require("../controllers/contactController");

router.route('/').post(contactMe);

module.exports = router;
