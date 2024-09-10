const UserRole = require('../../models/userRole');

const deleteUserRole = async (req, res) => {
	try {
		const userRole = await UserRole.findByIdAndDelete(req.params.id);
		if (!userRole) return res.status(404).send('Role not found');
		res.send(userRole);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = deleteUserRole;
