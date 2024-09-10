const mongoose = require('mongoose');

const financialInformation = new mongoose.Schema(
	{
		// Financial Information
		bankAccountNumber: { type: String },
		bankName: { type: String },
		iban: { type: String },
		bicSwift: { type: String },
        country: { type: String },

		// Enable or disable
		enabled: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('financialInformation', financialInformation);
