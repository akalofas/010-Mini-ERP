const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { companyAuthMiddleware } = require('../middlewares/companyAuthMiddleware');
const { companyAdminMiddleware } = require('../middlewares/companyAdminMiddleware');
const {
	createFinancialInformation,
	getFinancialInformation,
	updateFinancialInformation,
	deleteFinancialInformation,
} = require('../controllers/financialInformationController');

const router = express.Router();

router.post('/:companyId', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], createFinancialInformation);
router.get('/:id', [authMiddleware, companyAuthMiddleware], getFinancialInformation);
router.put('/:id', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], updateFinancialInformation);
router.delete('/:companyId/:id', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], deleteFinancialInformation);

module.exports = router;
