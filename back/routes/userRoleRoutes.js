const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const {
	createUserRole,
	getUserRole,
	updateUserRole,
	deleteUserRole,
} = require('../controllers/userRoleController');

const router = express.Router();

router.post('/', authMiddleware, createUserRole);
router.get('/:id', authMiddleware, getUserRole);
router.put('/:id', authMiddleware, updateUserRole);
router.delete('/:id', authMiddleware, deleteUserRole);

module.exports = router;
