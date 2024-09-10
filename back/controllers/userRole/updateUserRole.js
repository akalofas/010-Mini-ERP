const UserRole = require('../../models/userRole');

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

module.exports = updateUserRole;
