const FinancialInformation = require('../../models/financialInformation');

const getFinancialInformation = async (req, res) => {
	try {
		const financialInfo = await FinancialInformation.findById(
			req.params.id
		);
		if (!financialInfo)
			return res.status(404).send('Financial Information not found');
		res.send(financialInfo);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = getFinancialInformation;
