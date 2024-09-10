const UserRole = require('../models/userRole');

const findRoleByName = async (roleName) => {
	return await UserRole.findOne({ roleName });
};

module.exports = { findRoleByName };
