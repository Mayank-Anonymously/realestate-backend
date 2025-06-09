// index.js

const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const propertyRouter = require('../src/routes/propertyRouter.js');
const listrouter = require('../src/routes/listingRoute.js');
const app = express();
const cors = require('cors');
const router = require('../src/routes/authRoute.js');
const queryrouter = require('../src/routes/queryRouter.js');
const paymentrouter = require('../src/routes/paymentRouter.js');
const PORT = process.env.PORT || 9292;
require('../src/config/dbconnect.js');

// Middleware
app.use(cors());

// ✅ Body parsers added here
app.use(express.json()); // to parse application/json
app.use(express.urlencoded({ extended: true })); // to parse application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'public')));

app.use('/property', propertyRouter);
app.use('/listing', listrouter);
app.use('/auth', router);

app.use('/contact', queryrouter);
app.use('/payment-gateway', paymentrouter);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;

// module.exports.handler = serverless(app);
