const express = require("express");
const router = express.Router();
const propertyController = require("../controller/propertyController");

router.get(
  "/get-detail-by-id/:title/:rent",
  propertyController.getAllProperties
);
router.post("/properties", propertyController.createProperty);
router.get("/search-properties/:query", propertyController.searchProperty);

module.exports = router;
