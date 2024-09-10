const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		username: {
			email: { type: String, required: true, unique: true },
			emailVerified: { type: Boolean, default: false},
			token: { type: String, default: '', unique: true},
            verificationExpiresAt: { type: Date, default: ''}
		},
		name: { type: String, required: true },
		surname: { type: String, required: true},
		password: {
			password: { type: String, required: true },
			passwordChangeVerificationToken: { type: String, default: '', unique: true},
			passwordChangeVerificationExpiresAt: { type: Date, default: ''},
			passwordChangedAt: { type: Date, default: ''},
            passwordResetToken: { type: String, default: '', unique: true},
            passwordResetExpiresAt: { type: Date, default: ''},
            failedAttempts: { type: Number, default: 0},
            lockUntil: { type: Date, default: ''},
		},
		roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserRole' }],
		companies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Company' }],
		enabled: { type: mongoose.Schema.Types.Boolean, default: false},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
