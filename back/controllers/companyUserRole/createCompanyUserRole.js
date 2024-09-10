const CompanyUserRole = require('../../models/companyUserRole');

const createCompanyUserRole = async (req, res) => {
	try {
		const { user, company, companyRole } = req.body;

		// Ensure that the role, user, and company are provided
		if (!user || !company || !companyRole) {
			return res
				.status(400)
				.send('User, company, and role are required.');
		}

		const companyUserRole = new CompanyUserRole({
			user,
			company,
			companyRole,
		});
		await companyUserRole.save();

		res.status(201).send(companyUserRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = createCompanyUserRole;
