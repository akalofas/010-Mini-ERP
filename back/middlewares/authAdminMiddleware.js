const User = require('../models/user');

const authAdminMiddleware = async (req, res, next) => {
	const { user } = req;

	if (!user) {
		return res.status(401).send('Unauthorized: No user found.');
	}

	// Find the user by ID and populate their roles to get the role names
	const userRecord = await User.findById(user._id).populate('roles');

	// Check if the roles field exists and is populated
	if (!userRecord || !Array.isArray(userRecord.roles)) {
		return res.status(403).send('Forbidden: User has no roles assigned.');
	}

	// Check if the user has the 'admin' role
	const isAdmin = userRecord.roles.some((role) => role.roleName === 'admin');

	if (!isAdmin) {
		return res
			.status(403)
			.send('Forbidden: Only admins can perform this action.');
	}

	// Attach the user's roles to the request object for further use
	req.globalUserRole = userRecord.roles;
	next();
};

module.exports = { authAdminMiddleware };
