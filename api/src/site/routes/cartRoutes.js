const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const {userAuth} = require('../../middleware/authMiddleware.js');




router.get("/",userAuth, cartController.getAll);
router.get("/total-price",userAuth, cartController.getTotalPrice);
router.get("/:id", cartController.getById);
router.get("/update/:id", cartController.getByIdForUpdate);
router.post("/",userAuth, cartController.create);
router.put("/:id", cartController.update);
router.delete("/:id", cartController.delete);
router.patch("/updateQty/:id",userAuth, cartController.updateQty);

module.exports = router;
