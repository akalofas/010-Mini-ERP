const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { companyAuthMiddleware } = require('../middlewares/companyAuthMiddleware');
const { companyAdminMiddleware } = require('../middlewares/companyAdminMiddleware');
const {
	createCompanyUserRole,
	getCompanyUserRole,
	updateCompanyUserRole,
	deleteCompanyUserRole,
	addCompanyUser,
	removeCompanyUser,
} = require('../controllers/companyUserRoleController');

const router = express.Router();

// Routes for managing company user roles (company admin only)
router.post('/', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], createCompanyUserRole);
router.put('/:id', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], updateCompanyUserRole);
router.delete('/:id', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], deleteCompanyUserRole);

// Routes for managing company user roles (all company users)
router.get('/:id', authMiddleware, getCompanyUserRole);

// New routes for company admin to manage users within their company
router.post('/:companyId/users', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], addCompanyUser);
router.delete('/:companyId/users/:userId', [authMiddleware, companyAuthMiddleware, companyAdminMiddleware], removeCompanyUser);

module.exports = router;
