const mongoose = require('mongoose');
const environment = require('./environment');

const connect = async () => {
	const connectionString = `${environment.MONGO_DB_URI_FIRST_PART}${environment.MONGO_DB_USERNAME}:${environment.MONGO_DB_PASSWORD}${environment.MONGO_DB_CLUSTER}${environment.MONGO_DB_DB}${environment.MONGO_DB_OPTIONS}`;

	try {
		await mongoose.connect(connectionString);
		console.log('Connected to MongoDB Atlas');
	} catch (error) {
		console.error('Could not connect to MongoDB Atlas', error);
		process.exit(1);
	}
};

module.exports = { connect };
