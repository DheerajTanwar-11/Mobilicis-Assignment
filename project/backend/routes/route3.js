const express = require("express");
const router = express.Router();
const route3Controller = require("../controllers/route3Controller");

router.get(
	"/users/last-name-starts-with-m-and-quote-length-greater-than-15-and-email-includes-last-name",
	route3Controller.getUsersWithLastNameStartingWithMAndQuoteLengthGreaterThan15AndEmailIncludesLastName
);

module.exports = router;
