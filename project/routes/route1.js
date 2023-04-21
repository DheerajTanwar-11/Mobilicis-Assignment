const express = require("express");
const router = express.Router();
const route1Controller = require("../controllers/route1Controller");

router.get(
	"/users/income-below-5-and-car-brand",
	route1Controller.getUsersWithIncomeBelowFiveAndCarBrand
);

module.exports = router;
