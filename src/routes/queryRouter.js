const express = require('express');
const queryrouter = express.Router();
const { submitQuery, getAllQuery } = require('../controller/queryController');

// POST /contact/query
queryrouter.post('/query', submitQuery);
queryrouter.get('/get-all-queries/CRM', getAllQuery);

module.exports = queryrouter;
