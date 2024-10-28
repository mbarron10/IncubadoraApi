const express = require("express");
const router = express.Router();
const { turnOffLights, turnOnLights } = require("../controllers/lightscontrol");

router.get("/turnoffLights", turnOffLights);
router.get("/turnonLights", turnOnLights);

module.exports = router;
