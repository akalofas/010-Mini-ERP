const FinancialInformation = require('../../models/financialInformation');
const Company = require('../../models/company');

const createFinancialInformation = async (req, res) => {
	try {
		const financialInfo = new FinancialInformation(req.body);
		await financialInfo.save();

		// Update the company with the new financial information
		await Company.findByIdAndUpdate(req.params.companyId, {
			$push: { bankAccounts: financialInfo._id },
		});

		res.status(201).send(financialInfo);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = createFinancialInformation;
