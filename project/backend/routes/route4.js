const express = require("express");
const router = express.Router();
const route4Controller = require("../controllers/route4Controller");

router.get(
	"/users/car-brand-and-email",
	route4Controller.getUsersWithCarBrandAndNoDigitsInEmail
);

module.exports = router;
