const ContactQuery = require('../models/queryModel');
exports.submitQuery = async (req, res) => {
  const {
    property,
    firstName,
    lastName,
    email,
    phone,
    dob,
    disabled,
    income,
    rent,
    veteran,
    signature,
    referral,
  } = req.body;

  // Basic validation
  if (
    !property ||
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !dob ||
    !income ||
    !rent ||
    !signature
  ) {
    return res.status(400).json({ message: 'All required fields must be filled.' });
  }

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
};

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
