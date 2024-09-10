const CompanyUserRole = require('../../models/companyUserRole');

const deleteCompanyUserRole = async (req, res) => {
	try {
		const { id } = req.params;

		// Validate that required fields are provided
		if (!id) {
			return res.status(400).send('Company User Role ID is required.');
		}

		const companyUserRole = await CompanyUserRole.findByIdAndDelete(id);
		if (!companyUserRole) {
			return res.status(404).send('Company user role not found.');
		}
		res.send('Company user role deleted successfully.');
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = deleteCompanyUserRole;
