const Log = require('../models/log');

const logger = {
	stream: {
		write: (message) => {
			Log.create({ level: 'info', message });
		},
	},
};

module.exports = { logger };
