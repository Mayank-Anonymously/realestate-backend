const express = require('express');
const {
	loginUser,
	registerUser,
	verifyOtp,
	loginUserCRM,
	getAllUser,
	updateSubscription,
} = require('../controller/authController');
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/verify-otp', verifyOtp);
router.post('/login/CRM', loginUserCRM);
router.get('/get-all-user/CRM', getAllUser);
router.post('/update-subscription-by-user_id/:userid', updateSubscription);

module.exports = router;
