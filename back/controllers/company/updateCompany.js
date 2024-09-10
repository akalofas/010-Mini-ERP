const Company = require('../../models/company');

const updateCompany = async (req, res) => {
	try {
		const company = await Company.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!company) return res.status(404).send('Company not found');
		res.send(company);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = updateCompany;
