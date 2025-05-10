require('dotenv').config(); // <-- add this at the top
const jwt = require('jsonwebtoken');
const User = require('../models/authModel');
const UserCRM = require('../models/authCRM');

const { sendOtpEmail } = require('../utils/mailer');
const crypto = require('crypto');
const { response } = require('../../api');
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email, authenticated: true });

		if (user && (await user.matchPassword(password))) {
			res.json({
				_id: user._id,
				email: user.email,
				token: generateToken(user._id),
				firstName: user.firstName,
				lastName: user.lastName,
			});
		} else {
			res.status(401).json({ message: 'Invalid email or password' });
		}
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};

exports.registerUser = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	const userExists = await User.findOne({ email, authenticated: true });
	if (userExists)
		return res.status(400).json({
			message: 'User already exists or User has not been authenticated',
		});

	const generateOtp = () => {
		return crypto.randomInt(100000, 999999).toString();
	};
	const otp = generateOtp();

	const newUser = await User.create({
		email,
		password,
		firstName,
		lastName,
		otp,
		otpExpiry: Date.now() + 10 * 60 * 1000,
	});

	console.log(newUser);
	await sendOtpEmail(email, otp);

	res.status(201).json({
		_id: newUser._id,
		email: newUser.email,
		token: generateToken(newUser._id),
	});
};

exports.verifyOtp = async (req, res) => {
	const { email, otp } = req.body;
	console.log('verify', otp);
	// try {
	const user = await User.findOne({ email, otp });
	if (!user) return res.status(404).json({ message: 'User not found' });

	// Check if OTP is valid and hasn't expired
	if (user.otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });
	if (user.otpExpiry < Date.now())
		return res.status(400).json({ message: 'OTP has expired' });

	await User.findOneAndUpdate(
		{ otp: otp },
		{ $set: { authenticated: true, otp: null, otpExpiry: null } },
		{ new: true }
	);
	res.status(200).json({
		message: 'OTP verified successfully. Your account is now activated.',
	});
	// } catch (err) {

	// 	res
	// 		.status(500)
	// 		.json({ message: 'Error verifying OTP', error: err.message });
	// }
};

exports.loginUserCRM = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await UserCRM.findOne({ email });

		if (user && password) {
			res.json({
				status: 'success',
				_id: user._id,
				email: user.email,
				password: user.password,
				firstName: user.firstName,
				lastName: user.lastName,
			});
		} else {
			res.status(401).json({ message: 'Invalid email or password' });
		}
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};

exports.getAllUser = async (req, res) => {
	try {
		const user = await User.find({});
		if (user) {
			res.json({
				user: user,
			});
		} else {
			res.status(401).json({ message: 'No User found' });
		}
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};
