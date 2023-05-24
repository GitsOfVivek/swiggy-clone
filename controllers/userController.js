const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const transporter = require('./../config/emailConfig');
const {
	resetPasswordMail,
	verifyAccountMail,
	orderCompleteMail,
} = require('./../config/mailGen');

const getUser = async (req, res) => {
	const { id } = req.body;
	const user = await User.findOne({ _id: id });
	res.status(200).json({
		status: 'success',
		data: {
			user: {
				name: user.name,
				email: user.email,
				id: user._id,
				orderList: user.orderList,
			},
		},
	});
};

const registerUser = async (req, res) => {
	const { name, email, password, confirmPassword } = req.body;
	if (!name || !email || !password || !confirmPassword) {
		return res.status(400).json({
			status: 'fail',
			message: 'Name, Email, Password and Confirm password required!',
		});
	}
	if (password !== confirmPassword) {
		return res.status(400).json({
			status: 'fail',
			message: 'Password and Confirm password not match!',
		});
	}
	try {
		const duplicateEmail = await User.findOne({ email: email });
		if (duplicateEmail) {
			return res.status(400).json({
				status: 'fail',
				message: 'Email already exists',
			});
		}
		const hashPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			name,
			email,
			password: hashPassword,
		});

		res.status(201).json({
			status: 'success',
			data: {
				user: {
					name: newUser.name,
					email: newUser.email,
					id: newUser._id,
				},
			},
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: 'Something went wrong!',
		});
	}
};

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			status: 'fail',
			message: 'Email & Password required!',
		});
	}

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				status: 'fail',
				message: 'User not found',
			});
		}

		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return res.status(403).json({
				status: 'fail',
				message: 'Incorrect email or password',
			});
		}

		const accessToken = jwt.sign(
			{
				id: user._id,
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: process.env.JWT_TOKEN_EXPIRES_IN }
		);

		res.status(200).json({
			status: 'success',
			token: accessToken,
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: 'Something went wrong!',
		});
	}
};

const changePassword = async (req, res) => {
	const { id, password, confirmPassword } = req.body;

	if (!password || !confirmPassword) {
		return res.status(400).json({
			status: 'fail',
			message: 'All fields are required!',
		});
	}
	if (password !== confirmPassword) {
		return res.status(400).json({
			status: 'fail',
			message: 'Password and Confirm password not match!',
		});
	}
	try {
		const hashPassword = await bcrypt.hash(password, 10);
		await User.findOneAndUpdate(
			{ _id: id },
			{ $set: { password: hashPassword } }
		);
		res.status(200).json({
			status: 'success',
			message: 'Password changed successfully!',
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: 'Something went wrong!',
		});
	}
};

const sendUserPasswordResetEmail = async (req, res) => {
	const { email } = req.body;

	// Check if email is present or not
	if (!email) {
		return res.status(400).json({
			status: 'fail',
			message: 'Email required!',
		});
	}

	// Finding user in DB
	const user = await User.findOne({ email });

	// If user is not found with this email
	if (!user) {
		return res.status(404).json({
			status: 'fail',
			message: `User doesn't exists!`,
		});
	}

	// Creating secret
	const secret = user._id + process.env.ACCESS_TOKEN_SECRET;

	try {
		// Creating token
		const token = jwt.sign({ id: user._id }, secret, { expiresIn: '15m' });

		// Creating link
		const link = `${process.env.RESET_PASSWORD_HOST}/user/reset-password/${user._id}/${token}`;

		const emailBody = resetPasswordMail(user.name, link);
		await transporter.sendMail({
			from: process.env.EMAIL_FROM,
			to: user.email,
			subject: 'Swiggy Clone: Reset your password',
			html: emailBody,
		});

		res.status(200).json({
			status: 'success',
			message: 'Password reset link sent... Please check your email',
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: 'Something went wrong!',
			error,
		});
	}
};

const userPasswordReset = async (req, res) => {
	const { password, confirmPassword } = req.body;
	const { id, token } = req.params;
	const user = await User.findById({ _id: id });
	const new_secret = user._id + process.env.ACCESS_TOKEN_SECRET;
	if (!password || !confirmPassword) {
		return res.status(400).json({
			status: 'fail',
			message: 'All fields are required!',
		});
	}
	if (password !== confirmPassword) {
		return res.status(400).json({
			status: 'fail',
			message: 'Password and Confirm password not match!',
		});
	}
	try {
		jwt.verify(token, new_secret);

		const hashPassword = await bcrypt.hash(password, 10);
		await User.findOneAndUpdate(
			{ _id: id },
			{ $set: { password: hashPassword } }
		);
		res.status(200).json({
			status: 'success',
			message: 'Password Reset successfully!',
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: 'Something went wrong!',
		});
	}
};

const sendVerifyUserAccountEmail = async (req, res) => {
	const { id } = req.body;
	const user = await User.findById(id);
	if (!user) {
		return res.status(404).json({
			status: 'fail',
			message: `User doesn't exists!`,
		});
	}
	const secret = user._id + process.env.ACCESS_TOKEN_SECRET;
	try {
		// Creating token
		const token = jwt.sign({ id: user._id }, secret, { expiresIn: '15m' });

		// Creating link
		const link = `${process.env.RESET_PASSWORD_HOST}/user/verify-account-link/${user._id}/${token}`;

		const emailBody = verifyAccountMail(user.name, link);

		// Sending verification mail

		await transporter.sendMail({
			from: process.env.EMAIL_FROM,
			to: user.email,
			subject: 'Swiggy Clone: Verify your account',
			html: emailBody,
		});

		res.status(200).json({
			status: 'success',
			message: 'Verification link sent... Please check your email!',
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: 'Something went wrong!',
		});
	}
};
const verifyUserAccount = async (req, res) => {
	const { id, token } = req.params;
	const user = await User.findById(id);
	if (!user) {
		return res.status(404).json({
			status: 'fail',
			message: `User doesn't exists!`,
		});
	}
	if (user.verified) {
		return res.status(400).json({
			status: 'fail',
			message: `User already verified!`,
		});
	}
	const new_secret = user._id + process.env.ACCESS_TOKEN_SECRET;

	try {
		jwt.verify(token, new_secret);

		await User.findOneAndUpdate({ _id: id }, { $set: { verified: true } });
		res.status(200).json({
			status: 'success',
			message: 'Account verified successfully!',
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: 'Something went wrong!',
		});
	}
};

const logoutUser = (req, res) => {};
module.exports = {
	getUser,
	registerUser,
	loginUser,
	logoutUser,
	changePassword,
	sendUserPasswordResetEmail,
	userPasswordReset,
	sendVerifyUserAccountEmail,
	verifyUserAccount,
};