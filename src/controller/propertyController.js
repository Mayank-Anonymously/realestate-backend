const property_detail = require('../models/property_detail');
const housingUnit = require('../models/housingUnits');

// GET all properties
exports.getAllProperties = async (req, res) => {
	const { id } = req.params;
	try {
		const property = await housingUnit.findOne({
			_id: id,
		});

		res.json(property);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// POST a new property
exports.createProperty = async (req, res) => {
	try {
		const property = new property_detail(req.body.property);
		await property.save();
		res.status(201).json(property);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

exports.searchProperty = async (req, res) => {
	const { query } = req.params;
	console.log(query);
	try {
		const properties = await housingUnit.find({
			address: { $regex: query, $options: 'i' }, // "i" = case-insensitive
		});

		// const properties = await housingUnit.find();
		res.status(200).json(properties);
	} catch (err) {
		console.error('Search error:', err.message);
		res.status(400).json({ message: err.message });
	}
};

exports.searchPropertyCity = async (req, res) => {
	const { query } = req.params;

	try {
		const properties = await housingUnit.find({
			address: { $regex: query, $options: 'i' },
		});

		// const properties = await housingUnit.find();
		res.status(200).json(properties);
	} catch (err) {
		console.error('Search error:', err.message);
		res.status(400).json({ message: err.message });
	}
};

exports.getAllPropertiesss = async (req, res) => {
	try {
		const property = await housingUnit.find();

		res.json(property);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
