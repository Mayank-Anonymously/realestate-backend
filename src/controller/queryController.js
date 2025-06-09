const ContactQuery = require('../models/queryModel');
exports.submitQuery = async (req, res) => {
	const {
		property,
		salutation,
		firstName,
		middleName,
		lastName,
		suffix,
		email,
		phone,
		extension,
		address1,
		address2,
		city2,
		state2,
		headName,
		dob,
		gender,
		disabled,
		secondPerson,
		njResident,
		grossIncome,
		monthlyRent,
		veteran,
		section8,
		rentalAssistance,
		income,
		rent,
		householdSize,
		adaAccessible,
		substandardHousing,
		studioContact,
		eSignature,
		signatureDate,
		hearAbout,
		monthlyAmount,
		monthly,
		yearlyAmount,
		yearly,
	} = req.body;
	// Basic validation for required fields
	if (
		!property ||
		!salutation ||
		!firstName ||
		!lastName ||
		!email ||
		!phone ||
		!address1 ||
		!city2 ||
		!state2 ||
		!headName ||
		!dob ||
		!gender ||
		!secondPerson ||
		!njResident ||
		grossIncome === undefined ||
		monthlyRent === undefined ||
		veteran === undefined ||
		section8 === undefined ||
		rentalAssistance === undefined ||
		income === undefined ||
		rent === undefined ||
		!householdSize ||
		!eSignature ||
		!signatureDate ||
		!hearAbout ||
		monthlyAmount === undefined ||
		yearlyAmount === undefined
	) {
		return res
			.status(400)
			.json({ message: 'All required fields must be filled.' });
	}

	try {
		const newQuery = new ContactQuery({
			property,
			salutation,
			firstName,
			middleName,
			lastName,
			suffix,
			email,
			phone,
			extension,
			address1,
			address2,
			city2,
			state2,
			headName,
			dob: new Date(dob),
			gender,
			disabled: !!disabled,
			secondPerson,
			njResident,
			grossIncome: Number(grossIncome),
			monthlyRent: Number(monthlyRent),
			veteran: !!veteran,
			section8,
			rentalAssistance,
			income: Number(income),
			rent: Number(rent),
			householdSize,
			adaAccessible: !!adaAccessible,
			substandardHousing: !!substandardHousing,
			studioContact: !!studioContact,
			eSignature,
			signatureDate: new Date(signatureDate),
			hearAbout,
			monthlyAmount: Number(monthlyAmount),
			monthly: !!monthly,
			yearlyAmount: Number(yearlyAmount),
			yearly: !!yearly,
		});

  try {
    const newQuery = new ContactQuery({
      property,
      firstName,
      lastName,
      email,
      phone,
      dob: new Date(dob), // ensure proper Date format
      disabled: !!disabled,
      income,
      rent,
      veteran: !!veteran,
      signature,
      referral,
    });

    await newQuery.save();

    return res.status(200).json({ message: 'Query submitted successfully.' });
  } catch (error) {
    console.error('Error submitting query:', error);
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
}catch (error) {
    console.error('Error submitting query:', error);
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
}



exports.getAllQuery = async (req, res) => {
	const findAllQuery = await ContactQuery.find({});

	if (findAllQuery.length === 0) {
		return res.status(200).json({ message: 'No query found.' });
	}

	try {
		return res.status(200).json({
			message: 'Query submitted successfully.',
			response: findAllQuery,
		});
	} catch (error) {
		console.error('Error submitting query:', error);
		return res.status(500).json({ message: 'Server error. Please try again.' });
	}
};
