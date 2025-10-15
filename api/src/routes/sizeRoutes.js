const express = require('express');
const router = express.Router();
const sizeController = require('../controllers/sizeController');
const {adminAuth} = require('../middleware/authMiddleware');
const authorizePermission = require('../middleware/authorizePermission');

router.get('/',sizeController.getAllSizes);
router.get('/:id',sizeController.getSizeById);
router.get('/update/:id', sizeController.getSizeByIdForUpdate);
router.post('/',authorizePermission(["manage_size","create_size"]), sizeController.createSize);
router.put('/:id',sizeController.updateSize);
router.delete('/:id',sizeController.deleteSize);

module.exports = router;
