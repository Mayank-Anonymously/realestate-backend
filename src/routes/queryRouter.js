const express = require('express');
const queryrouter = express.Router();
const { submitQuery } = require('../controller/queryController');

// POST /contact/query
queryrouter.post('/query', submitQuery);

module.exports = queryrouter;
