const express = require("express");
const { createProductAndPrice } = require("../controller/paymentGateway");
const paymentrouter = express.Router();

paymentrouter.post("/create-checkout-session", createProductAndPrice);
// paymentrouter.get('/get-checkout-session', getAllSessions);

module.exports = paymentrouter;
