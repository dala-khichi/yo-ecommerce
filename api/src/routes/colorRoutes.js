const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

const {adminAuth} = require('../middleware/authMiddleware');
const authorizePermission = require('../middleware/authorizePermission');



router.get('/', colorController.getAllColors);
router.get('/:id', colorController.getColorById);
router.get('/update/:id', colorController.getColorByIdForUpdate);
router.post('/', colorController.createColor);
router.put('/:id', colorController.updateColor);
router.delete('/:id', colorController.deleteColor);

module.exports = router;
