const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		firstName: { type: String },
		middleName: { type: String },
		lastName: { type: String },

		// Contact & Location Information
		address: { type: String, required: true },
		city: { type: String, required: true },
		stateOrProvince: { type: String },
		zipCode: { type: String, required: true },
		country: { type: String, required: true },
		phone: { type: String },
		email: { type: String },
		website: { type: String },
		logo: { type: String },

		// Tax and Identification Numbers
		vatNumber: { type: String },
		companyRegistrationNumber: { type: String },
		// US Tax numbers
		ein: { type: String },
		taxId: { type: String },
		usDunsNumber: { type: String },
		cageCode: { type: String },

		// Financial Information
		bankAccounts: [{ 			
			type: mongoose.Schema.Types.ObjectId,
			ref: 'financialInformation',
            default: '',
        }],

		// Legal Information
		legalForm: { type: String },
		establishedDate: { type: Date },

		// Social Media and Online Presence
		linkedIn: { type: String },
		facebook: { type: String },
		twitter: { type: String },
		instagram: { type: String },

		// Enable or disable
		enabled: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Company', companySchema);
