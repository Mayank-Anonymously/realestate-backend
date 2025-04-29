const property_detail = require("../models/property_detail");

// GET all properties
exports.getAllProperties = async (req, res) => {
    const { title, rent } = req.params
    try {
        const property = await property_detail.findOne({
            'property.name': title,
            'property.rent': Number(rent) // Ensure rent is treated as a number
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
