const express = require("express");
const router = express.Router();
const {
  turnOffVentilator,
  turnOnVentilator,
} = require("../controllers/ventilatorcontrol");

router.get("/turnoffVentilator", turnOffVentilator);
router.get("/turnonVentilator", turnOnVentilator);

module.exports = router;
