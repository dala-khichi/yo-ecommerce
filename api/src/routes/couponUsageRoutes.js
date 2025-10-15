const express = require("express");
const router = express.Router();
const couponUsageController = require("../controllers/couponUsageController");

const {adminAuth} = require('../middleware/authMiddleware');
const authorizePermission = require('../middleware/authorizePermission');





router.get("/", couponUsageController.getAll);
router.get("/:id", couponUsageController.getById);
router.get("/update/:id", couponUsageController.getByIdForUpdate);
router.post("/", couponUsageController.create);
router.put("/:id", couponUsageController.update);
router.delete("/:id", couponUsageController.delete);

module.exports = router;