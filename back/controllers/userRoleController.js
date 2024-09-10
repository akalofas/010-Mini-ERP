const UserRole = require('../models/userRole');

const createUserRole = async (req, res) => {
	try {
		const userRole = new UserRole(req.body);
		await userRole.save();
		res.status(201).send(userRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getUserRole = async (req, res) => {
	try {
		const userRole = await UserRole.findById(req.params.id);
		if (!userRole) return res.status(404).send('Role not found');
		res.send(userRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const updateUserRole = async (req, res) => {
	try {
		const userRole = await UserRole.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!userRole) return res.status(404).send('Role not found');
		res.send(userRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const deleteUserRole = async (req, res) => {
	try {
		const userRole = await UserRole.findByIdAndDelete(req.params.id);
		if (!userRole) return res.status(404).send('Role not found');
		res.send(userRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	createUserRole,
	getUserRole,
	updateUserRole,
	deleteUserRole,
};
