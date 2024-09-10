const FinancialInformation = require('../../models/financialInformation');
const Company = require('../../models/company');

const deleteFinancialInformation = async (req, res) => {
	try {
		const financialInfo = await FinancialInformation.findByIdAndDelete(
			req.params.id
		);
		if (!financialInfo)
			return res.status(404).send('Financial Information not found');

		// Remove the financial information from the associated company
		await Company.findByIdAndUpdate(req.params.companyId, {
			$pull: { bankAccounts: req.params.id },
		});

		res.send('Financial Information deleted successfully');
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = deleteFinancialInformation;
