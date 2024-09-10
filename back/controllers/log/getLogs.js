const Log = require('../../models/log');

const getLogs = async (req, res) => {
	try {
		const logs = await Log.find().sort({ createdAt: -1 });
		res.send(logs);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = getLogs;
