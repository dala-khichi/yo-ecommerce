const express = require('express');
const router = express.Router();
const {getAll,create,update,getById,getByIdForUpdate,delete:t} = require('../controllers/addressController');

// GET all items with filters
router.get("/", getAll);
router.get("/:id", getById);
router.get("/update/:id", getByIdForUpdate);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", t);


module.exports = router;