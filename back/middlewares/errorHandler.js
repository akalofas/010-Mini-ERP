const Log = require('../models/log');

const errorHandler = (err, req, res, next) => {
	Log.create({
		level: 'error',
		message: err.message,
		meta: { stack: err.stack },
	});
	res.status(500).send('Internal Server Error');
};

module.exports = { errorHandler };
