const CompanyUserRole = require('../models/companyUserRole');

const companyAdminMiddleware = async (req, res, next) => {
	const { user } = req;

	// Get the company ID from the request parameters
	const companyId = req.params.companyId || req.body.companyId;

	if (!user) {
		return res.status(401).send('Unauthorized: No user found.');
	}

	if (!companyId) {
		return res.status(400).send('Bad Request: Company ID is required.');
	}

	// Check if the user has a role in the specified company
	const companyUserRole = await CompanyUserRole.findOne({
		user: user._id,
		company: companyId,
	});

	if (!companyUserRole) {
		return res.status(403).send('Forbidden: No role in this company.');
	}

	// Check if the user is an admin in the company Case-insensitively
	if (companyUserRole.companyRole.toLowerCase() !== 'admin') {
		return res
			.status(403)
			.send('Forbidden: Only company admins can perform this action.');
	}

	// Attach the company role to the request for further authorization checks
	req.companyUserRole = companyUserRole;
	next();
};

module.exports = { companyAdminMiddleware };
