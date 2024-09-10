const Company = require('../../models/company');

const createCompany = async (req, res) => {
	try {
		const company = new Company(req.body);
		await company.save();
		res.status(201).send(company);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = createCompany;
