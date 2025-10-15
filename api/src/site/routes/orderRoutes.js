const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const {userAuth} = require("../../middleware/authMiddleware");

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.get("/update/:id", orderController.getByIdForUpdate);
router.post("/",userAuth, orderController.create);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.delete);

module.exports = router;
