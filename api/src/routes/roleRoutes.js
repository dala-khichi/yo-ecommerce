const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const validateRequest = require("../middleware/validator");
const {adminAuth} = require('../middleware/authMiddleware');
const authorizePermission = require('../middleware/authorizePermission');

const {roleValidator} = require("../validators/roleValidator.js")

router.get('/', roleController.getAllRoles);
router.get('/for_selecter', roleController.getAllRoles);
router.get('/:id', roleController.getRoleById);
router.get('/update/:id', roleController.getRoleByIdForUpdate);
router.post('/',roleController.createRole);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRole);

module.exports = router;
