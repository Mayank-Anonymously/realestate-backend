const ContactQuery = require('../models/queryModel');
exports.submitQuery = async (req, res) => {
	const { title, address, name, contactNo, email, query } = req.body;
	if (!title || !address || !name || !contactNo || !email || !query) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	try {
		const newQuery = new ContactQuery({
			title,
			address,
			name,
			contactNo,
			email,
			query,
		});

		await newQuery.save();

		return res.status(200).json({ message: 'Query submitted successfully.' });
	} catch (error) {
		console.error('Error submitting query:', error);
		return res.status(500).json({ message: 'Server error. Please try again.' });
	}
};
