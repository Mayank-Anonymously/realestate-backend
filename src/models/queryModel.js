const mongoose = require('mongoose');

const ContactQuerySchema = new mongoose.Schema(
	{
		// Step 1
		property: { type: String, required: true },

		// Step 2
		salutation: String,
		firstName: { type: String, required: true },
		middleName: String,
		lastName: { type: String, required: true },
		suffix: String,
		email: { type: String, required: true },
		phone: { type: String, required: true },
		extension: String,
		address1: String,
		address2: String,
		city2: String,
		state2: String,

		// Step 3
		headName: String,
		dob: Date,
		gender: String,
		disabled: Boolean,
		secondPerson: String,
		njResident: String,
		grossIncome: Number,
		monthlyRent: Number,
		veteran: Boolean,
		section8: String,
		rentalAssistance: String,

		// Step 4
		income: Number,
		rent: Number,
		householdSize: String,
		adaAccessible: Boolean,
		substandardHousing: Boolean,
		studioContact: Boolean,

		// Step 5
		eSignature: String,
		signatureDate: Date,
		hearAbout: String,

		// Added fields
		monthlyAmount: Number,
		monthly: Boolean,
		yearlyAmount: Number,
		yearly: Boolean,

		// Optional
		referral: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('ContactQuery', ContactQuerySchema);
