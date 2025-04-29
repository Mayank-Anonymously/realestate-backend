const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String,
  address: String,
  description: String,
  contact: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('Listing', listingSchema);
