const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const env = require('dotenv');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
env.config();

const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const DB_URI = process.env.DB_URI;
mongoose.connect(DB_URI).then(conn => {
	console.log(`DB connection successfull! : ${conn.connection.host}`);
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/order', orderRoutes);

app.all('*', (req, res) => {
	res.status(400).json({
		status: 'error',
		message: `Can't find ${req.originalUrl} on this server!`,
	});
});

module.exports = app;
