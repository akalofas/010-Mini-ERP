const CompanyUserRole = require('../../models/companyUserRole');

const getCompanyUserRole = async (req, res) => {
	try {
		const { id } = req.params;

		// Validate that required fields are provided
		if (!id) {
			return res.status(400).send('Company User Role ID is required.');
		}

		const companyUserRole = await CompanyUserRole.findById(id)
			.populate('user')
			.populate('company');
		if (!companyUserRole) {
			return res.status(404).send('Company user role not found.');
		}
		res.send(companyUserRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = getCompanyUserRole;
