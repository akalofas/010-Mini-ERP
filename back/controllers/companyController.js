const Company = require('../models/company');

const createCompany = async (req, res) => {
	try {
		const company = new Company(req.body);
		await company.save();
		res.status(201).send(company);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getCompany = async (req, res) => {
	try {
		const company = await Company.findById(req.params.id).populate('users');
		if (!company) return res.status(404).send('Company not found');
		res.send(company);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const updateCompany = async (req, res) => {
	try {
		const company = await Company.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!company) return res.status(404).send('Company not found');
		res.send(company);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const deleteCompany = async (req, res) => {
	try {
		const company = await Company.findByIdAndDelete(req.params.id);
		if (!company) return res.status(404).send('Company not found');
		res.send(company);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = { createCompany, getCompany, updateCompany, deleteCompany };
