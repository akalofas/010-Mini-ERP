const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const {
	createUser,
	getUser,
	updateUser,
	deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.get('/:id', authMiddleware, getUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
