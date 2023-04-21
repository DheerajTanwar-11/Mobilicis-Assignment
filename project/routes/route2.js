const express = require("express");
const router = express.Router();
const userController = require("../controllers/route2Controller");

router.get(
	"/users/male-phone-price-greater-than-10000",
	userController.getMaleUsersWithPhonePriceAboveTenThousand
);

module.exports = router;
