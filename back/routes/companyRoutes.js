const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { companyAuthMiddleware } = require('../middlewares/companyAuthMiddleware');
const { companyAdminMiddleware } = require('../middlewares/companyAdminMiddleware');
const {
	createCompany,
	getCompany,
	updateCompany,
	deleteCompany,
} = require('../controllers/companyController');

const router = express.Router();

router.post('/', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], createCompany);
router.get('/:id', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], getCompany);
router.put('/:id', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], updateCompany);
router.delete('/:id', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], deleteCompany);

module.exports = router;
