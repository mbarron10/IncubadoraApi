const express = require("express");
const router = express.Router();
const {
  servoZero,
  servo15,
  servo30,
  servo45,
} = require("../controllers/blindscontrol");

router.get("/servozero", servoZero);
router.get("/servo15", servo15);
router.get("/servo30", servo30);
router.get("/servo45", servo45);

module.exports = router;
