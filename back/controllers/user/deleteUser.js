const User = require('../../models/user');

const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) return res.status(404).send('User not found');
		res.send(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = deleteUser;
