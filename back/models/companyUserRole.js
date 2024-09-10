const mongoose = require('mongoose');

const companyUserRoleSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		company: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Company',
			required: true,
		},
		companyRole: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('CompanyUserRole', companyUserRoleSchema);
