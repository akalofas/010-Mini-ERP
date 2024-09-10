const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema(
	{
		roleName: { type: String, required: true, unique: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('UserRole', userRoleSchema);
