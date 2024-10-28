const express = require("express");
const router = express.Router();
const { turnOffMotor, turnOnMotor } = require("../controllers/motorcontrol");

router.get("/turnoff", turnOffMotor);
router.get("/turnon", turnOnMotor);

module.exports = router;
