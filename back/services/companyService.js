const Company = require('../models/company');

const findCompanyByName = async (name) => {
	return await Company.findOne({ name });
};

module.exports = { findCompanyByName };
