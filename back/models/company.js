const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		address: { type: String, required: true },
		users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Company', companySchema);
