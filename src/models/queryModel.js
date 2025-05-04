const mongoose = require("mongoose");

const contactQuerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  query: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("ContactQuery", contactQuerySchema);
