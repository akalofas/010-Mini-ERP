const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { authAdminMiddleware } = require('../middlewares/authAdminMiddleware');
const {
	createUser,
	getUser,
	updateUser,
	deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.get('/test', (req, res) => {
	res.send('hello');
});
router.post('/', createUser);
router.get('/:id', [authMiddleware, authAdminMiddleware], getUser);
router.put('/:id', [authMiddleware, authAdminMiddleware], updateUser);
router.delete('/:id', [authMiddleware, authAdminMiddleware], deleteUser);

module.exports = router;
