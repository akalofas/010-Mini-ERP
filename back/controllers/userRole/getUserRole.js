const UserRole = require('../../models/userRole');

const getUserRole = async (req, res) => {
	try {
		const userRole = await UserRole.findById(req.params.id);
		if (!userRole) return res.status(404).send('Role not found');
		res.send(userRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = getUserRole;
