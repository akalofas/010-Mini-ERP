module.exports = {
	// Server Configuration
	SERVER_URL: process.env.SERVER_URL,
	SERVER_PORT: process.env.SERVER_PORT,

	// Client Configuration
	FRONT_URL: process.env.FRONT_URL,
	FRONT_PORT: process.env.FRONT_PORT,

	// SSL Configuration
	SSL_PRIVATE_KEY_PATH: process.env.SSL_PRIVATE_KEY_PATH,
	SSL_CERTIFICATE_PATH: process.env.SSL_CERTIFICATE_PATH,

	// MongoDB Atlas Configuration
	MONGO_DB_USERNAME: process.env.mongoDB_username,
	MONGO_DB_PASSWORD: process.env.mongoDB_password,
	MONGO_DB_URI_FIRST_PART: process.env.mongoDB_URI_FIRST_PART,
	MONGO_DB_CLUSTER: process.env.mongoDB_CLUSTER,
	MONGO_DB_DB: process.env.mongoDB_DB,
	MONGO_DB_OPTIONS: process.env.mongoDB_OPTIONS01,

	// Email Configuration
	SMTP_HOST: process.env.SMTP_HOST,
	SMTP_HOST_PORT: process.env.SMTP_HOST_PORT,
	EMAIL_USERNAME: process.env.EMAIL_USERNAME,
	EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
	SECRET_KEY: process.env.SECRET_KEY,

	// JWT Configuration
	JWT_SECRET: process.env.JWT_SECRET,

	// Node Environment
	NODE_ENV: process.env.NODE_ENV,
};
