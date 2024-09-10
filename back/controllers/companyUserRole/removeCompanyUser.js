const CompanyUserRole = require('../../models/companyUserRole');

const removeCompanyUser = async (req, res) => {
	try {
		const { companyId, userId } = req.params;

		// Validate that required fields are provided
		if (!companyId || !userId) {
			return res.status(400).send('Company ID and User ID are required.');
		}

		// Ensure the user is part of the company
		const companyUserRole = await CompanyUserRole.findOneAndDelete({
			user: userId,
			company: companyId,
		});

		if (!companyUserRole) {
			return res.status(404).send('User not found in this company.');
		}

		res.send('User removed from the company successfully.');
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = removeCompanyUser;
