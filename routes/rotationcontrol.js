const express = require("express");
const router = express.Router();
const { turnOnRotation } = require("../controllers/rotationcontrol");

router.get("/turnonRotation", turnOnRotation);

module.exports = router;
