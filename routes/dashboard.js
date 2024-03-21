const { getData } = require("../controllers/dashboardController");

const router = require("express").Router();

// to do - validate schema middleware
router.route("/").get(getData);

module.exports = router;