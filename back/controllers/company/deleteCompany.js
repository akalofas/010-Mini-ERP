const Company = require('../../models/company');

const deleteCompany = async (req, res) => {
	try {
		const company = await Company.findByIdAndDelete(req.params.id);
		if (!company) return res.status(404).send('Company not found');
		res.send('Company deleted successfully');
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = deleteCompany;
