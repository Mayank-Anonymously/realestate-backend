const mongoose = require('mongoose');

const ContactQuerySchema = new mongoose.Schema({
  property: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dob: Date,
  disabled: Boolean,
  income: Number,
  rent: Number,
  veteran: Boolean,
  signature: String,
  referral: String,
}, { timestamps: true });

module.exports = mongoose.model('ContactQuery', ContactQuerySchema);