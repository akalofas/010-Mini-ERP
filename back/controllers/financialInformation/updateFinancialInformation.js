const FinancialInformation = require('../../models/financialInformation');

const updateFinancialInformation = async (req, res) => {
	try {
		const financialInfo = await FinancialInformation.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!financialInfo)
			return res.status(404).send('Financial Information not found');
		res.send(financialInfo);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = updateFinancialInformation;
