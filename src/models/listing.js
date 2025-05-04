const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: String,
  address: String,
  description: String,
  contact: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Listing", listingSchema);
