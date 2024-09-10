const User = require('../../models/user');
const { hashPassword } = require('../../services/authService');

const createUser = async (req, res) => {
	try {
		const existUser = await User.findOne({ email: req.body.email });
		if (existUser) {
			return res.status(409).send('User already exists');
		}
		
		const hashedPassword = await hashPassword(req.body.password);
		const user = new User({ ...req.body, password: hashedPassword });
		await user.save();
		res.status(201).send(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = createUser;
