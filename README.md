# Mini ERP System (Work In Progress)

├── config/
│   ├── database.js
│   ├── environment.js
│   ├── security.js
├── controllers/
│   ├── company/
│   │   ├── createCompany.js
│   │   ├── deleteCompany.js
│   │   ├── getCompany.js
│   │   ├── updateCompany.js
│   ├── companyUserRole/
│   │   ├── addCompanyUser.js
│   │   ├── createCompanyUserRole.js
│   │   ├── deleteCompanyUserRole.js
│   │   ├── getCompanyUserRole.js
│   │   ├── removeCompanyUser.js
│   │   ├── updateCompanyUserRole.js
│   ├── financialInformation/
│   │   ├── createFinancialInformation.js
│   │   ├── deleteFinancialInformation.js
│   │   ├── getFinancialInformation.js
│   │   ├── updateFinancialInformation.js
│   ├── log/
│   │   ├── getLogs.js
│   ├── user/
│   │   ├── createUser.js
│   │   ├── deleteUser.js
│   │   ├── getUser.js
│   │   ├── updateUser.js
│   ├── companyController.js
│   ├── companyUserRoleController.js
│   ├── financialInformationController.js
│   ├── logController.js
│   ├── userController.js
│   ├── userRoleController.js
├── middlewares/
│   ├── authAdminMiddleware.js
│   ├── authMiddleware.js
│   ├── companyAdminMiddleware.js
│   ├── companyAuthMiddleware.js
│   ├── errorHandler.js
│   ├── logger.js
├── models/
│   ├── company.js
│   ├── companyUserRole.js
│   ├── financialInformation.js
│   ├── log.js
│   ├── user.js
│   ├── userRole.js
├── routes/
│   ├── companyRoutes.js
│   ├── companyUserRoleRoutes.js
│   ├── financialInformationRoutes.js
│   ├── logRoutes.js
│   ├── userRoutes.js
│   ├── userRoleRoutes.js
├── services/
│   ├── authService.js
│   ├── companyService.js
│   ├── logService.js
│   ├── userService.js
├── server.js
├── .env
└── README.md

```
Environment Setup

.env File

Create a .env file in the root of your project with the following variables:

SERVER_URL=http://localhost
SERVER_PORT=5443

FRONT_URL=http://localhost
FRONT_PORT=3000

SSL_PRIVATE_KEY_PATH=/path/to/your/private.key
SSL_CERTIFICATE_PATH=/path/to/your/certificate.crt

mongoDB_username=yourMongoDBUsername
mongoDB_password=yourMongoDBPassword
mongoDB_URI_FIRST_PART=mongodb+srv://
mongoDB_CLUSTER=yourMongoDBCluster
mongoDB_DB=/yourDatabaseName
mongoDB_OPTIONS01=?retryWrites=true&w=majority

SMTP_HOST=smtp.your-email-provider.com
SMTP_HOST_PORT=587
EMAIL_USERNAME=your-email@example.com
EMAIL_PASSWORD=your-email-password
SECRET_KEY=yourSecretKey

JWT_SECRET=yourJWTSecret
NODE_ENV=development
```

## Packages Used

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **jsonwebtoken**: For generating and verifying JSON Web Tokens (JWT).
- **helmet**: Helps secure your Express apps by setting various HTTP headers.
- **morgan**: HTTP request logger middleware for Node.js.
- **bcryptjs**: Library to help hash passwords.
- **fs**: Native Node.js module to work with the file system.

## Middleware

### `authMiddleware.js`

This middleware authenticates the user by verifying a JWT token passed in the request headers. If valid, the user is attached to the request object.

### `authAdminMiddleware.js`

This middleware ensures the authenticated user has an `admin` role. It checks the roles of the user populated in the request object.

### `companyAuthMiddleware.js`

This middleware checks if the authenticated user is associated with a company based on the `companyId` parameter in the request.

### `companyAdminMiddleware.js`

This middleware ensures the authenticated user has an `admin` role within a specific company.

### `errorHandler.js`

This middleware handles errors globally, logging them into the `Log` model and sending a 500 status response.

### `logger.js`

Custom logging middleware that writes log messages into the `Log` model.

## Routes

### `/api/users`

- `GET /test`: Simple test route to verify the API is working.
- `POST /`: Create a new user.
- `GET /:id`: Retrieve user by ID (Admin only).
- `PUT /:id`: Update user by ID (Admin only).
- `DELETE /:id`: Delete user by ID (Admin only).

### `/api/roles`

- `POST /`: Create a new user role (Admin only).
- `GET /:id`: Retrieve user role by ID (Admin only).
- `PUT /:id`: Update user role by ID (Admin only).
- `DELETE /:id`: Delete user role by ID (Admin only).

### `/api/companies`

- `POST /`: Create a new company (Admin only).
- `GET /:id`: Retrieve company by ID (Admin only).
- `PUT /:id`: Update company by ID (Admin only).
- `DELETE /:id`: Delete company by ID (Admin only).

### `/api/company-user-roles`

- `POST /`: Create a new company user role (Admin only).
- `GET /:id`: Retrieve company user role by ID.
- `PUT /:id`: Update company user role by ID (Admin only).
- `DELETE /:id`: Delete company user role by ID (Admin only).
- `POST /:companyId/users`: Add a user to a company (Admin only).
- `DELETE /:companyId/users/:userId`: Remove a user from a company (Admin only).

### `/api/logs`

- `GET /`: Retrieve logs.

### `/api/financial-information`

- `POST /:companyId`: Create financial information for a company (Admin only).
- `GET /:id`: Retrieve financial information by ID.
- `PUT /:id`: Update financial information by ID (Admin only).
- `DELETE /:companyId/:id`: Delete financial information by ID (Admin only).

## Database Models

### `User`

Represents users in the system, including personal details, roles, and associated companies.

### `UserRole`

Represents roles that a user can have, such as `admin`.

### `Company`

Represents a company entity, including financial and legal information.

### `CompanyUserRole`

Associates a user with a company and assigns a role within that company.

### `FinancialInformation`

Stores financial details for a company, such as bank account information.

### `Log`

Stores logs generated by the application, including error logs and other informational messages.

## Controllers

The controllers handle the business logic for each route and interact with the MongoDB models to retrieve or modify data.

### User Controllers

- **createUser**: Handles creating new users.
- **getUser**: Retrieves a user by ID.
- **updateUser**: Updates a user by ID.
- **deleteUser**: Deletes a user by ID.

### User Role Controllers

- **createUserRole**: Handles creating new user roles.
- **getUserRole**: Retrieves a user role by ID.
- **updateUserRole**: Updates a user role by ID.
- **deleteUserRole**: Deletes a user role by ID.

### Company Controllers

- **createCompany**: Handles creating new companies.
- **getCompany**: Retrieves a company by ID.
- **updateCompany**: Updates a company by ID.
- **deleteCompany**: Deletes a company by ID.

### Company User Role Controllers

- **createCompanyUserRole**: Handles assigning roles to users within a company.
- **getCompanyUserRole**: Retrieves a company user role by ID.
- **updateCompanyUserRole**: Updates a company user role by ID.
- **deleteCompanyUserRole**: Deletes a company user role by ID.
- **addCompanyUser**: Adds a user to a company.
- **removeCompanyUser**: Removes a user from a company.

### Financial Information Controllers

- **createFinancialInformation**: Handles creating financial information records.
- **getFinancialInformation**: Retrieves financial information by ID.
- **updateFinancialInformation**: Updates financial information by ID.
- **deleteFinancialInformation**: Deletes financial information by ID.

### Log Controllers

- **getLogs**: Retrieves logs from the `Log` model.

## Running the Project

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Set up the `.env` file with your environment variables.
4. Run the server using `npm start`.
5. Access the API via `https://localhost:5443`.

## Conclusion

This project provides a scalable, secure foundation for a mini ERP system with robust user, role, and company management features. It is built using modern best practices and can be extended to meet additional business requirements.
