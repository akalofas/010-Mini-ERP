const UserRole = require('../../models/userRole');

const createUserRole = async (req, res) => {
	try {
		const userRole = new UserRole(req.body);
		await userRole.save();
		res.status(201).send(userRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = createUserRole;
