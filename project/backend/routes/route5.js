const express = require("express");
const router = express.Router();
const route5Controller = require("../controllers/route5Controller");

router.get("/users/top-10-cities", route5Controller.getTop10Cities);

module.exports = router;
