const User = require('../models/user');
const { hashPassword } = require('../services/authService');

const createUser = async (req, res) => {
	try {
		const hashedPassword = await hashPassword(req.body.password);
		const user = new User({ ...req.body, password: hashedPassword });
		await user.save();
		res.status(201).send(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).populate(
			'roles companies'
		);
		if (!user) return res.status(404).send('User not found');
		res.send(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const updateUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!user) return res.status(404).send('User not found');
		res.send(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) return res.status(404).send('User not found');
		res.send(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = { createUser, getUser, updateUser, deleteUser };
