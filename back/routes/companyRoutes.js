const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const {
	createCompany,
	getCompany,
	updateCompany,
	deleteCompany,
} = require('../controllers/companyController');

const router = express.Router();

router.post('/', authMiddleware, createCompany);
router.get('/:id', authMiddleware, getCompany);
router.put('/:id', authMiddleware, updateCompany);
router.delete('/:id', authMiddleware, deleteCompany);

module.exports = router;
