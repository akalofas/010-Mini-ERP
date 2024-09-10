const jwt = require('jsonwebtoken');
const environment = require('./environment');

const generateToken = (payload) => {
	return jwt.sign(payload, environment.JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token) => {
	return jwt.verify(token, environment.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
