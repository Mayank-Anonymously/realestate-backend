const express = require("express");
const router = express.Router();
const listingController = require("../controller/listingController");

router.get("/listings", listingController.getAllListings);
router.post("/listings", listingController.createListing);

module.exports = router;
