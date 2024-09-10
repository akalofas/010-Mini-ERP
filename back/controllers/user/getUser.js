const User = require('../../models/user');

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

module.exports = getUser;
