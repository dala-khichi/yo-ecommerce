const express = require("express");
const router = express.Router();
const couponController = require("../controllers/couponController");



router.post("/apply", couponController.apply_);


module.exports = router;
