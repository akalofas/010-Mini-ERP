const CompanyUserRole = require('../../models/companyUserRole');
const User = require('../../models/user');
const Company = require('../../models/company');

const addCompanyUser = async (req, res) => {
	try {
		const { email, companyRole } = req.body;
		const { companyId } = req.params;

		// Validate that required fields are provided
		if (!email || !companyRole) {
			return res.status(400).send('Email and role are required.');
		}

		// Ensure the user exists in the global user list
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).send('User not found.');
		}

		// Ensure the company exists
		const company = await Company.findById(companyId);
		if (!company) {
			return res.status(404).send('Company not found.');
		}

		// Check if the user is already part of the company
		const existingRole = await CompanyUserRole.findOne({
			user: user._id,
			company: company._id,
		});
		if (existingRole) {
			return res
				.status(409)
				.send('User is already a member of this company.');
		}

		// Add the user to the company with the specified role
		const companyUserRole = new CompanyUserRole({
			user: user._id,
			company: company._id,
			companyRole,
		});
		await companyUserRole.save();

		res.status(201).send(companyUserRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = addCompanyUser;
