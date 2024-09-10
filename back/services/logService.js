const Log = require('../models/log');

const logError = async (message, meta) => {
	await Log.create({ level: 'error', message, meta });
};

module.exports = { logError };
