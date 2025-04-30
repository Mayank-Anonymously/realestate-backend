const express = require('express');
const {
	loginUser,
	registerUser,
	verifyOtp,
} = require('../controller/authController');
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/verify-otp', verifyOtp);

module.exports = router;
