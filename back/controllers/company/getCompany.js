const Company = require('../../models/company');

const getCompany = async (req, res) => {
	try {
		const company = await Company.findById(req.params.id)
			.populate('bankAccounts')
			.exec();
		if (!company) return res.status(404).send('Company not found');
		res.send(company);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = getCompany;
