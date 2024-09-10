const User = require('../../models/user');

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

module.exports = updateUser;
