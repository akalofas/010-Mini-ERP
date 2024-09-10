require('dotenv').config();
const express = require('express');
const https = require('https');
const fs = require('fs');
const helmet = require('helmet');
const morgan = require('morgan');
const { errorHandler } = require('./middlewares/errorHandler');
const { logger } = require('./middlewares/logger');
const environment = require('./config/environment');
const database = require('./config/database');

// Initialize Express app
const app = express();

// Security middleware
app.use(helmet());

// Logging middleware
app.use(morgan('combined', { stream: logger.stream }));

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
database.connect();

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/roles', require('./routes/userRoleRoutes'));
app.use('/api/companies', require('./routes/companyRoutes'));
app.use('/api/company-user-roles', require('./routes/companyUserRoleRoutes'));
app.use('/api/logs', require('./routes/logRoutes'));
app.use('/api/financial-information', require('./routes/financialInformationRoutes'));


// Error handling middleware
app.use(errorHandler);

// SSL configuration
const sslOptions = {
	key: fs.readFileSync(environment.SSL_PRIVATE_KEY_PATH),
	cert: fs.readFileSync(environment.SSL_CERTIFICATE_PATH),
};

// Create HTTPS server
https.createServer(sslOptions, app).listen(environment.SERVER_PORT, () => {
	console.log(
		`Server is running on ${environment.SERVER_URL}:${environment.SERVER_PORT}`
	);
});
