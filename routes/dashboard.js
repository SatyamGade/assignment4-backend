const { getData } = require("../controllers/dashboardController");

const router = require("express").Router();

router.route("/").get(getData);

module.exports = router;