const CompanyUserRole = require('../../models/companyUserRole');

const updateCompanyUserRole = async (req, res) => {
	try {
		const { id } = req.params;
		const { companyRole } = req.body;

		// Validate that required fields are provided
		if (!id || !companyRole) {
			return res
				.status(400)
				.send('Company User Role ID and role are required.');
		}

		const companyUserRole = await CompanyUserRole.findByIdAndUpdate(
			id,
			{ companyRole },
			{ new: true }
		);
		if (!companyUserRole) {
			return res.status(404).send('Company user role not found.');
		}
		res.send(companyUserRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = updateCompanyUserRole;
