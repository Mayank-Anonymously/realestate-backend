const express = require('express');
const router = express.Router();
const propertyController = require('../controller/propertyController');

router.get('/get-detail-by-id/:id', propertyController.getAllProperties);
router.post('/properties', propertyController.createProperty);
router.get('/search-properties/:query', propertyController.searchProperty);
router.get(
	'/get-properties-by-city/:query',
	propertyController.searchPropertyCity
);
router.get('/get-all-properties-city', propertyController.getAllPropertiesss);
router.get(
	'/filters/descriptions',
	propertyController.getUniqueFiltersFromDescriptions
);

// router.get('/update-property-fields', propertyController.getAllPropertiesss);
module.exports = router;
