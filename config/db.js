
require('dotenv').config();

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
        });
        console.log('Database connection established');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;

