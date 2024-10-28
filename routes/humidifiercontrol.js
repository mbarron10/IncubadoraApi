const express = require("express");
const router = express.Router();
const {
  turnOffHumidifier,
  turnOnHumidifier,
} = require("../controllers/humidifiercontrol");

router.get("/turnoffHumidifier", turnOffHumidifier);
router.get("/turnonHumidifier", turnOnHumidifier);

module.exports = router;
