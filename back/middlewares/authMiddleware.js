const { verifyToken } = require('../config/security');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
	const token = req.headers.authorization;
	if (!token)
		return res.status(401).send('Access denied. No token provided.');

	try {
		const decoded = verifyToken(token);
		req.user = await User.findById(decoded._id);
		next();
	} catch (error) {
		res.status(400).send('Invalid token.');
	}
};

module.exports = { authMiddleware };
