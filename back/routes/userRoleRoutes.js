const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { authAdminMiddleware } = require('../middlewares/authAdminMiddleware');
const {
	createUserRole,
	getUserRole,
	updateUserRole,
	deleteUserRole,
} = require('../controllers/userRoleController');

const router = express.Router();

router.post('/', [authMiddleware, authAdminMiddleware], createUserRole);
router.get('/:id', [authMiddleware, authAdminMiddleware], getUserRole);
router.put('/:id', [authMiddleware, authAdminMiddleware], updateUserRole);
router.delete('/:id', [authMiddleware, authAdminMiddleware], deleteUserRole);

module.exports = router;
