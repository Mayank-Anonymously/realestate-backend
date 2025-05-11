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

exports.getUniqueFiltersFromDescriptions = async (req, res) => {
	try {
		const items = await housingUnit.find({}, 'description');

		const filterSet = new Set();
		const propertyTypes = new Set();
		const bedroomsSet = new Set();
		const bathroomsSet = new Set();

		items.forEach((item) => {
			const description = item.description || '';

			// Normalize & split
			const parts = description
				.replace(/\u00A0/g, ' ') // Replace non-breaking space
				.split('•')
				.map((part) => part.trim())
				.filter(Boolean);

			parts.forEach((part) => {
				// Add to the general filter set
				filterSet.add(part);

				// Check for property type keywords (can be expanded with more types)
				if (
					part.toLowerCase().includes('apartment') ||
					part.toLowerCase().includes('house') ||
					part.toLowerCase().includes('villa') ||
					part.toLowerCase().includes('land')
				) {
					propertyTypes.add(part);
				}

				// Check for bedrooms
				if (/\d+\s*bedroom/i.test(part)) {
					bedroomsSet.add(part);
				}

				// Check for bathrooms
				if (/\d+\s*bathroom/i.test(part)) {
					bathroomsSet.add(part);
				}
			});
		});

		// Convert sets to arrays
		const uniqueFilters = Array.from(filterSet);
		const uniquePropertyTypes = Array.from(propertyTypes);
		const uniqueBedrooms = Array.from(bedroomsSet);
		const uniqueBathrooms = Array.from(bathroomsSet);

		res.status(200).json({
			filters: uniqueFilters,
			propertyTypes: uniquePropertyTypes,
			bedrooms: uniqueBedrooms,
			bathrooms: uniqueBathrooms,
		});
	} catch (err) {
		console.error('Error extracting filters:', err.message);
		res.status(500).json({ message: err.message });
	}
};

exports.getFilteredProperties = async (req, res) => {
	try {
		const { location, minPrice, maxPrice, bedrooms, propertyType } = req.query;

		const filter = {};

		if (location) {
			filter.location = { $regex: new RegExp(location, 'i') };
		}

		if (bedrooms) {
			filter.description = { $regex: new RegExp(`${bedrooms} bedroom`, 'i') };
		}

		if (propertyType) {
			filter.description = {
				...filter.description,
				$regex: new RegExp(propertyType, 'i'),
			};
		}

		const priceFilter = {};
		if (minPrice) priceFilter.$gte = Number(minPrice);
		if (maxPrice) priceFilter.$lte = Number(maxPrice);
		if (Object.keys(priceFilter).length > 0) {
			filter.price = priceFilter;
		}

		const results = await housingUnit.find(filter);

		res.status(200).json(results);
	} catch (err) {
		console.error('Error fetching filtered properties:', err.message);
		res.status(500).json({ message: err.message });
	}
};
