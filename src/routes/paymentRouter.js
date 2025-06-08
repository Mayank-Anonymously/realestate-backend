const {
	createProductAndPrice,
	getAllSessions,
} = require('../controller/paymentGateway');

const express = require('express');
const paymentrouter = express.Router();

paymentrouter.post('/create-checkout-session', createProductAndPrice);
// paymentrouter.get('/get-checkout-session', getAllSessions);

module.exports = paymentrouter;
