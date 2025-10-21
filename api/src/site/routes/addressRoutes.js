const express = require('express');
const router = express.Router();
const {userAuth} = require('../../middleware/authMiddleware.js');

const {getAll,create,update,getById,getByIdForUpdate,delete:t} = require('../controllers/addressController');

// GET all items with filters
router.get("/",userAuth, getAll);
router.get("/:id",userAuth, getById);
router.get("/update/:id", userAuth,getByIdForUpdate);
router.post("/",userAuth, create);
router.put("/:id",userAuth, update);
router.delete("/:id",userAuth, t);


module.exports = router;