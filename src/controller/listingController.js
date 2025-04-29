const listing = require("../models/listing");

// Get all listings
exports.getAllListings = async (req, res) => {
  try {
    const listings = await listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new listing
exports.createListing = async (req, res) => {
  try {
    const listing = new listing(req.body);
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};